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

export const List = styled.li<{
  isExpanded?: boolean;
  id?: string;
}>`
  color: ${Themes.color.white};
  line-height: 1;
  transition: 0.2s ease background;
  cursor: pointer;
  background: ${({ isExpanded }) => isExpanded && Themes.color.blue5};
  &:first-child {
    margin-bottom: 30px;
  }
`;

export const ListContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 17px 22px 17px 20px;
  font-size: 15px;
  &:hover {
    background: ${Themes.color.blue2};
  }
`;

export const IconHolder = styled.div`
  width: 30px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

export const Indicators = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const FontAwesomeArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 4px;
  &.svg-inline--fa {
    width: 5px;
  }
`;

export const Badge = styled.span<{ color: "primary" | "secondary" }>`
  background: ${({ color }) =>
    color === "primary" ? Themes.color.blue2 : Themes.color.peach1};
  font-size: 10px;
  border-radius: 20px;
  padding: 2px 8px;
`;

export const SubMenu = styled(ListWrapper)`
  ${List} {
    margin-bottom: 0px;
    ${ListContentWrapper} {
      padding-left: 50px;
      font-size: 14px;
    }
  }
`;
