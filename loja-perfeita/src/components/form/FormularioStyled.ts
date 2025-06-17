import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const sharedField = `
  width: 100%;
  min-width: 0;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Input = styled.input`${sharedField}`;

export const Select = styled.select`${sharedField}`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

export const FileInput = styled.input`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background-color: #58595B;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #F58220;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 15px;
  display: block;
`;
