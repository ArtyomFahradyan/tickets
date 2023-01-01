import styled from "styled-components";
import { Button, Col, Row, Typography } from "antd";

const { Title } = Typography;

export const TicketWrapper = styled(Row)<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 185 : 150)}px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.white};

  > div {
    padding: 12px;
  }

  > div:first-child {
    border-right: solid ${({ theme }) => theme.flashWhite} 1px;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const BuyButton = styled(Button)`
  background-color: ${({ theme }) => theme.buyButton};
  border: none;
  border-radius: 6px;
  font-size: 20px;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.buyHoverAndActive};
  }
`;
export const AirlinesLogo = styled.img`
  width: 150px;
`;
export const Plane = styled.img`
  width: 20px;
  height: 20px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const OriginWrapper = styled(Col)`
  text-align: left;
`;

export const DestinationWrapper = styled(Col)`
  text-align: right;
`;

export const StopsCol = styled(Col)`
  text-align: center;
`;

export const StyledTitle = styled(Title)`
  margin-top: 0;
`;
