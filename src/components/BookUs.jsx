import Image from "next/image";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { notifyError, notifySuccess } from "../utils/toast";
import axios from "axios";
import useGetDatas from "../hooks/useGetData";
import { useAuth } from "../context/authContext";
import { FadeLoader } from "react-spinners";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BookUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();
  const [northDhaka, setNorthDhaka] = useState(true);
  const [southDhaka, setSouthDhaka] = useState(false);
  const { data } = useGetDatas("/events/all", "events");
  // const { data:Place } = useGetDatas("/city-place", "city-place");
  const { user } = useAuth();


  const messageLength = useWatch({control, name: "description"});

  // console.log(user);

  const onSubmit = async (data) => {
    const bookingData = {
      ...data,
      user_id: user?.id,
      status: 1,
    };

    if (!user) {
      notifyError("Please Sign in First");
      return;
    }
    const res = await axios.post(`${BASE_URL}/booking/add`, bookingData);

    if(res.status === 200 || res.status === 201) {
      notifySuccess("Booking Request Sent Successfully");
      reset();
    } else {
      notifyError("Booking Request Failed");
    }
  };
  const cityArea = [
    {
      Dhaka_North: [
        "Banani",
        "Bashundhara",
        "Cantonment",
        "Dakshinkhan",
        "Darus Salam",
        "Gulshan",
        "Kafrul",
        "Mirpur Model",
        "Pallabi",
        "Rampura",
        "Shah Ali",
        "Shahjadpur",
        "Tejgaon",
        "Tejgaon Industrial Area",
        "Turag",
        "Uttara East",
        "Uttara West",
        "Vatara",
      ],
      Dhaka_South: [
        "Motijheel",
        "Kotwali",
        "Jatrabari",
        "Lalbagh",
        "Hazaribagh",
        "Kamrangirchar",
        "Bangshal",
        "Kotwali",
        "Chawkbazar",
        "Kallayanpur",
        "Shyampur",
        "Mohammadpur",
        "Dhanmondi",
        "New Market",
        "Badda",
        "Adabor",
      ],
    },
  ];

  const handleCityChange = (event) => {
    const city = event.target.value;
    if (city === "North Dhaka") {
      setNorthDhaka(true);
      setSouthDhaka(false);
    } else if (city === "South Dhaka") {
      setSouthDhaka(true);
      setNorthDhaka(false);
    }
  };

  return (
    <div className="pt-3 bg-gradient-to-b from-[#2A2A2A]  px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="w-full">
            <div className="text-center mb-5">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
                Contact Us
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Let's know what's on your mind?
              </p>
            </div>
          </div>
          <div className="w-full" id="book-us">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="w-full lg:w-3/5">
                  <div className="rac_booking_box bg-white/5 backdrop-blur-sm rounded-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <label
                              htmlFor="city"
                              className="flex items-center gap-1"
                            >
                              Select City{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <span>
                              <select
                                {...register("city", {
                                  required: "City is required",
                                })}
                                id="city"
                                onChange={handleCityChange}
                                className="w-full bg-white/5 px-3 py-2  rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-600"
                              >
                                <option value="">City Here..</option>
                                

                                <option value={"North Dhaka"}>
                                  North Dhaka City
                                </option>
                                <option value={"South Dhaka"}>
                                  South Dhaka City
                                </option>
                                  
                              </select>
                            </span>
                            {errors.city && (
                              <p className="text-red-600 text-sm">
                                {errors.city.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <label
                              htmlFor="place"
                              className="flex items-center gap-1"
                            >
                              Select Place{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <span>
                              <select
                                {...register("place", {
                                  required: "Place is required",
                                })}
                                id="place"
                                className="w-full bg-white/5 px-3 py-2  rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-600"
                              >
                                <option value="">Place Here..</option>
                                {(northDhaka
                                  ? cityArea[0].Dhaka_North
                                  : southDhaka
                                  ? cityArea[0].Dhaka_South
                                  : []
                                ).map((place, i) => (
                                  <option value={place} key={i}>
                                    {place}
                                  </option>
                                ))}
                              </select>
                            </span>
                            {errors.place && (
                              <p className="text-red-600 text-sm">
                                {errors.place.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <label
                              htmlFor="event"
                              className="flex items-center gap-1"
                            >
                              Event Type <span className="text-red-500">*</span>
                            </label>
                            <span>
                              <select
                                {...register("eventType", {
                                  required: "Event Type is required",
                                })}
                                id="event"
                                className="w-full bg-black/5 px-3 py-2  rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-600"
                              >
                                <option value="">Event Type Here..</option>
                                {data?.map((e, i) => (
                                  <option value={e.title} key={i}>
                                    {e.title}
                                  </option>
                                ))}
                              </select>
                            </span>
                            {errors.eventType && (
                              <p className="text-red-600 text-sm">
                                {errors.eventType.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <label
                              htmlFor="people"
                              className="block text-sm font-medium mb-2"
                            >
                              No. of People
                            </label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                id="max-people"
                                {...register("peopleNum", {
                                  required: "Max People is required",
                                })}
                                placeholder="Max People"
                                className="w-full px-3 py-2  rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none bg-[#292929] placeholder-[#707070] text-gray-600"
                              />
                            </div>
                            {errors.peopleNum && (
                              <p className="text-red-600 text-sm">
                                {errors.peopleNum.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <label
                              htmlFor="contact"
                              className="flex items-center gap-1"
                            >
                              Contact Person{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="contact"
                              {...register("personName", {
                                required: "Contact Person Name is required",
                                maxLength: {
                                  value: 20,
                                  message:
                                    "Contact Person Name must be less than 20 characters",
                                },
                              })}
                              placeholder="Contact Person Name.."
                              autoComplete="off"
                              className="w-full px-3 py-2  rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none  bg-[#292929] placeholder-[#707070] text-gray-600"
                            />
                            {errors.personName && (
                              <p className="text-red-600 text-sm">
                                {errors.personName.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <label
                              htmlFor="contact"
                              className="flex items-center gap-1"
                            >
                              Contact No.{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="number"
                              id="contact"
                              {...register("phoneNumber", {
                                required: "Contact Number is required",
                                pattern: {
                                  value: /^01[0-9]{9}$/,
                                  message:
                                    "Contact Number must be 11 digits starting with 01",
                                },
                              })}
                              placeholder="Enter Contact Number.."
                              autoComplete="off"
                              className="w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none bg-[#292929] placeholder-[#707070] text-gray-600"
                            />
                          </div>
                          {errors.phoneNumber && (
                            <p className="text-red-600 text-sm">
                              {errors.phoneNumber.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-1 pb-0 mb-o">
                          <div className="rac_form_input">
                            <label
                              htmlFor="email"
                              className="flex items-center gap-1"
                            >
                              Your Email{" "}
                              <span className="text-sm font-bold text-slate-200">
                                (Optional)
                              </span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              {...register("email", {
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                  message: "Invalid email address",
                                },
                              })}
                              placeholder="Enter Your Email Here.."
                              autoComplete="off"
                              className="w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none bg-[#292929] placeholder-[#707070] text-gray-600"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-600 text-sm">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div className="col-span-1 pb-0 mb-o">
                          <div className="rac_form_input">
                            <label
                              htmlFor="email"
                              className="flex items-center gap-1"
                            >
                              Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              {...register("address", {
                                required: "Address is required",
                                maxLength: {
                                  value: 100,
                                  message:
                                    "Address must be less than 100 characters",
                                },
                              })}
                              id="address"
                              placeholder="Present Address Please...."
                              autoComplete="off"
                              className="w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none bg-[#292929] placeholder-[#707070] text-gray-600"
                            />
                          </div>
                          {errors.address && (
                            <p className="text-red-600 text-sm">
                              {errors.address.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <label
                              htmlFor="date"
                              className="flex items-center gap-1"
                            >
                              Date <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              id="date"
                              {...register("date", {
                                required: "Date is required",
                                validate: (value) => {
                                  const selectedDate = new Date(value);
                                  const today = new Date();

                                  // Remove the time portion for accurate comparison
                                  selectedDate.setHours(0, 0, 0, 0);
                                  today.setHours(0, 0, 0, 0);

                                  return (
                                    selectedDate > today ||
                                    "Date must be in the future"
                                  );
                                },
                              })}
                              autoComplete="off"
                              className="w-full px-3 py-2  rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none bg-[#292929] placeholder-[#707070] text-gray-600"
                            />
                          </div>
                          {errors.date && (
                            <p className="text-red-600 text-sm">
                              {errors.date.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-1">
                          <div className="rac_form_input">
                            <div className="flex justify-between">
                              
                              <label
                                htmlFor="suggestion"
                                className="font-medium mb-2 flex items-center gap-1"
                              >
                                Description{" "}
                                <span className="text-red-500">*</span>
                              </label>

                              <p className="text-sm text-red-400 w-full text-right">
                                {messageLength?.length || 0}/250 characters
                              </p>
                            </div>
                            <textarea
                              id="suggestion"
                              rows="3"
                              maxLength={250}
                              {...register("description", {
                                required: "Description is required",
                              })}
                              placeholder="Text Description...."
                              className="w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none bg-[#292929] placeholder-[#707070] text-zinc-50"
                            ></textarea>
                          </div>
                          {errors.description && (
                            <p className="text-red-600 text-sm">
                              {errors.description.message}
                            </p>
                          )}
                        </div>
                        <div className="col-12">
                          <div className="mt-6 ">
                            <button
                              type="submit"
                              className="w-full h-14 flex items-center justify-center text-lg bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300"
                              disabled={isSubmitting}
                            >
                              {
                                isSubmitting? (
                                  <>
                                    <p>Sending</p>
                                    <span className="relative left-4 top-2">

                                      <FadeLoader 
                                        color="#ffffff"
                                        height={10}
                                        width={4}
                                        margin={-10}
                                        speedMultiplier={1}
                                      />
                                    </span>
                                  </>
                                ): (
                                  <p>Send Booking Request</p>
                                )
                              }
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="md:ml-4 md:mr-4 h-full">
                    <Image
                      src="/assets/images/demo/booking_img.webp"
                      alt="saturday item"
                      height={1200}
                      width={1200}
                      className="md:h-[600px] pt-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookUs;
