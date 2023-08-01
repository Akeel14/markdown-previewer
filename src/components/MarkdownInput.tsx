import styled from "styled-components";

const InputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea onChange={onChange} value={value} />
    </InputContainer>
  );
};

export default MarkdownInput;
