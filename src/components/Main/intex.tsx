import { Root } from "./styles";

export type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = (props: ContentWrapperProps) => {
  const { children } = props;
  return <Root>{children}</Root>;
};

export default ContentWrapper;
