import React from "react";
import { ContentWrapper, MenuWrapper, Content, Logo } from "./styles";

type Props = {
  children?: React.ReactNode;
};

function TopBar({ children }: Props) {
  const handleClickLogo = () => {
    window.location.reload();
  };

  return (
    <ContentWrapper>
      <MenuWrapper>
        <Logo onClick={handleClickLogo} src="/assets/logo.png" />
      </MenuWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  );
}

export default TopBar;
