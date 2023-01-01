import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useTicketsActions } from "@redux";
import { getTickets } from "requests";
import Filters from "./components/Filters";
import Tickets from "./components/Tickets";

function Home() {
  const { setTickets } = useTicketsActions();

  useEffect(() => {
    (async () => {
      const { tickets } = await getTickets();
      setTickets(tickets);
    })();
  }, []);

  return (
    <Row gutter={[24, 24]}>
      <Col lg={6} xl={6} xxl={6} md={24} sm={24} xs={24} order={1}>
        <Filters />
      </Col>
      <Col lg={18} xl={18} xxl={18} md={24} sm={24} xs={24} order={2}>
        <Tickets />
      </Col>
    </Row>
  );
}

export default Home;
