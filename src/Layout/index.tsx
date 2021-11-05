import React from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper/intex";
import Sidebar from "../components/Sidebar";

const BodyWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  p {
    color: green;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BodyWrapper>
      <Sidebar></Sidebar>
      <ContentWrapper>{children}</ContentWrapper>
    </BodyWrapper>
  );
};

export default Layout;
