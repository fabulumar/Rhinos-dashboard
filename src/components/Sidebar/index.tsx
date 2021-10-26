import {
  LogoWrapper,
  Root,
  Logo,
  ListItem,
  ListWrapper,
  StyledFontAwesomeIcon,
  FontAwesomeArrowIcon,
  IconHolder,
} from "./styles";
import LogoImage from "../../img/logo.png";
import {
  faBarcode,
  faChartBar,
  faChevronDown,
  faDollarSign,
  faList,
  faTachometerAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <Root>
      <LogoWrapper>
        <Logo src={LogoImage}></Logo>
      </LogoWrapper>
      <ListWrapper>
        <ListItem>
          <IconHolder>
            <StyledFontAwesomeIcon icon={faTachometerAlt} />
          </IconHolder>
          Dashboard
        </ListItem>
        <ListItem>
          <IconHolder>
            <StyledFontAwesomeIcon icon={faBarcode} />
          </IconHolder>
          Produits
          <FontAwesomeArrowIcon icon={faChevronDown} />
        </ListItem>
        <ListItem>
          <IconHolder>
            <StyledFontAwesomeIcon icon={faDollarSign} />
          </IconHolder>
          Ventes
          <FontAwesomeArrowIcon icon={faChevronDown} />
        </ListItem>
        <ListItem>
          <IconHolder>
            <StyledFontAwesomeIcon icon={faTag} />
          </IconHolder>
          Achats
          <FontAwesomeArrowIcon icon={faChevronDown} />
        </ListItem>
        <ListItem>
          <IconHolder>
            <StyledFontAwesomeIcon icon={faList} />
          </IconHolder>
          Comptabilité
          <FontAwesomeArrowIcon icon={faChevronDown} />
        </ListItem>
        <ListItem>
          <IconHolder>
            <StyledFontAwesomeIcon icon={faChartBar} />
          </IconHolder>
          Reporting
          <FontAwesomeArrowIcon icon={faChevronDown} />
        </ListItem>
      </ListWrapper>
    </Root>
  );
};

export default Sidebar;
