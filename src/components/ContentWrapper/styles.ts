import { Themes } from "../../themes";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Root = styled.main`
  width: 100%;
  background: ${Themes.color.coffee1};
  height: 100vh;
  overflow: hidden;
`;

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-top: 34px;
  margin-bottom: 25px;
  color: ${Themes.color.blue3};
  font-size: 15px;
  cursor: pointer;
`;

export const FontAwesomeNavigationBarIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 14px;
  margin-right: 10px;
  .svg-inline--fa {
    path {
      fill: ${Themes.color.blue3};
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1031px;
  margin: 0px auto;
`;

export const ScrollWrapper = styled.div`
  height: calc(100vh - ${Themes.measurements.headerHeight});
  overflow-y: auto;
  position: relative;
  top: ${Themes.measurements.headerHeight};
  padding-bottom: 67px;
`;
