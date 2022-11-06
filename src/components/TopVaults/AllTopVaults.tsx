import axios from "axios";
import { useEffect, useState } from "react";
import { FaEthereum, FaShareAlt } from "react-icons/fa";

import lens from "../icons/lens.png";
import img1 from "../icons/image.png";
import img2 from "../icons/image2.png";
import img3 from "../icons/image3.png";

const AllTopVaults = () => {
  const [dataDune, setDataDune] = useState([] as any);

  useEffect(() => {
    axios({
      method: "get",
      url: "/sudoswap_analytics_tvl/5"
    }).then((apiResponse: any) => {
      // process the response
      const products = apiResponse.data;
      console.log(products);

      // setDataDune(apiResponse.json(products));
      setDataDune(products?.result.rows);
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
            <th>
              <FaShareAlt />
            </th>
          </tr>
        </thead>
        <tbody>
          {dataDune?.map((d: any) => (
            <tr className="hover">
              <th className="active">
                <div className="avatar-group -space-x-6">
                  <div className="avatar">
                    <div className="w-12">
                      <img alt="" src={img1} />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img alt="" src={img2} />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img alt="" src={img3} />
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTopVaults;
