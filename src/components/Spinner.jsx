import dynamic from "next/dynamic";

const GridLoader = dynamic(() => import("react-spinners/GridLoader"), {
  ssr: false,
});


const Spinner = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <GridLoader color="#dc2626" />
      </div>
    </div>
  );
};

export default Spinner;
