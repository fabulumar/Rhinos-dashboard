import styled from "styled-components";
import Header from "../components/Header";
import ContentWrapper from "../components/Main/intex";
import Sidebar from "../components/Sidebar";

const BodyWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  p {
    color: green;
  }
`;

const Home = () => {
  return (
    <BodyWrapper>
      <Sidebar></Sidebar>
      <ContentWrapper>
        <Header></Header>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Home;
