import { Themes } from "./../../themes";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Root = styled.div`
  background: ${Themes.color.blue4};
  width: ${Themes.measurements.sidebarWidth};
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${Themes.measurements.headerHeight};
  background: ${Themes.color.blue1};
  box-shadow: 0px 0px 2px #00000059;
`;

export const Logo = styled.img`
  margin: auto;
  max-width: 150px;
  width: 100%;
`;

export const ListWrapper = styled.ul`
  margin-top: 0px;
  list-style: none;
  padding-left: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${Themes.color.white};
  padding: 17px 22px 17px 30px;
  line-height: 1;
  transition: 0.2s ease background;
  cursor: pointer;
  font-size: 15px;
  &:first-child {
    margin-bottom: 30px;
  }
  &:hover {
    background: ${Themes.color.blue2};
  }
`;

export const IconHolder = styled.div`
  width: 30px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

export const FontAwesomeArrowIcon = styled(FontAwesomeIcon)`
  margin-left: auto;
  &.svg-inline--fa.fa-w-14 {
    width: 8px;
  }
`;
