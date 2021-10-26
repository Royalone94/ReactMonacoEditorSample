import React from "react";
import styled from "styled-components";

import Editor from "../components/Editor";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <Editor />
    </Container>
  );
};

export default Home;
