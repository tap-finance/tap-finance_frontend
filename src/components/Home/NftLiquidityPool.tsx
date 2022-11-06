import greenCircle from "../icons/green-circle.svg";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Alchemy, Network } from "alchemy-sdk";
import { InfinitySpin } from "react-loader-spinner";
import { shortenWalletAddress } from "../../utils/shortenWallet";
import axios from "axios";
import { FaEthereum } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import lensLogo from "../icons/lens.png";
import group from "../icons/Group.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const NftLiquidityPool = () => {
  const [dataDune, setDataDune] = useState([] as any);
  const [lens, setLens] = useState([] as any);
  const { address } = useAccount();
  const [nfts, setNfts] = useState<any>();

  const config = {
    apiKey: "QDjqTD3DZFOCTxTFPIDsRpt047P_37HO",
    network: Network.MATIC_MAINNET
  };
  const alchemy = new Alchemy(config);

  //function to fetch nfts by collection
  const fetchCollection = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://distinguished-clean-violet.ethereum-goerli.discover.quiknode.pro/56ee6fbaed5befcee61d235903b2ff1308d1a8e6/"
    );
    provider.connection.headers = { "x-qn-api-version": 1 };
    const collection = await provider.send("qn_fetchNFTsByCollection", [
      {
        method: address,
        page: 1,
        perPage: 10
      }
    ]);
    return collection;
  };

  useEffect(() => {
    fetchCollection();
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    runMain();

    axios({
      method: "get",
      url: "/sudoswap_analytics_24hr/5"
    }).then((apiResponse: any) => {
      // process the response
      const products = apiResponse.data;
      console.log(products);

      // setDataDune(apiResponse.json(products));
      setDataDune(products?.result.rows);
    });

    axios({
      method: "get",
      url: "/lens_profile_data/0xC5E07308710f669d9A6bc926de95f80b69D0C68A"
    }).then((apiResponse: any) => {
      // process the response
      const data = apiResponse.data;
      setLens(data);
      console.log(lens?.profiles.items[0].handle);

      // setDataDune(apiResponse.json(products));
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
                  className=" aspect-square  mr-7 rounded-xl border-2 mb-1"
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
              <div className="flex  text-cyan-600" style={{ fontSize: "10px" }}>
                Powered by QuickNode
              </div>
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
                          {/* Put this part before </body> tag */}
                          <input
                            type="checkbox"
                            id="my-modal"
                            className="modal-toggle"
                          />
                          <div className="modal">
                            <div className="modal-box">
                              <img src={group} alt="" />
                              <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">
                                  Yei!
                                </label>
                              </div>
                            </div>
                          </div>
                          <label
                            htmlFor="my-modal"
                            className="btn btn-outline btn-warning rounded-3xl"
                          >
                            Stake
                          </label>
                        </td>
                        <td>
                          <label htmlFor="my-modal" className="cursor-pointer">
                            <img
                              src={lensLogo}
                              alt=""
                              className="w-8 bg-slate-50 rounded-lg"
                            />
                          </label>
                          <input
                            type="checkbox"
                            id="my-modal"
                            className="modal-toggle"
                          />
                          <div className="modal">
                            <div className="modal-box">
                              <h3 className="font-bold text-lg">
                                Share this collection of NFTs on Lens Protocol!
                              </h3>
                              <p className="py-4">
                                Hi{" "}
                                <span className="text-lime-600">
                                  {lens?.profiles.items[0].handle}!
                                </span>
                              </p>
                              <p className="py-2 " style={{ fontSize: "13px" }}>
                                Click on the botton below to share it with Lens
                                Protocol,
                              </p>
                              <Link
                                to={{
                                  pathname: `https://lenster.xyz/u/${lens?.profiles.items[0].handle}`
                                }}
                                target="_blank"
                              >
                                <div className="modal-action">
                                  <label htmlFor="my-modal" className="btn">
                                    <span className="mr-2">Share</span>
                                    <img
                                      src={lensLogo}
                                      className="w-8"
                                      alt=""
                                    />
                                  </label>
                                </div>
                              </Link>
                              <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">
                                  Nope
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Put this part before </body> tag */}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <Link to={"/pool"}>
                <button className="btn success mt-2 w-full bg-sky-700 text-stone-50">
                  + Create a new pool on tapp.finance
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NftLiquidityPool;
