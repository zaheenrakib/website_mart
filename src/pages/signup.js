import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { notifyError } from "../utils/toast";
import { useRouter } from "next/router";
import PageBanner from "../components/PageBanner";
import { useAuth } from "../context/authContext";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Signup = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
    };

    try {
      const res = await axios.post(`${BASE_URL}/users/register`, userData);
      if (res.status === 201 || res.status === 200) {
        await login({ email: data.email, password: data.password });
        router.push(redirect || "/");
      }
    } catch (error) {
      notifyError(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <div className="rac_main_wrapper flex flex-col">
        <PageBanner
          pageTitle={`Sign Up`}
          bannerImage ={'bg-[url("https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg")]'}
        />
          <div className="rac_about_wrapper p-3 flex-1 flex items-center justify-center">
            <div className="rac_about_content w-full max-w-screen-md rounded-lg shadow-md">
              <div className="rac_about_box px-4 py-3">
                <div className="w-full rounded-lg">
                  <h2 className="text-3xl font-bold py-2 text-center">
                    Sign up
                  </h2>
                  <p className="text-center text-red-600 mb-4">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-slate-50">
                      Sign in
                    </Link>
                  </p>
                  <hr className="text-[#ee2e2e] my-3" />
                </div>

                <div className="grid md:grid-cols-2 gap-7">
                  {/* Left Section */}
                  <div>
                    {/* Sign Up Form Section */}
                    <div className="w-full max-w-md">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="signupForm"
                        className="space-y-4"
                      >
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 3,
                              message:
                                "Name must be at least 3 characters long",
                            },
                            maxLength: {
                              value: 30,
                              message:
                                "Name must be at most 30 characters long",
                            },
                          })}
                          className="bg-[rgba(131,130,130,0.13)] mt-1 w-full px-2 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee2e2e]"
                          placeholder="Name"
                        />
                        {errors?.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors?.name?.message}
                          </p>
                        )}
                        <input
                          type="number"
                          {...register("phone", {
                            required: "Phone number is required",
                            maxLength: {
                              value: 11,
                              message: "Phone number must be 11 digits long",
                            },
                          })}
                          className="bg-[rgba(131,130,130,0.13)] mt-1 w-full px-2 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee2e2e]"
                          placeholder="Contact Number"
                        />

                        {errors?.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors?.phone?.message}
                          </p>
                        )}

                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            validate: (value) => {
                              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                              return (
                                emailPattern.test(value) ||
                                "Invalid email address"
                              );
                            },
                          })}
                          className="bg-[rgba(131,130,130,0.13)] mt-1 w-full px-2 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee2e2e]"
                          placeholder="Email"
                        />
                        {errors?.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors?.email?.message}
                          </p>
                        )}
                        <input
                          type="text"
                          {...register("address", {
                            required: "Address is required",
                            maxLength: {
                              value: 20,
                              message:
                                "Address must be at most 100 characters long",
                            },
                          })}
                          className="bg-[rgba(131,130,130,0.13)] mt-1 w-full px-2 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee2e2e]"
                          placeholder="Address"
                        />
                        {errors?.address && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors?.address?.message}
                          </p>
                        )}
                        <input
                          type="password"
                          autoComplete="on"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message:
                                "Password must be at least 6 characters long",
                            },
                            maxLength: {
                              value: 20,
                              message:
                                "Password must be at most 20 characters long",
                            },
                          })}
                          className="bg-[rgba(131,130,130,0.13)] mt-1 w-full px-2 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee2e2e]"
                          placeholder="Password"
                        />
                        {errors?.password && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors?.password?.message}
                          </p>
                        )}
                        <input
                          type="password"
                          autoComplete="on"
                          {...register("confirmPassword", {
                            required: "Confirm password is required",
                          })}
                          className="bg-[rgba(131,130,130,0.13)] mt-1 w-full px-2 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee2e2e]"
                          placeholder="Confirm Password"
                        />
                        {passwordError && (
                          <p className="text-red-500">{passwordError}</p>
                        )}

                        <div className="rac_banner_btn pb-2">
                          <button
                            type="submit"
                            className="rac_btn w-full"
                            disabled={loading}
                          >
                            {loading ? "Sign up..." : "Sign up"}
                          </button>
                        </div>
                      </form>
                      <Link className="text-white" href="/">
                        <FontAwesomeIcon className="pr-2" icon={faLessThan} />
                        Back to Home
                      </Link>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div
                    className="p-3 flex flex-col justify-center bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url('./assets/images/cards_img/car.jpg')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Signup;
