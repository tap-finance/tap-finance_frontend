import React from "react";
import { useAccount, useConnect, useEnsName, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEnsAvatar, useDisconnect, useNetwork } from "wagmi";
import { shortenWalletAddress } from "../utils/shortenWallet";
import ensLogo from "./icons/ens.png";
import pushLogo from "./icons/pushlogo.png";
import { ToastContainer } from "react-toastify";

import { useState } from "react";
import * as PushAPI from "@pushprotocol/restapi";

const ConnectButton = () => {
  const [connected, setConnected] = useState("Subscribe");
  const onSuccessNotify = () => {
    //toast("You're Subscribed!");
  };

  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });

  const { data: signer } = useSigner();
  const _signer: any = signer;

  const { connect } = useConnect({
    connector: new InjectedConnector()
  });
  const { disconnect } = useDisconnect();

  const { data: avatarImg } = useEnsAvatar({
    addressOrName: `${ensName}`
  });

  const { chain } = useNetwork();

  const subscribe = async () => {
    console.log(address);
    console.log("hell yeah");

    await PushAPI.channels.subscribe({
      signer: _signer,
      channelAddress: "eip155:5:0x555AdeA9bD94AB65970ADa6586F59289A7E510EB", // channel address in CAIP
      userAddress: "eip155:5:" + address, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
        onSuccessNotify();
        setConnected("Subscribed!");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging"
    });
  };

  console.log(chain?.name);

  if (isConnected)
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <button
          onClick={subscribe}
          className="flex rounded-3xl border-2 mr-3 px-3 bg-white"
        >
          <p className="text-zinc-900"> {connected}</p>
          <img
            className="w-5 h-5"
            style={{ marginTop: "3px", marginLeft: "5px" }}
            src={pushLogo}
            alt=""
          />
        </button>
        <p className="rounded-3xl border-2 mr-3 px-3">{chain?.name}</p>
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
