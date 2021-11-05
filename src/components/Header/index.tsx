import {
  faBars,
  faBell,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeNavIcon,
  FontAwesomeToggleIcon,
  Nav,
  NavItem,
  Root,
  StyledBadge,
  ToggleIcon,
} from "./style";

const Header = () => {
  return (
    <Root>
      <ToggleIcon>
        <FontAwesomeToggleIcon icon={faBars} />
      </ToggleIcon>
      <Nav>
        <NavItem>
          <FontAwesomeNavIcon icon={faBell}></FontAwesomeNavIcon>
          <StyledBadge color="secondary">5</StyledBadge>
        </NavItem>
        <NavItem>
          <FontAwesomeNavIcon icon={faCog}></FontAwesomeNavIcon>
        </NavItem>
        <NavItem>
          <FontAwesomeNavIcon icon={faUser}></FontAwesomeNavIcon>
        </NavItem>
      </Nav>
    </Root>
  );
};

export default Header;
