import AllTopVaults from "../TopVaults/AllTopVaults";

const TopVaults = () => {
  return (
    <div
      style={{ background: "#10172A" }}
      data-theme="dark"
      className="text-gray-50 flex items-center flex-col"
    >
      <AllTopVaults />

      {/* <Link to={"/top"}> */}
      <button className="btn btn-primary rounded-3xl my-3">View More</button>
      {/* </Link> */}
    </div>
  );
};

export default TopVaults;
