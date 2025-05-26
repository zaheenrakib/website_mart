import { useForm, useWatch } from 'react-hook-form'
import { notifyError, notifySuccess } from '../utils/toast';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Contacts = () => {
  const { register, handleSubmit, control, formState: {errors}} = useForm(); 
  const messageValue = useWatch({ control, name: "message" });
  const axiosPublic = useAxiosPublic();
  
  const onSubmit = async (data) => {
    try {
      const res = await axiosPublic.post("/contact-us/add", data);
      if(res.status === 201) notifySuccess("Successfully sent the message")
      else notifyError("Failed to send the message. Try again later")
    } catch (error) {
      notifyError("Internal Server Issue");
      console.error(error)
    }
  }


  const RequiredLabel = ({ children }) => (
    <label className="block text-slate-50 mb-2">
        {children} <span className="text-red-500">*</span>
    </label>
  );
  return (
    <section className="py-24 bg-[#18181b]">  
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="h-1 w-20 bg-red-600 mb-8"></div>
              <h2 className="text-4xl font-serif text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 leading-relaxed">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-[#23272f] rounded-sm shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-472Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2 text-white">Location</h3>
                  <p className="text-gray-300">Plot # 6, Road # 6/A, Sector # 17/K, Uttara Dhaka 1230, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#23272f] rounded-sm shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 58.5t72 47.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2 text-white">Phone</h3>
                  <p className="text-gray-300">+8801956-693379</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#23272f] rounded-sm shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2 text-white">Email</h3>
                  <p className="text-gray-300">info@umcl.club</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#23272f] p-8 rounded-sm shadow-lg">
            <h3 className="text-2xl font-serif text-white mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <RequiredLabel>Name</RequiredLabel>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-700 bg-[#18181b] text-white rounded-sm focus:outline-none focus:border-red-600 placeholder-gray-400"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required",
                      maxLength: {
                        value: 80,
                        message: "Name must be less than 80 characters",
                      }
                    })}
                  />
                  {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <RequiredLabel>Email</RequiredLabel>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-700 bg-[#18181b] text-white rounded-sm focus:outline-none focus:border-red-600 placeholder-gray-400"
                    placeholder="Your Email"
                    {...register("email", {required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address"
                      },
                      maxLength: {
                        value: 80,
                        message: "Email must be less than 80 characters"
                      }
                    })}
                  />
                  {errors.email && <p className='text-red-600' >{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <RequiredLabel>Phone</RequiredLabel>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-700 bg-[#18181b] text-white rounded-sm focus:outline-none focus:border-red-600 placeholder-gray-400"
                    placeholder="Your Phone"
                    {...register("phone", {required: "Phone number is required", 
                      pattern: {
                        value: /^01[0-9]{9}$/,
                        message: "Enter a valid 11-digit phone number starting with 01"
                      }
                    })}
                  />
                  {errors.phone && <p className="text-red-600">{errors.phone.message}</p> }
                </div>
                <div>
                  <label className="block text-gray-200 mb-2" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-700 bg-[#18181b] text-white rounded-sm focus:outline-none focus:border-red-600 placeholder-gray-400"
                    placeholder="Subject"
                    {...register("subject", {
                      maxLength: {
                        value: 100,
                        message: "Subject must be less than 100 characters",
                      }
                    })}
                  />
                </div>
              </div>
              <div>
                <div className='flex justify-between'>

                  <RequiredLabel>Message</RequiredLabel>
                  <p className="text-sm text-red-400 text-right my-2">
                    {messageValue?.length || 0}/250 characters
                  </p>
                </div>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full h-28 px-4 py-3 border border-gray-700 bg-[#18181b] text-white rounded-sm focus:outline-none focus:border-red-600 placeholder-gray-400"
                  placeholder="Your Message"
                  maxLength={250}
                  {...register(
                    "message",
                    {
                      required: "Message is required",
                      maxLength: {
                      value: 250,
                      message: "Message must be less than 250 characters"
                    }}
                  )}
                ></textarea>
                {errors.message && <p className="text-red-600">{errors.message.message}</p> }
              </div>
              <button
                type="submit"
                className="rac_btn w-full py-3 text-xl md:text-2xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts