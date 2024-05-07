import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
} from "../../utils/Styles.js";
import {
  DashCard,
  DashHeader,
  Border,
  DashForm,
} from "../../utils/DashboardStyles.js";
import { FaArrowLeftLong, fox } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  let { userId } = useParams();
  const [getAttendence, setGetAttendence] = useState();
  const [getRecipient, setGetRecipient] = useState();

  const [hasProvider, setHasProvider] = useState(false);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const refreshAccounts = (accounts) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };
    const refreshChain = (chainId) => {
      setWallet((wallet) => ({ ...wallet, chainId }));
    };
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        refreshAccounts(accounts);
        window.ethereum.on("accountsChanged", refreshAccounts);
        window.ethereum.on("chainChanged", refreshChain);
      }
    };
    getProvider();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
      window.ethereum?.removeListener("chainChanged", refreshChain);
    };
  }, []);

  const updateWallet = async (accounts) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setError(false);
        updateWallet(accounts);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      });
    setIsConnecting(false);
  };

  const disableConnect = wallet && isConnecting;

  useEffect(() => {
    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/recipient/get-recipient"
      )
      .then((response) => {
        setGetRecipient(response.data);
      });

    axios
      .get(
        "https://expensive-cod-turtleneck-shirt.cyclic.app/api/v1/attendence/get-attendence"
      )
      .then((response) => {
        setGetAttendence(response.data);
      });
  }, []);

  return (
    <DashboardBg>
      <DashboardMain>
        <Sidebar />
        <div>
          <Header />
        </div>
        <DashboardCard>
          <DashCard>
            <DashHeader>
              <div className="d-flex">
                <div className="header-icon d-flex">
                  <Link to="/payroll-admin" className="backIco d-flex">
                    <FaArrowLeftLong className="icon" />
                  </Link>
                  <h3>Process Payment</h3>
                </div>
              </div>
            </DashHeader>
            <Border></Border>
            <DashForm>
              <div className="grid-form">
                <input type="text" placeholder="Recipient Address" />
                <input type="text" placeholder="Amount in ETH" />
              </div>
              <div className="grid-form m-Top">
                <div className="input-div">
                  {getAttendence &&
                    getAttendence.map((item) => {
                      return (
                        <>
                          {item.userId === userId ? (
                            <>Payment in ETH - {item.ridePay}</>
                          ) : null}
                        </>
                      );
                    })}
                </div>
                <div className="input-div">
                  {getRecipient &&
                    getRecipient.map((item) => {
                      return (
                        <>
                          {item.userId === userId ? (
                            <>Recipient Address - {item.recipient_address}</>
                          ) : null}
                        </>
                      );
                    })}
                </div>
              </div>
              {window.ethereum?.isMetaMask && wallet.accounts.length < 1 ? (
                <button onClick={handleConnect}>Connect MetaMask</button>
              ) : (
                <button disabled={disableConnect} onClick={handleConnect}>
                  Disconnect MetaMask
                </button>
              )}
            </DashForm>
            <div className="detail-card m-Top jc-start">
              <div>
                <img src={fox} alt="" />
              </div>
              <span>METAMASK</span> Wallet {hasProvider ? "Does" : "Does Not"}{" "}
              Exist
            </div>
            {error && (
              <div className="detail-card" onClick={() => setError(false)}>
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
            {wallet.accounts.length > 0 && (
              <>
                <div className="detail-card">
                  Wallet Accounts: {wallet.accounts[0]}
                </div>
              </>
            )}
          </DashCard>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default PaymentPage;
