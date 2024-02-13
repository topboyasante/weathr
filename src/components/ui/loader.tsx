import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <Oval
      visible={true}
      height="20"
      width="20"
      color="#121212"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loader;
