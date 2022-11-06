import greenCircle from "../icons/green-circle.svg";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Alchemy, Network } from "alchemy-sdk";
import { useNetwork } from "wagmi";
import { InfinitySpin } from "react-loader-spinner";
import { shortenWalletAddress } from "../../utils/shortenWallet";

const NftLiquidityPool = () => {
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { chain, chains } = useNetwork();

  const config = {
    apiKey: "QDjqTD3DZFOCTxTFPIDsRpt047P_37HO",
    network: Network.MATIC_MAINNET
  };
  const alchemy = new Alchemy(config);

  useEffect(() => {
    setIsLoading(true);
    const main = async () => {
      // Get all NFTs
      const response = await alchemy.nft.getNftsForOwner(`${address}`);
      // Print NFTs
      return response;
    };

    const runMain = async () => {
      try {
        const data = await main();
        console.log(data);
        setNfts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    runMain();
    // eslint-disable-next-line
  }, [address]);

  console.log(
    nfts?.ownedNfts.map((nft: any) => console.log(nft?.media[0].gateway))
  );
  return (
    <div
      className="flex flex-col items-center pt-16 text-zinc-100 pb-20 "
      style={{ background: "#10172A" }}
      data-theme="dark"
    >
      <div className="pb-7">
        <p className="text-3xl">Liquidity pool for your NFT</p>
      </div>

      {nfts?.ownedNfts.map((nft: any) => (
        <div className="flex pb-10">
          <div className="">
            {nft?.media[0].gateway.includes(".mp4") ? (
              <iframe
                title="nftvid"
                className=" aspect-video aspect-square  mr-7 rounded-xl border-2 mb-1"
                src={nft?.media[0].gateway}
                style={{ height: "100px" }}
              ></iframe>
            ) : (
              <img
                className=" mr-7 rounded-xl border-2 mb-1"
                src={nft?.media[0].gateway}
                alt=""
                style={{ height: "100px" }}
              />
            )}

            <span className="badge badge-m badge-outline w-24">
              {nft?.title.substring(0, nft?.title.indexOf(" ")) + "..."}
            </span>
            <p className="text-zinc-400" style={{ fontSize: "12px" }}>
              {nft?.tokenType}
            </p>
            <></>
            <p className="text-zinc-400" style={{ fontSize: "12px" }}>
              {shortenWalletAddress(nft?.contract.address)}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>APY</th>
                  <th>Rewards Expiry</th>
                  <th>TVL</th>
                  <th>Status</th>
                  <th>Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <td>17.33%</td>

                  <td>November 14 2022</td>
                  <td>$38,820</td>
                  <td className="flex">
                    <img src={greenCircle} alt="" className="w-2 mr-1" />
                    <p>Live</p>
                  </td>
                  <td>
                    <b>Sudoswap</b>
                  </td>
                </tr>
                <tr className="hover">
                  <td>17.33%</td>

                  <td>November 14 2022</td>
                  <td>$38,820</td>
                  <td className="flex">
                    <img src={greenCircle} alt="" className="w-2 mr-1" />
                    <p>Live</p>
                  </td>
                  <td>
                    <b>Sudoswap</b>
                  </td>
                </tr>
                <tr className="hover">
                  <td>17.33%</td>

                  <td>November 14 2022</td>
                  <td>$38,820</td>
                  <td className="flex">
                    <img src={greenCircle} alt="" className="w-2 mr-1" />
                    <p>Live</p>
                  </td>
                  <td>
                    <b>Sudoswap</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn success mt-2 w-full bg-sky-700 text-stone-50">
              + Create a new pool on tapp.finance
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NftLiquidityPool;
