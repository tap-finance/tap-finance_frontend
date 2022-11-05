import TopVaults from "../Home/TopVaults";

import { Navbar } from "../NavBar/navbar";

const AllTopVaults = () => {
  return (
    <div className="overflow-x-auto mx-10">
      <p className="text-4xl pb-5">Top Vaults</p>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Collection</th>
            <th>APY</th>
            <th>Rewards</th>
            <th>Rewards Expiry</th>
            <th>TVL</th>
            <th>Status</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
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
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
            </th>
            <td>17.33%</td>
            <td>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://placeimg.com/192/192/people" />
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
          <tr>
            <th>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
            </th>
            <td>17.33%</td>
            <td>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://placeimg.com/192/192/people" />
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
          <tr>
            <th>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
            </th>
            <td>17.33%</td>
            <td>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://placeimg.com/192/192/people" />
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
  );
};

export default AllTopVaults;
