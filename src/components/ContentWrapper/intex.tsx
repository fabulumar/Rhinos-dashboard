import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import {
  Container,
  FontAwesomeNavigationBarIcon,
  NavigationBar,
  Root,
  ScrollWrapper,
} from "./styles";

export type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = (props: ContentWrapperProps) => {
  const { children } = props;
  return (
    <Root>
      <Header></Header>
      <ScrollWrapper>
        <Container>
          <NavigationBar>
            <FontAwesomeNavigationBarIcon
              icon={faLongArrowAltLeft}
            ></FontAwesomeNavigationBarIcon>
            Retour aux commandes
          </NavigationBar>
          {children}
        </Container>
      </ScrollWrapper>
    </Root>
  );
};

export default ContentWrapper;
