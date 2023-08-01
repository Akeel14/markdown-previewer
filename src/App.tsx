import React, { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    color: #333;
  }
`;

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <GlobalStyles />
      <Header onToggleGuide={() => setShowGuide(!showGuide)} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  );
}

export default App;
