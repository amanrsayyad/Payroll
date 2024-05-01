import styled from "styled-components";

export const DashboardBg = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgb(237, 235, 235);
`;

export const DashboardMain = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 5fr;
`;

export const DashboardCard = styled.div`
  position: fixed;
  top: 11%;
  left: 18.9%;
  height: 87.5vh;
  width: 80%;
  border-radius: 7px;
  overflow-y: scroll;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  .card {
    width: 100%;
    height: 230px;
    border-radius: 10px;
    background-color: #fff;

    img {
      height: 100%;
      width: 50%;
      object-fit: cover;
    }
  }
`;
