import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { handelView } from "../pages/products";

const ProductBar = () => {
  return (
    <div className="w-[850px]">
      <div className="md:flex md:justify-between items-center ">
        <div className="">
          <p className=" font-bold"> Showing 50+ foods from Uttara Model Club Limited </p>
        </div>

        <div className="md:flex gap-2 items-center  mx-2">
          <div className="mx-1 ">
            <div className="bg-[rgba(131,130,130,0.13)] w-60 sm:w-62 rounded-lg md:flex items-center ">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-xl mx-1 pl-2"
              />
              <input
                className="rounded-lg p-[.4rem] bg-[rgba(131,130,130,0.13)]  "
                placeholder="Search"
              ></input>
            </div>
          </div>

          <div className="sm:mt-0 mt-1">
            <select className="  p-[.5rem] text-[1rem] rac_banner_text  border-none rounded-lg w-[120px] bg-[rgba(131,130,130,0.13)] ">
              <option value="option1 ">Low</option>
              <option value="option2 ">High</option>
            </select>
          </div>
          {/* <div className=''>
                        <button onClick={() => handelView(1)}>
                            <FontAwesomeIcon icon={faBars} className="text-xl mx-2 p-1" />
                        </button>
                        <button onClick={() => handelView(2)} >
                            <FontAwesomeIcon icon={faGrip} className="text-2xl pt-2 pb-1" />
                        </button>
                    </div> */}
        </div>
      </div>
      <hr className="text-[#ee2e2e] mt-3 sm:mb-0 mb-2 "></hr>
    </div>
  );
};

export default ProductBar;
