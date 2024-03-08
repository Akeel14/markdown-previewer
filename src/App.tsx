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
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Header onToggleGuide={() => setShowGuide(!showGuide)} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput />
        <MarkdownOutput />
      </Container>
    </>
  );
}

export default App;
