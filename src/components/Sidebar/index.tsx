import {
  LogoWrapper,
  Root,
  Logo,
  List,
  ListWrapper,
  StyledFontAwesomeIcon,
  FontAwesomeArrowIcon,
  IconHolder,
  SubMenu,
  ListContentWrapper,
  Indicators,
} from "./styles";
import LogoImage from "../../img/logo.png";
import {
  faChevronDown,
  faChevronRight,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ListItemProps } from "./types";
import { listItems } from "./data";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { Badge } from "../Shared/Badge";

const ListItem = (props: ListItemProps) => {
  const { id, title, icon, badge, isExpanded, onClick, subMenu } = props;
  return (
    <List isExpanded={isExpanded} onClick={onClick} id={id}>
      <ListContentWrapper>
        <IconHolder>
          <StyledFontAwesomeIcon icon={icon} />
        </IconHolder>
        {title}
        <Indicators>
          {badge?.text && <Badge color={badge.color}>{badge.text}</Badge>}
          <FontAwesomeArrowIcon
            icon={isExpanded ? faChevronDown : faChevronRight}
          />
        </Indicators>
      </ListContentWrapper>
      {subMenu?.length && (
        <Collapse isOpened={isExpanded}>
          <SubMenu>
            {subMenu.map((item) => (
              <List id={id} key={item.id}>
                <ListContentWrapper>{item.title}</ListContentWrapper>
              </List>
            ))}
          </SubMenu>
        </Collapse>
      )}
    </List>
  );
};

const Sidebar = () => {
  const [sidebarListItems, setSidebarListItems] =
    useState<ListItemProps[]>(listItems);

  const onListItemClick = (e: any) => {
    const menuItems = sidebarListItems.map((item) => {
      return {
        ...item,
        isExpanded: !item.isExpanded ? e.currentTarget.id === item.id : false,
      };
    });
    setSidebarListItems(menuItems);
  };

  return (
    <Root>
      <LogoWrapper>
        <Logo src={LogoImage}></Logo>
      </LogoWrapper>
      <ListWrapper>
        <List onClick={onListItemClick} id="dashboard">
          <ListContentWrapper>
            <IconHolder>
              <StyledFontAwesomeIcon icon={faTachometerAlt} />
            </IconHolder>
            Dashboard
            <Indicators>
              <Badge color="primary">New</Badge>
            </Indicators>
          </ListContentWrapper>
        </List>
        {sidebarListItems.length &&
          sidebarListItems.map((item, index) => (
            <ListItem onClick={onListItemClick} {...item} key={index} />
          ))}
      </ListWrapper>
    </Root>
  );
};

export default Sidebar;
