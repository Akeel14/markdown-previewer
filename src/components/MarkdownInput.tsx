import styled from "styled-components";
import { useMarkdownStore } from "../store/useMarkdownStore";

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

const MarkdownInput = () => {
  const { markdown, setMarkdown } = useMarkdownStore();

  return (
    <InputContainer>
      <StyledTextArea
        onChange={(e: any) => setMarkdown(e.target.value)}
        value={markdown}
      />
    </InputContainer>
  );
};

export default MarkdownInput;
