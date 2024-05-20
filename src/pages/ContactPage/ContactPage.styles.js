import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 50px 20px;
  background-color: #f8f9fa; // Light gray background for the form area
  min-height: 80vh; // Minimum height
`;

export const Title = styled.h1`
  text-align: center;
  color: #003366; // Deep blue
`;

export const StyledForm = styled.form`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  margin-top: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 150px; // Fixed height for the textarea
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0056b3; // Bootstrap primary blue
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003366; // Darker blue
  }
`;

export const Message = styled.div`
  margin-top: 20px;
  color: ${props => props.success ? 'green' : 'red'};
  font-size: 16px;
`;
