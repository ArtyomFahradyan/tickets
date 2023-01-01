import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  padding: 0 24px 24px 24px;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 110px;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.feedBackGround};
`;

export const Logo = styled.img`
  width: 150px;
  height: 110px;
  cursor: pointer;
`;
