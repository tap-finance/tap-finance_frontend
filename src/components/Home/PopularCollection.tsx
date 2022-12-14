const PopularCollection = () => {
  return (
    <div className="p-10" style={{ background: "#10172A" }}>
      <p className="text-4xl pb-5">Popular Collections</p>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Collection</th>
              <th>Volume</th>
              <th>Sales</th>
              <th>Avg. Price</th>
              <th>Owners</th>
              <th>Items</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="avatar ">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                Azuki
              </td>
              <td>
                <div className="avatar ">
                  <div className="w-7 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                242.36
              </td>
              <td>16</td>

              <td>
                <div className="avatar ">
                  <div className="w-7 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                242.36
              </td>
              <td>5,041</td>
              <td>1,000</td>
              <td>
                <b>Sudoswap</b>
              </td>
            </tr>
            <tr>
              <td>
                <div className="avatar ">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                Azuki
              </td>
              <td>
                <div className="avatar ">
                  <div className="w-7 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                242.36
              </td>
              <td>16</td>

              <td>
                <div className="avatar ">
                  <div className="w-7 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                242.36
              </td>
              <td>5,041</td>
              <td>1,000</td>
              <td>
                <b>Sudoswap</b>
              </td>
            </tr>
            <tr>
              <td>
                <div className="avatar ">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                Azuki
              </td>
              <td>
                <div className="avatar ">
                  <div className="w-7 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                242.36
              </td>
              <td>16</td>

              <td>
                <div className="avatar ">
                  <div className="w-7 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                242.36
              </td>
              <td>5,041</td>
              <td>1,000</td>
              <td>
                <b>Sudoswap</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularCollection;
