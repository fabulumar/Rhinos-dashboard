import styled from "styled-components";
import { Themes } from "../../themes";

export const Badge = styled.span<{ color: "primary" | "secondary" }>`
  background: ${({ color }) =>
    color === "primary" ? Themes.color.blue2 : Themes.color.peach1};
  font-size: 10px;
  border-radius: 20px;
  padding: 2px 8px;
`;
