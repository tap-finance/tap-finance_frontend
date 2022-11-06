import axios from "axios";
import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { useAccount, useNetwork } from "wagmi";
import TopVaults from "../Home/TopVaults";
import greenCircle from "../icons/green-circle.svg";

import { Navbar } from "../NavBar/navbar";

const AllTopVaults = () => {
  const [dataDune, setDataDune] = useState([] as any);
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { chain, chains } = useNetwork();

  useEffect(() => {
    setIsLoading(true);

    axios({
      method: "get",
      url: "/sudoswap_analytics_tvl/5"
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
  }, []);

  return (
    <div className="overflow-x-auto mx-10 flex items-center flex-col">
      <p className="text-4xl pb-5">Top Vaults</p>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Collection</th>
            <th>APY</th>
            <th>TVL</th>
            <th>Service</th>
            <th>Stake</th>
          </tr>
        </thead>
        <tbody>
          {dataDune?.map((d: any) => (
            <tr>
              <th className="active">
                <div className="avatar-group -space-x-6">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://placeimg.com/192/192/tech" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://placeimg.com/192/192/nature" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://placeimg.com/192/192/architecture" />
                    </div>
                  </div>
                </div>
              </th>
              <td>{((d?.tvl * 0.2) / 100).toFixed(2)}%</td>

              <td>
                <span className="flex ">
                  <FaEthereum
                    style={{ paddingRight: "5px", marginTop: "3px" }}
                  />

                  {(d?.tvl / 100).toFixed(2)}
                </span>
              </td>

              <td>
                <b>Sudoswap</b>
              </td>
              <td>
                <button className="btn btn-outline btn-warning rounded-3xl">
                  Stake
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTopVaults;
