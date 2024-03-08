import styled from "styled-components";
import ReactMarkdownRender from "./ReactMarkdownRender";
import { useMarkdownStore } from "../store/useMarkdownStore";

const OutputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  border-left: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const MarkdownOutput = () => {
  return (
    <OutputContainer>
      <ReactMarkdownRender />
    </OutputContainer>
  );
};

export default MarkdownOutput;
