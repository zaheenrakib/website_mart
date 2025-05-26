import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/authContext";
import PageBanner from "../components/PageBanner";

const Signin = () => {
  const { login } = useAuth();
  const router = useRouter();
  const { redirect } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const userData = {
      identifier: data.identifier,
      password: data.password,
    };

    try {
      await login(userData);
      notifySuccess("Login Successful!");
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    } catch (error) {
      // notifyError(error?.response?.data?.message || "Login Failed!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <div className="rac_main_wrapper flex flex-col">
        <PageBanner
          pageTitle={`Sign In`}
          parents={{
            title: "Home",
            link: "/",
          }}
        />
        <div className="rac_about_wrapper m-3 flex-1 flex items-center justify-center">
          <div className="rac_about_content w-full max-w-screen-md rounded-lg shadow-md">
            <div className="rac_about_box px-4 py-3">
              <h2 className="text-3xl font-bold py-2 text-center">Log In</h2>
              <p className="text-center text-gray-500 mb-4">
                Welcome back! Please enter your credentials to continue.
              </p>
              <hr className="text-[#ee2e2e] my-3" />

              <div className="grid md:grid-cols-2 gap-7">
                {/* Left Section */}
                <div>
                  {/* <div className="flex items-center px-1 py-2">
                    <Image
                      width={100}
                      height={100}
                      className="w-[50px]"
                      src="/assets/images/UMCL_logo.png"
                      alt="ZAIQA Logo"
                    />
                    <h1 className="text-2xl px-2 font-bold">ZAIQA</h1>
                  </div> */}
                  <p className="font-bold text-2xl text-[#ee2e2e] px-1">
                    Log In to your Account
                  </p>
                  <hr className="text-[#ee2e2e] my-3" />

                  {/* Form Section */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                      type="text"
                      {...register("identifier", { required: "Email or MemberID is required" })}
                      className="bg-[rgba(131,130,130,0.13)] w-full px-2 py-2 text-white rounded-lg focus:ring-2 focus:ring-[#ee2e2e]"
                      placeholder="Email or MemberID"
                    />
                    {errors.identifier && (
                      <p className="text-red-500">{errors.identifier.message}</p>
                    )}

                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="bg-[rgba(131,130,130,0.13)] w-full px-2 py-2 text-white rounded-lg focus:ring-2 focus:ring-[#ee2e2e]"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}

                    <div className="flex justify-between text-sm text-white">
                      Don't have an account?{" "}
                      <Link href="/membership" className="text-red-600 font-bold italic">Request for Membership</Link>
                    </div>

                    <div className="rac_banner_btn mb-2">
                      <button
                        type="submit"
                        className="rac_btn w-full"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Log In"}
                      </button>
                    </div>

                    <div className="mt-4 mb-2">

                      <Link href="/" className="border-1 border-solid border-red-600 text-red-600 hover:bg-red-600 hover:text-zinc-50 px-3 py-2  text-sm rounded-lg ">
                        <FontAwesomeIcon className="pr-2" icon={faLessThan} />{" "}
                        Back to Home
                      </Link>
                    </div>

                  </form>
                </div>

                {/* Right Section */}
                <div
                  className="p-3 flex flex-col justify-center bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url('/assets/images/cards_img/car.jpg')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Signin;
