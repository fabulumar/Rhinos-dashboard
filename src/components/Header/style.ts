import { Themes } from "./../../themes";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "../Shared/Badge";

export const Root = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: ${Themes.measurements.sidebarWidth};
  background: ${Themes.color.white};
  width: ${`calc(100% - ${Themes.measurements.sidebarWidth})`};
  height: ${Themes.measurements.headerHeight};
  box-shadow: 0px 0px 2px #00000059;
  display: flex;
  align-items: center;
  z-index: 999;
`;

export const ToggleIcon = styled.div`
  cursor: pointer;
`;

export const FontAwesomeToggleIcon = styled(FontAwesomeIcon)`
  margin-left: 33px;
  &.svg-inline--fa {
    width: 27px;
    height: 27px;
    path {
      fill: ${Themes.color.coffee2};
    }
  }
`;

export const Nav = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  margin-left: auto;
  margin-right: 38px;
  margin-bottom: 0px;
`;

export const NavItem = styled.li`
  position: relative;
  display: inline-flex;
  width: 17px;
  margin-right: 24px;
`;

export const FontAwesomeNavIcon = styled(FontAwesomeIcon)`
  &.svg-inline--fa {
    width: 21px;
    height: 21px;
    path {
      fill: ${Themes.color.coffee2};
    }
  }
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: -10px;
  right: -17px;
  font-size: 10px;
  color: ${Themes.color.white};
`;
