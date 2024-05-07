import styled from "styled-components";

// PROFILE //
export const ProfileMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(0, 0, 46);
  background-color: #228b22;
  padding: 25px 35px;
  border-radius: 10px;

  img {
    width: 150px;
    height: 150px;
    margin-right: 2rem;
    border-radius: 10px;
  }
  .data {
    color: #fff;

    h3 {
      margin-bottom: 0.2rem;
      font-size: 30px;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

export const DashboardTabs = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 45px;
  border-bottom: 1px solid lightgray;
  background-color: #fff;
  margin-top: 1.3rem;
  border-radius: 10px;

  li {
    position: relative;
    margin-right: 2rem;
    a {
      font-size: 18px;
      color: #1d1d1d;
    }
    .active {
      color: #228b22;
    }
    .border {
      position: absolute;
      bottom: -33%;
      height: 3px;
      width: 100%;
      background-color: #228b22;
      border-radius: 7px;
    }
  }
`;

export const ProfileCard = styled.div`
  background-color: #fff;
  padding: 25px 35px;
  border-radius: 10px;
  margin-top: 1.3rem;

  h3 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .grid {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;

    .title {
      padding: 10px 25px;
      width: 25%;
      border: 1px solid #1d1d1d;
      font-size: 18px;
      font-weight: 500;
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
      border-right: none;
    }
    .data {
      padding: 10px 25px;
      width: 100%;
      border: 1px solid #1d1d1d;
      font-size: 18px;
      font-weight: 400;
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
  .input-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 18px;
      font-weight: 400;
    }
    input {
      width: 100%;
      padding: 14px 20px;
      border-radius: 15px;
      border: none;
      outline: none;
      border: 1px solid lightblue;
      font-size: 15px;
    }
  }
  button {
    font-size: 16px;
    padding: 15px 35px;
    border-radius: 15px;
    background-color: #228b22;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
  }
`;

// DASHBOARD HEADER //
export const DashCard = styled.div`
  background-color: #fff;
  padding: 0px 35px;
  padding-bottom: 2rem;
`;

export const DashHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;

  h3 {
    font-size: 25px;
    font-weight: 500;
  }
  .header-icon {
    cursor: pointer;
    .backIco {
      margin-right: 15px;
      background-color: #228b22;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      .icon {
        color: #fff;
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 11px 35px;
    border-radius: 15px;
    background-color: #228b22;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;

    .icon {
      font-size: 30px;
      margin-right: 0.6rem;
    }
  }
`;

export const DashList = styled.table`
  background-color: #fff;
  margin-top: 1.3rem;
  width: 100%;
  border: 1px solid gray;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;

  thead {
    border-collapse: collapse;
    background-color: #e8e8e8;
    th {
      text-align: left;
      padding: 10px 55px;
      font-weight: 400;
      font-size: 16px;

      .icon {
        margin-right: 0.7rem;
      }
      .number {
        font-size: 18px;
        font-weight: 600;
        color: #228b22;
        margin-left: 0.7rem;
      }
    }
  }
  tbody {
    td {
      text-align: left;
      padding: 10px 55px;
      font-weight: 400;
      font-size: 14px;
      border-bottom: 1px solid #228b22;

      button {
        padding: 4px 15px;
        border: 2px solid #228b22;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Border = styled.div`
  background-color: #228b22;
  width: 100%;
  height: 1px;
  margin: 25px auto;
`;

export const DashGrid = styled.div`
  .search-form {
    .input-container {
      position: relative;
      input {
        width: 100%;
        padding: 13px 55px;
        background-color: rgb(235, 244, 247);
        border: none;
        outline: none;
        margin-bottom: 0.8rem;
        border-radius: 7px;
        font-size: 17px;
      }
      .icon {
        position: absolute;
        top: 40%;
        left: 2%;
        transform: translateY(-50%);
        color: #228b22;
      }
    }
  }
  .button {
    width: 100%;
    padding: 10px;
    text-align: center;
    background-color: #228b22;
    border-radius: 7px;
    color: #fff;
    margin-bottom: 1.5rem;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const MapUi = styled.div`
  width: 100% !important;
  height: 500px;
`;

export const DashForm = styled.form`
  .grid-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    .input-div {
      width: 100%;
      padding: 10px 15px;
      border: none;
      outline: none;
      border-radius: 8px;
      border: 1px solid #000;
      font-size: 16px;
    }
    input,
    select {
      width: 100%;
      padding: 10px 15px;
      border: none;
      outline: none;
      border-radius: 8px;
      border: 1px solid #000;
      font-size: 16px;

      &:focus {
        border: 2px solid #228b22;
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    padding: 11px 35px;
    border-radius: 15px;
    background-color: #228b22;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    margin-top: 1.3rem;

    .icon {
      font-size: 30px;
      margin-right: 0.6rem;
    }
  }
`;

export const RidePayout = styled.div`
  padding: 15px 10px;

  .grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #228b22;
    padding: 15px 30px;
    border-radius: 8px;

    h3,
    h2 {
      margin-left: 1rem;
      font-weight: 500;
      font-size: 19px;
    }
    .icon_container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 90px;
      background-color: aliceblue;
      border-radius: 8px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
