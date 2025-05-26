import PageBanner from "../../components/PageBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const success = () => {
  return (
    <div className="rac_main_wrapper ">
      <PageBanner
        pageTitle={`Success`}
        parents={{
          title: "Home",
          link: "/",
        }}
      />

      <div
        className="rac_section rac_about_wrapper mt-10"
        style={{ padding: "36px 0 36px" }}
      >
        <div className="flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="rac_about_content flex flex-col items-center justify-center text-center w-full">
            <div className="rac_about_box flex flex-col items-center justify-center md:-12 md:px-8 sm:py-24 sm:px-24">
              <div className="flex items-center justify-center mt-2  w-16 h-16 sm:w-24 sm:h-24 bg-[#37e454] rounded-full">
                <FontAwesomeIcon
                  className="text-[3rem] sm:text-[5rem] text-white"
                  icon={faCheck}
                />
              </div>

              <div>
                <p className="text-lg sm:text-2xl mt-3 text-white">
                  Payment successful
                </p>
                <h1 className="text-base sm:text-xl m-2">
                  Thank you for your purchase!
                </h1>
                {/* <hr className="border-t border-[#ee2e2e] my-4" /> */}
              </div>

              <div className="flex flex-col-2 rac_about_box sm:flex-row  justify-center text-white text-sm sm:text-base mt-6">
                <div className="text-left space-y-2 md:w-[15rem]">
                  <p>Amount :</p>
                  <p>Date & Time :</p>
                  <p>Reference :</p>
                </div>
                <div className="text-right space-y-2">
                  <p>Tk. 166476</p>
                  <p>Jan 22, 2024, 10:30 AM</p>
                  <p>1234567890</p>
                </div>
              </div>

              <div className="rac_banner_btn mt-6">
                <Link
                  href="/"
                  className="rac_btn inline-block px-2 py-2 bg-red-500 text-white text-sm sm:text-base font-medium rounded hover:bg-red-600 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default success;
