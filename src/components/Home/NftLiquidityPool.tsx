import greenCircle from "../icons/green-circle.svg";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Alchemy, Network } from "alchemy-sdk";
import { useNetwork } from "wagmi";
import { InfinitySpin } from "react-loader-spinner";
import { shortenWalletAddress } from "../../utils/shortenWallet";
import axios from "axios";
import { FaEthereum } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import lens from "../icons/lens.png";

const NftLiquidityPool = () => {
  const [dataDune, setDataDune] = useState([] as any);
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
        setNfts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    runMain();

    axios({
      method: "get",
      url: "/sudoswap_analytics_24hr/5"
    }).then((apiResponse: any) => {
      setIsLoading(true);

      // process the response
      const products = apiResponse.data;
      console.log(products);

      // setDataDune(apiResponse.json(products));
      setDataDune(products?.result.rows);

      setIsLoading(false);
    });

    // eslint-disable-next-line
  }, [address]);

  return (
    <div
      className="flex flex-col items-center pt-16 text-zinc-100"
      style={{ background: "#10172A" }}
      data-theme="dark"
    >
      <div className="pb-7">
        <p className="text-3xl">Liquidity pool for your NFT</p>
      </div>
      {!nfts ? (
        <h1>
          Sorry you can't see the section because you don't have no NFTs in this
          wallet
        </h1>
      ) : (
        nfts?.ownedNfts.map((nft: any) => (
          <div key={nft?.tokenId} className="flex pb-10">
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
                    <th>24h Volume</th>
                    <th>TVL</th>
                    <th>Status</th>
                    <th>Service</th>
                    <th>Stake</th>
                    <th>
                      <FaShareAlt />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {!dataDune ? (
                    <InfinitySpin width="200" color="#4fa94d" />
                  ) : (
                    dataDune?.map((d: any) => (
                      <tr className="hover">
                        <td>{(d?.tvl * 0.2).toFixed(2)}%</td>

                        <td>${(d?.volume_24hr).toFixed(2)}</td>

                        <td>
                          <span className="flex ">
                            <FaEthereum
                              style={{ paddingRight: "5px", marginTop: "3px" }}
                            />

                            {d?.tvl.toFixed(2)}
                          </span>
                        </td>

                        <td>
                          <div className="flex">
                            <img
                              src={greenCircle}
                              alt=""
                              className="w-2 mr-1"
                            />
                            <p>Live</p>
                          </div>
                        </td>
                        <td>
                          <b>Sudoswap</b>
                        </td>
                        <td>
                          <button className="btn btn-outline btn-warning rounded-3xl">
                            Stake
                          </button>
                        </td>
                        <td>
                          <button>
                            <img
                              src={lens}
                              alt=""
                              className="w-8 bg-slate-50 rounded-lg"
                            />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <button className="btn success mt-2 w-full bg-sky-700 text-stone-50">
                + Create a new pool on tapp.finance
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NftLiquidityPool;
