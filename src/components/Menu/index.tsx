import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "constants/common";
import { useSelector } from "react-redux";
import { useTicketsActions, TicketsSelectors } from "@redux";
import { MenuWrapper, ListItem, TopNav, Right } from "./styles";

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const pars = location.pathname.split("/");
  const { clearWorkspace } = useTicketsActions();
  const tickets = useSelector(TicketsSelectors.getTickets);
  const handleNavigate = (id: string) => {
    navigate(`${id}`);
  };

  const handleLogOut = () => {
    clearWorkspace();
    localStorage.removeItem("token");
  };

  return (
    <MenuWrapper>
      <TopNav>
        <div>
          {menuItems.map(({ id, name }) => {
            return (
              <ListItem
                key={id}
                onClick={() => handleNavigate(id)}
                $selected={`${id}` === pars[1]}
              >
                {name}
              </ListItem>
            );
          })}
        </div>
        <Right>right</Right>
      </TopNav>
    </MenuWrapper>
  );
}

export default Menu;
