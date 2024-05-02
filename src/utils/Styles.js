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

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-gap: 1rem;

  .card {
    background-color: #fff;
    height: 87vh;
    border-radius: 10px;

    .hero {
      height: 87vh;
      background-color: darkgreen;

      .data {
        padding-top: 70px;
        padding-left: 75px;

        h3 {
          font-size: 50px;
          text-transform: uppercase;
          line-height: 46px;
          color: #fff;
          font-family: "Jersey 15", sans-serif;
        }
        p {
          font-size: 30px;
          color: #fff;
          font-family: "Jersey 15", sans-serif;
          margin-top: 0.4rem;
        }
        .modules {
          position: relative;
          height: 33vh;
          width: 80%;
          margin: 1.9rem 0rem;

          .lineImg {
            width: 60px;
            height: 60px;
          }
          .line1 {
            position: absolute;
            top: 0%;
            left: 0%;
          }
          .line2 {
            position: absolute;
            top: 0%;
            right: 0%;
            transform: rotate(-630deg);
          }
          .line3 {
            position: absolute;
            bottom: 0%;
            left: 0%;
            transform: rotate(630deg);
          }
          .line4 {
            position: absolute;
            bottom: 0%;
            right: 0%;
            transform: rotate(-180deg);
          }
          .module-container {
            position: absolute;
            top: 16%;
            right: 0%;
            width: 100%;

            .module-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 1rem;
              padding: 0px 35px;
              .module-card {
                background-color: #fff;
                padding: 10px 15px;
                border-radius: 10px;
                font-weight: 500;

                img {
                  width: 40px;
                  height: 40px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
        button {
          margin-top: 1rem;
          padding: 7px 15px;
          background-color: #fff;
          border-radius: 8px;
          font-size: 30px;
          font-weight: 500;
          border: none;
          outline: none;
          font-family: "Jersey 15", sans-serif;
          cursor: pointer;

          .icon {
            color: brown;
            font-size: 25px;
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
