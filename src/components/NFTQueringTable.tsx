import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Alchemy, Network } from "alchemy-sdk";
import { useNetwork } from "wagmi";
import { InfinitySpin } from "react-loader-spinner";

const NFTQueringTable = () => {
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

  console.log(nfts);

  return <div>NFTQueringTable</div>;
};

export default NFTQueringTable;
