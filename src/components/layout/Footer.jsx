import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { notifyError, notifySuccess } from "../../utils/toast";

const Footer = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axiosPublic.post("/newsletters/add", data);
      if(res.status === 201) {
        notifySuccess("You have successfully subscribed to our newsletter!");
      }else{
        notifyError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const serverMessage = error.response.data.message;
        notifyError(serverMessage); // error popup like "Email already exists"
      } else {
        notifyError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <footer>
      {/* Footer Section Start */}
      <div className="rac_section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rac_app_box ">
                <div className="rac_app_text">
                  <h3>Download Our Mobile App To Book Your Event</h3>
                  <div className="rac_app_stores">
                    <Link href="#">
                      <Image
                        src="/assets/images/demo/android.webp"
                        alt="App Store"
                        width={162}
                        height={53}
                        className="img-fluid"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/assets/images/demo/ios.webp"
                        alt="Play Store"
                        width={162}
                        height={53}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
                
                <Image
                  src="/assets/images/demo/mob.png"
                  alt="Mobile App"
                  width={185}
                  height={380}
                  className="img-fluid h-[300px] w-[285px] "
                />
                  
                
              </div>
            </div>
            <div className="col-12">
              <div className="rac_footer_content">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-md-5 col-sm-8">
                        <div className="rac_footer_about">
                          <div className="rac_footer_heading">
                            <h6>About</h6>
                          </div>
                          <p>
                            Delicious flavors, warm ambiance, and unforgettable
                            dining experiences. Explore our menu and visit us
                            for a taste of perfection!
                          </p>
                          <ul className="rac_footer_social">
                            {/* facebook Link  */}
                            <li>
                              <Link
                                target="_blank"
                                href="https://www.facebook.com/uttaramodelclublimited"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="18"
                                  fill="#B4B4B4"
                                >
                                  <path d="M6.067 17.998v-8.21h2.755l.413-3.201H6.067V4.544c0-.926.256-1.558 1.586-1.558h1.693V.123C9.054.085 8.049-.002 6.879-.002c-2.443 0-4.116 1.491-4.116 4.229v2.36H0v3.201h2.763v8.21h3.304z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="rac_footer_facilities">
                          <div className="rac_footer_heading">
                            <h6>Know More</h6>
                          </div>
                          <ul className="rac_footer_links">
                            <li>
                              <Link href="/terms-conditions">
                                Terms and conditions
                              </Link>
                            </li>
                            <li>
                              <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li>
                              <Link href="/return-policy">Return Policy</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="rac_footer_contact">
                          <div className="rac_footer_heading">
                            <h6>Contact Us</h6>
                          </div>
                          <ul className="rac_footer_address">
                            <li>
                              <Link
                                target="_blank"
                                href="https://maps.app.goo.gl/MGc2wRGNJm2tFzcZA"
                                className="flex items-center gap-2"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="17"
                                    fill="#b4b4b4"
                                    fillRule="evenodd"
                                  >
                                    <path d="M6.512.5C3.741.5 1.488 2.773 1.488 5.576c0 .95.418 2.128 1.027 3.303 1.34 2.588 3.573 5.194 3.573 5.194a.56.56 0 0 0 .846 0s2.233-2.606 3.573-5.194c.609-1.175 1.027-2.353 1.027-3.303C11.535 2.773 9.282.5 6.512.5zm0 2.977c-.533.014-1.04.236-1.412.619a2.05 2.05 0 0 0 0 2.856 2.05 2.05 0 0 0 1.412.619c.533-.014 1.04-.236 1.412-.619a2.05 2.05 0 0 0 0-2.856 2.05 2.05 0 0 0-1.412-.619zm3.56 9.024c.605.182 1.104.406 1.448.67.223.17.387.336.387.538 0 .119-.068.227-.163.335-.158.178-.392.338-.682.487-1.026.525-2.684.853-4.55.853s-3.524-.328-4.55-.853c-.29-.149-.525-.309-.682-.487-.095-.108-.163-.216-.163-.335 0-.202.164-.368.387-.538.345-.263.843-.488 1.448-.67a.56.56 0 0 0 .374-.695.56.56 0 0 0-.695-.374C1.71 11.71.994 12.09.564 12.51c-.378.368-.563.781-.563 1.199 0 .522.295 1.043.896 1.478 1.054.762 3.17 1.313 5.616 1.313s4.562-.551 5.616-1.313c.601-.435.896-.955.896-1.478 0-.418-.185-.831-.563-1.199-.43-.42-1.146-.801-2.067-1.078a.56.56 0 0 0-.695.374.56.56 0 0 0 .374.695z" />
                                  </svg>
                                </span>
                                <p>
                                  Plot # 6, Road # 6/A, Sector # 17/K, Uttara
                                  Dhaka 1230, Dhaka, Bangladesh
                                </p>
                              </Link>
                            </li>
                            <li>
                              <div className="flex items-center gap-2">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    fill="#b4b4b4"
                                  >
                                    <path d="M9.884 8.6c-.425-.419-.955-.419-1.377 0l-.96.963c-.087.089-.16.108-.265.049l-.63-.33C5.718 8.694 4.936 7.94 4.244 7.09c-.344-.422-.649-.874-.863-1.382-.043-.103-.035-.17.049-.254l.952-.95c.441-.444.441-.963-.003-1.409l-.755-.757-.779-.779c-.425-.414-.955-.414-1.377.003l-.966.96c-.306.289-.46.644-.492 1.058-.051.674.114 1.309.346 1.929.476 1.282 1.201 2.421 2.08 3.465 1.188 1.412 2.605 2.529 4.263 3.335.747.362 1.52.641 2.362.687.579.032 1.082-.114 1.485-.565.276-.308.587-.59.879-.885.433-.438.435-.969.005-1.401L9.884 8.6zm-.517-2.156l.998-.17a4.46 4.46 0 0 0-1.247-2.408c-.695-.695-1.574-1.133-2.543-1.269l-.141 1.004a3.44 3.44 0 0 1 1.969.982 3.44 3.44 0 0 1 .963 1.861zm1.561-4.339A7.36 7.36 0 0 0 6.708 0l-.141 1.004a6.38 6.38 0 0 1 3.647 1.818c.944.944 1.563 2.137 1.788 3.449L13 6.1c-.262-1.52-.979-2.9-2.072-3.996z" />
                                  </svg>
                                </span>
                                <div className="flex flex-col">
                                  <Link
                                    href="tel: +8801956-693379"
                                    className="hover:text-red-600 transition-colors duration-300"
                                  >
                                    +8801956-693379
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-2"
                                href="mailto:info@umcl.club"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="13"
                                    fill="#b4b4b4"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M1.349.748l5.048 5.05a2.84 2.84 0 0 0 4.002 0l5.047-5.05c.012-.012.021-.026.027-.042s.008-.033.006-.049-.007-.033-.015-.048-.02-.027-.034-.037C14.916.213 14.29 0 13.615 0H3.18c-.675 0-1.301.213-1.816.572-.014.01-.025.022-.034.037s-.014.031-.015.048.001.034.007.049.015.03.027.042zM0 3.18c0-.513.124-1.019.363-1.473.008-.016.02-.03.035-.04s.032-.017.049-.02.036-.001.053.004.033.015.045.028L5.53 6.664a4.06 4.06 0 0 0 5.735 0l4.984-4.984c.013-.013.028-.022.045-.028s.035-.007.053-.004.035.01.049.02.027.024.035.04a3.16 3.16 0 0 1 .363 1.473V9.82c0 1.755-1.428 3.18-3.181 3.18H3.18C1.428 13 0 11.575 0 9.82V3.18z"
                                    />
                                  </svg>
                                </span>
                                <p>info@umcl.club</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="rac_newsletter">
                      <div className="rac_footer_heading">
                        <h6>Newsletter</h6>
                      </div>
                      <div className="rac_footer_form">
                        <p>Subscribe Our Newsletter & Get All Promo!</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="rac_form_input">
                            <input
                              type="email"
                              id="email"
                              {...register("email", { 
                                  required: "Email is required",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please enter a valid email address"
                                  }
                                
                                },
                                
                              )}
                              placeholder="Your Email Here.."
                              autoComplete="off"
                            />
                            <button type="submit">
                              <Image
                                height={30}
                                width={30}
                                alt=""
                                src="/assets/images/send.svg"
                              />
                            </button>
                            {errors.email && (
                              <span className="text-red-500 text-sm">
                                {errors.email.message}
                              </span>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Add other columns as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section End */}

      <div className="rac_copyright_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rac_copyright_text">
                <p>
                  Copyright © Uttara Model Club Limited,  <span id="copyYear"></span> Developed by
                  <Link target="_blank"  href="https://www.datascapeit.com/"> Datascape IT Limited. </Link>
                   All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
