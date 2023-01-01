import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Typography, Row, Col, Divider, Grid } from "antd";
import { TicketsSelectors } from "@redux";
import { Ticket as TicketType } from "types";
import { currencySymbol, DATE_FORMAT } from "constants/common";
import {
  TicketWrapper,
  BuyButton,
  AirlinesLogo,
  LogoWrapper,
  DestinationWrapper,
  OriginWrapper,
  StopsCol,
  Plane,
  StyledTitle,
} from "./styles";

dayjs.locale("ru");

const { useBreakpoint } = Grid;

const { Text } = Typography;
type Props = {
  ticket: TicketType;
};

function Ticket({ ticket }: Props) {
  const screens = useBreakpoint();
  const rate = useSelector(TicketsSelectors.getRate);
  const currency = useSelector(TicketsSelectors.getCurrency);
  const stopsText: Record<number, string> = {
    1: "ПЕРЕСАДКА",
    2: "ПЕРЕСАДКИ",
    3: "ПЕРЕСАДКИ",
    4: "ПЕРЕСАДКИ",
  };

  return (
    <TicketWrapper
      $isMobile={!(screens.xxl || screens.xl || screens.md || screens.lg)}
    >
      <Col span={6} xs={11} sm={10} md={9} lg={8} xl={6} xxl={6}>
        <LogoWrapper>
          <AirlinesLogo src="/assets/airlines.svg" alt="logo" />
        </LogoWrapper>
        <div>
          <BuyButton size="large" type="primary">
            Купить за {Math.floor(ticket.price * rate)}&nbsp;
            <span
              dangerouslySetInnerHTML={{ __html: currencySymbol[currency] }}
            />
          </BuyButton>
        </div>
      </Col>
      <Col span={18} xs={13} sm={14} md={15} lg={16} xl={18} xxl={18}>
        <Row>
          <OriginWrapper span={8}>
            <StyledTitle level={4}>{ticket.departure_time}</StyledTitle>
            <StyledTitle level={5}>
              {ticket.origin}, {ticket.origin_name}
            </StyledTitle>
            <Text type="secondary">
              {dayjs(ticket.departure_date).format(DATE_FORMAT)}
            </Text>
          </OriginWrapper>
          <StopsCol span={8}>
            <Text type="secondary">
              {ticket.stops}{" "}
              {stopsText[ticket.stops] ? stopsText[ticket.stops] : "ПЕРЕСАДОК"}
            </Text>
            <Divider orientation="right">
              <Plane src="/assets/plane.png" />
            </Divider>
          </StopsCol>
          <DestinationWrapper span={8}>
            <StyledTitle level={4}>{ticket.arrival_time}</StyledTitle>
            <StyledTitle level={5}>
              {ticket.destination_name}, {ticket.destination}
            </StyledTitle>
            <Text type="secondary">
              {dayjs(ticket.arrival_date).format(DATE_FORMAT)}
            </Text>
          </DestinationWrapper>
        </Row>
      </Col>
    </TicketWrapper>
  );
}

export default Ticket;
