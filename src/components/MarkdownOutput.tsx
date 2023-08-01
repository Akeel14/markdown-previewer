import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const OutputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  border-left: 1px solid #ddd;
  background-color: #f9f9f9;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
