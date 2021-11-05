import { Col, Row, Table } from "react-bootstrap";
import styled from "styled-components";
import { Themes } from "../../themes";

export const Card = styled.div`
  background: ${Themes.color.white};
  border-radius: 4px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Themes.color.coffee2};
  padding: 14px 23px;
  font-size: 15px;
  color: ${Themes.color.blue4};
`;

export const HeaderButton = styled.button`
  padding: 10px 30px 10px 16px;
  font-size: 15px;
  color: ${Themes.color.peach1};
  border: 1px solid ${Themes.color.peach1};
  border-radius: 4px;
  margin-left: auto;
  line-height: 1;
  background: transparent;
  cursor: pointer;
`;

export const HeaderBadge = styled.div`
  padding: 3px 16px 5px 11px;
  font-size: 12px;
  font-weight: 500;
  color: ${Themes.color.blue4};
  background: ${Themes.color.yellow1};
  border-radius: 4px;
  margin-left: 33px;
  height: 24px;
`;

export const CardBody = styled.div``;

export const HighlightedText = styled.span`
  font-size: 12px;
  color: ${Themes.color.blue3};
  white-space: nowrap;
  display: block;
`;

export const InfoTextWrapper = styled.div`
  display: inline-block;
  font-size: 12px;
  max-width: 140px;
  line-height: 18px;
`;

export const TopTextWrapper = styled(Row)`
  display: flex;
  width: 100%;
  padding: 30px;
`;

export const StyledTable = styled(Table)`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 0px;
  > :not(:first-child) {
    border-top-width: 0px;
  }
  thead {
    tr {
      border-top: none;
      border-bottom-color: ${Themes.color.coffee2};
      th {
        border-right: none;
        border-left: none;
        font-size: 15px;
        font-weight: 400;
        color: ${Themes.color.blue4};
        padding-top: 22px;
        padding-bottom: 22px;
      }
    }
  }
  tbody {
    tr {
      &:last-child {
        border-bottom: none;
      }
      &:not(:last-child) {
        border-bottom-color: ${Themes.color.coffee2};
      }
      td {
        border: none;
        font-size: 15px;
        color: ${Themes.color.blue4};
        padding-top: 14px;
        padding-bottom: 14px;
        ${HeaderBadge} {
          margin-left: 0px;
          display: inline-flex;
          background: ${Themes.color.green1};
          color: ${Themes.color.white};
          height: 30px;
          padding: 6px 23px 8px 11px;
        }
      }
    }
  }
`;

export const StyledColWrapper = styled(Col)`
  margin-top: 32px;
  margin-bottom: 26px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${Themes.color.coffee2};
`;

export const LabelWrapper = styled.div`
  width: 155px;
  font-size: 15px;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding-right: 39px;
  margin-bottom: 15px;
  .input-group {
    margin-left: 28px;
  }
  .input-group-text {
    background: rgba(198, 198, 198, 0.27);
    color: ${Themes.color.coffee2};
    font-size: 15px;
    font-weight: 500;
    padding: 9px 10px;
    border-color: ${Themes.color.coffee2};
  }
  .form-control {
    font-size: 15px;
    color: ${Themes.color.blue4};
    border-left: none;
    padding-left: 13px;
    border-color: ${Themes.color.coffee2};
  }
`;
