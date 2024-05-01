import styled from "styled-components";

export const AuthBg = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(237, 235, 235);
`;

export const AuthCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff !important;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 25px;
  width: 500px;

  .logo {
    margin-bottom: 0.3rem;
    img {
      width: 60px;
      height: 60px;
    }
    h3 {
      font-weight: 500;
      margin-left: 0.5rem;

      span {
        color: #228b22;
      }
    }
  }

  h3 {
    font-weight: 500;
    font-size: 21px;
  }
  .border {
    background-color: lightgray;
    width: 100%;
    height: 2px;
    margin: 15px 0px;
  }
  .input-container {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    label {
      font-weight: 400;
      margin-bottom: 0.3rem;
    }
    input, select {
      border: 1px solid lightgray;
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 1rem;
      outline: none;
      font-size: 14px;

      &:focus {
        border: 2px solid #228b22;
      }
    }
    .icon {
      position: absolute;
      top: 58%;
      transform: translateY(-50%);
      right: 3%;
      font-size: 20px;
      cursor: pointer;
    }
  }
  p {
    text-align: center;
    font-weight: 500;
  }
  a {
    text-align: center;
    color: blue;
    font-weight: 500;
  }
  button {
    /* background-color: rgb(83, 83, 242); */
    background-color: #228b22;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
  .agree {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1.2rem;
    margin-top: 0.3rem;

    input {
      width: 16px;
      height: 16px;
      margin-right: 0.7rem;
    }
  }
`;
