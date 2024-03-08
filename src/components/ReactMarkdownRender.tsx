import ReactMarkdown from "react-markdown";
import { useMarkdownStore } from "../store/useMarkdownStore";

const ReactMarkdownRender = () => {
  const { markdown } = useMarkdownStore();
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default ReactMarkdownRender;
