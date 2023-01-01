import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Pagination, PaginationProps } from "antd";
import { TicketsSelectors } from "@redux";
import { PAGE_SIZE } from "constants/common";
import Ticket from "./components/Ticket";

function Tickets() {
  const tickets = useSelector(TicketsSelectors.getTickets);
  const filters = useSelector(TicketsSelectors.getFilters);
  const [current, setCurrent] = useState(1);
  const filtredTickets = filters.length
    ? tickets.filter((ticket) => filters.includes(ticket.stops))
    : tickets;
  const items = filtredTickets.slice(
    (current - 1) * PAGE_SIZE,
    current * PAGE_SIZE
  );

  const onChange: PaginationProps["onShowSizeChange"] = (current) => {
    setCurrent(current);
  };

  return (
    <div>
      {items.map((ticket) => (
        <Ticket key={ticket.price + ticket.destination} ticket={ticket} />
      ))}
      {filtredTickets.length > PAGE_SIZE && (
        <Pagination
          defaultPageSize={PAGE_SIZE}
          onChange={onChange}
          defaultCurrent={1}
          current={current}
          total={filtredTickets.length}
        />
      )}
    </div>
  );
}

export default Tickets;
