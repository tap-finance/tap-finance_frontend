const NftLiquidityPool = () => {
  return (
    <div
      className="flex flex-col items-center pt-16 text-zinc-100 pb-20 "
      style={{ background: "#10172A" }}
      data-theme="dark"
    >
      <div className="pb-7">
        <p className="text-3xl">Liquidity pool for your NFT</p>
      </div>
      <div className="flex" style={{ background: "#10172A" }}>
        <div className="">
          <img
            className=" mr-7 rounded-xl border-2 mb-1"
            src={require("./examplenft.png")}
            alt=""
            style={{ height: "100px" }}
          />
          CryptoPunk
          <p style={{ fontSize: "12px" }}>ERC-721</p>
          <p style={{ fontSize: "12px" }}>0x...xyz</p>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>APY</th>
                <th>Rewards</th>
                <th>Rewards Expiry</th>
                <th>TVL</th>
                <th>Status</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <td>17.33%</td>
                <td>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-8">
                        <img alt="" src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8">
                        <img alt="" src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>November 14 2022</td>
                <td>$38,820</td>
                <td>Live</td>
                <td>
                  <b>Sudoswap</b>
                </td>
              </tr>
              <tr className="hover">
                <td>17.33%</td>
                <td>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-8">
                        <img alt="" src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8">
                        <img alt="" src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>November 14 2022</td>
                <td>$38,820</td>
                <td>Live</td>
                <td>
                  <b>Sudoswap</b>
                </td>
              </tr>
              <tr className="hover">
                <td>17.33%</td>
                <td>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-8">
                        <img alt="" src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8">
                        <img alt="" src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>November 14 2022</td>
                <td>$38,820</td>
                <td>Live</td>
                <td>
                  <b>Sudoswap</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NftLiquidityPool;
