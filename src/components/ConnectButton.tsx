import React from "react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEnsAvatar, useDisconnect, useNetwork } from "wagmi";
import { shortenWalletAddress } from "../utils/shortenWallet";
import ensLogo from "./icons/ens.png";
import pushLogo from "./icons/pushlogo.png";

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector()
  });
  const { disconnect } = useDisconnect();

  const {
    data: avatarImg,
    isError,
    isLoading
  } = useEnsAvatar({
    addressOrName: `${ensName}`
  });
  const { chain, chains } = useNetwork();

  console.log(chain?.name);

  if (isConnected)
    return (
      <>
        <div className="flex rounded-3xl border-2 mr-3 p-1">
          <p className="">Subscribe</p>
          <img
            className="w-5 h-5"
            style={{ marginTop: "3px", marginLeft: "5px" }}
            src={pushLogo}
            alt=""
          />
        </div>
        <p className="rounded-3xl border-2 mr-3 p-1">{chain?.name}</p>
        <button onClick={() => disconnect()}>
          <div className="flex border-zinc-200 border-2 rounded-3xl p-2">
            {avatarImg && (
              <div className="avatar online mr-3">
                <div className="w-10 mask mask-hexagon">
                  <img src={avatarImg} alt="avatar" />
                </div>
              </div>
            )}
            <div className="flex flex-col justify-center text-sm">
              <div>{ensName}</div>
              <div>{shortenWalletAddress(address as string)}</div>
              <div
                className="flex justify-center text-cyan-600"
                style={{ fontSize: "10px" }}
              >
                Powered by ENS
                <img
                  className="w-3 h-3"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  src={ensLogo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </button>
      </>
    );

  return (
    <button
      className="btn btn-sm btn-outline btn-secondary mr-3"
      onClick={() => connect()}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
