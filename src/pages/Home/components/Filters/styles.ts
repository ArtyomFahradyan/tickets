import styled from "styled-components";
import { Checkbox, Typography } from "antd";

const { Text } = Typography;

export const FiltersWrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.white};

  > div:first-child {
    padding: 16px;
  }
  > div:last-child {
    > span {
      padding: 0 16px;
    }
  }
`;

export const FilterBlock = styled.div`
  padding-bottom: 24px;
`;

export const FilterTitle = styled(Text)`
  margin-bottom: 12px;
  display: block;
`;

export const CheckboxGroup = styled(Checkbox.Group)`
  display: grid;

  .ant-checkbox-group-item {
    margin-top: 6px;
    padding: 4px 16px;

    &:hover {
      background-color: ${({ theme }) => theme.checkboxHover};
    }
  }
`;
export const AllCheckbox = styled(Checkbox)`
  width: 100%;
  padding: 4px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.checkboxHover};
  }
`;
