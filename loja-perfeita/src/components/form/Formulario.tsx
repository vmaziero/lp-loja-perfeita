import React, { useState, useEffect } from 'react';
import { useToast } from '../../utils/toast';
import { motion } from 'framer-motion';
import { Button, ErrorMessage, FormContainer, Input, Label, Select } from './FormularioStyled';
import api from '../../services/api';
import { maskCNPJ, maskCPF, maskPhone } from '../../helpers/masks';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface ValidacaoInscricao {
  lojaId: number;
  valida: boolean;
}

interface Inscricao {
  rank: 'PRIMEIRO_LUGAR' | 'SEGUNDO_LUGAR' | 'PREMIACAO_UNICA';
  lastUpdateDate: string;
}

interface VendedorComInscricao {
  name: string;
  inscricao: Inscricao[];
}

interface VendedorResumo {
  nome: string;
  rank: string;
  ultimaAtualizacao: string;
}

const Formulario: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [codigoValidacao, setCodigoValidacao] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [fotoSelecionada, setFotoSelecionada] = useState<File | null>(null);
  const [vendedorId, setVendedorId] = useState<string | null>(null);
  const [contatoId, setContatoId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [vendedor, setVendedor] = useState<any>(null);
  const [idDaLoja, setIdDaLoja] = useState<number | null>(null);
  const { toast } = useToast();
  const [cicloId, setCicloId] = useState<number | null>(null);
  const [validacaoInscricao, setValidacaoInscricao] = useState<ValidacaoInscricao | null>(null);
  const [vendedoresCadastrados, setVendedoresCadastrados] = useState<VendedorResumo[]>([]);

  const handleCodigoValidacaoBlur = async () => {
    if (codigoValidacao) {
      try {
        const { data } = await api.get(`/ciclos/${codigoValidacao}`);
        if (data && data.ciclo && data.ciclo.id) {
          setCicloId(data.ciclo.id);
          localStorage.setItem('token', data.token);
        } else {
          toast.error('Ciclo não encontrado');
        }
      } catch (err) {
        toast.error('Erro ao buscar ciclo');
      }
    }
  };

  const handleCnpjBlur = async () => {
    if (cnpj && cicloId) {
      try {
        const { data } = await api.get(`/lojas/cnpj/${cnpj.replace(/\D/g, '')}`);
        const lojaId = data.id;
        setIdDaLoja(lojaId);

        const { data: validacao } = await api.get(`/inscricoes/validar-inscricao?lojaId=${lojaId}&cicloId=${cicloId}`);
        setValidacaoInscricao(validacao);

        if (validacao.valida) {
          toast.success('Loja apta para inscrição!');
        } else {
          toast.error('Loja não atingiu a meta ou inscrição inválida.');
        }

        const vendedores = (data.vendedor as VendedorComInscricao[])
          ?.filter((v) => v.inscricao?.length > 0)
          .map((v): VendedorResumo => ({
            nome: v.name,
            rank: v.inscricao[0].rank,
            ultimaAtualizacao: new Date(v.inscricao[0].lastUpdateDate).toLocaleDateString('pt-BR'),
          }))
          .filter((v) => v.rank === 'PRIMEIRO_LUGAR' || v.rank === 'SEGUNDO_LUGAR');

        setVendedoresCadastrados(vendedores);

      } catch (err) {
        toast.error('Erro ao buscar loja ou validar inscrição');
      }
    }
  };

  useEffect(() => {
    if (vendedoresCadastrados.length > 0) {
      const mensagem = vendedoresCadastrados.map(v => 
        `🏅 ${v.rank.replace('_', ' ')}:\n- Nome: ${v.nome}\n- Última atualização: ${v.ultimaAtualizacao}`
      ).join('\n\n');

      alert(`Cadastros já realizados para a loja:\n\n${mensagem}`);
    }
  }, [vendedoresCadastrados]);

  const handleCpfBlur = async () => {
    if (cpf) {
      try {
        const { data } = await api.get(`/vendedores/cpf/${cpf.replace(/\D/g, '')}`);
        setVendedor(data);
        setNomeCompleto(data.name);
        setDataNascimento(data.birthDate);
        setWhatsapp(data.contatos[0]?.whatsapp || '');
        setEmail(data.contatos[0]?.email || '');
        setVendedorId(data.id);
        setContatoId(data.contatos[0]?.id);
      } catch (err) {
        setVendedor(null);
        setVendedorId(null);
        setContatoId(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!codigoValidacao || !cnpj || !cpf || !classificacao || !nomeCompleto || !whatsapp || !dataNascimento || !email) {
      setError('Todos os campos são obrigatórios (exceto fotos).');
      setLoading(false);
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      setError('Email inválido.');
      setLoading(false);
      return;
    }

    try {
      let vendedorIdFinal = vendedorId;

      const payloadVendedor = {
        name: nomeCompleto,
        cpf: cpf.replace(/\D/g, ''),
        loja: { id: idDaLoja },
        birthDate: `${dataNascimento}T00:00:00`
      };

      if (vendedorId) {
        const formData = new FormData();
        const blob = new Blob([JSON.stringify(payloadVendedor)], { type: 'application/json' });
        formData.append('vendedor', blob);
        if (fotoSelecionada) formData.append('photo', fotoSelecionada);
        await api.put(`/vendedores/${vendedorId}`, formData);
      } else {
        const formData = new FormData();
        const blob = new Blob([JSON.stringify(payloadVendedor)], { type: 'application/json' });
        formData.append('vendedor', blob);
        if (fotoSelecionada) formData.append('photo', fotoSelecionada);
        const { data: novoVendedor } = await api.post('/vendedores', formData);
        vendedorIdFinal = novoVendedor.id;
        setVendedorId(vendedorIdFinal);
      }

      const payloadContato = {
        whatsapp: `55${whatsapp.replace(/\D/g, '')}`,
        email,
      };

      if (contatoId) {
        await api.put(`/contatos/${contatoId}`, payloadContato);
      } else {
        const { data: novoContato } = await api.post('/contatos', {
          ...payloadContato,
          vendedor: { id: vendedorIdFinal },
        });
        setContatoId(novoContato.id);
      }

      const payloadInscricao = {
        rank:
          classificacao === 'Primeiro lugar'
            ? 'PRIMEIRO_LUGAR'
            : classificacao === 'Segundo lugar'
            ? 'SEGUNDO_LUGAR'
            : 'PREMIACAO_UNICA',
        supervisorStatus: '_1VALIDACAO_PENDENTE',
        vertemStatus: '_6NAO_SE_APLICA',
        loja: { id: idDaLoja },
        ciclo: { id: cicloId },
        vendedor: { id: vendedorIdFinal },
      };

      await api.post('/inscricoes', payloadInscricao);

      toast.success('Inscrição enviada com sucesso!');
    } catch (err) {
      console.error(err);
      toast.error('Erro ao enviar os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <FormContainer onSubmit={handleSubmit}>
        <Label>Código de validação*</Label>
        <Input
          type="text"
          value={codigoValidacao}
          onChange={(e) => setCodigoValidacao(e.target.value)}
          onBlur={handleCodigoValidacaoBlur}
        />

        <Label>CNPJ*</Label>
        <Input
          type="text"
          value={maskCNPJ(cnpj)}
          onChange={(e) => setCnpj(e.target.value)}
          onBlur={handleCnpjBlur}
        />

        <Label>CPF do vendedor*</Label>
        <Input
          type="text"
          value={maskCPF(cpf)}
          onChange={(e) => setCpf(e.target.value)}
          onBlur={handleCpfBlur}
        />

        <Label>Classificação do vendedor*</Label>
        <Select value={classificacao} onChange={(e) => setClassificacao(e.target.value)}>
          <option value="">Selecione</option>
          <option value="Primeiro lugar">Primeiro lugar</option>
          <option value="Segundo lugar">Segundo lugar</option>
          <option value="Premiação única">Premiação única</option>
        </Select>

        <Label>Nome completo*</Label>
        <Input type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />

        <Label>WhatsApp do vendedor*</Label>
        <Input
          type="text"
          value={maskPhone(whatsapp)}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <Label>Email do vendedor*</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label>Data de nascimento*</Label>
        <Input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />

        <Label>Fotos dos vendedores destaque (opcional)</Label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFotoSelecionada(e.target.files?.[0] || null)}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">
          {loading ? 'Enviando…' : 'Enviar'}
        </Button>
      </FormContainer>
    </motion.div>
  );
};

export default Formulario;
