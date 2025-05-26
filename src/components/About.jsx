import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="py-5 bg-gradient-to-b from-[#202020] to-[#1E1E1E]">
        <div className="text-center pb-6 md:pb-10">
          <div className="h-1 w-20 bg-red-600 mx-auto mb-4 md:mb-6"></div>
          <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-6">About us</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto px-4">
          Experience luxury and comfort with our comprehensive range of club facilities
          </p>
        </div>
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className=" rounded-[20px] md:rounded-[30px] shadow-2xl overflow-hidden">
              <div className=" space-y-6 md:space-y-8">
                <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                  <div className="lg:w-2/3 w-full">
                    <div className="bg-black/80 rounded-[15px] md:rounded-[20px] p-4 md:p-6 backdrop-blur-sm">
                      <p className="text-white leading-relaxed text-justify text-sm md:text-base">
                        <span className="text-4xl md:text-5xl text-red-600 font-light float-left mr-3 mt-1">T</span>
                        he Uttara Model Club Limited was established in 2011 by a group of distinguished personnel of Uttara Model Town. From these humble beginnings, the club has become one of the most popular expat clubs in Uttara, Dhaka.
                      </p>
                      <div className="mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-[#1a1a1a] p-3 md:p-4 rounded-lg border border-red-600/20 hover:border-red-600 transition-colors duration-300">
                          <div className="text-red-500 text-2xl md:text-3xl font-light mb-1 md:mb-2">26</div>
                          <div className="text-gray-300 text-xs md:text-sm">Founder Life Members</div>
                        </div>
                        <div className="bg-[#1a1a1a] p-3 md:p-4 rounded-lg border border-red-600/20 hover:border-red-600 transition-colors duration-300">
                          <div className="text-red-500 text-2xl md:text-3xl font-light mb-1 md:mb-2">193</div>
                          <div className="text-gray-300 text-xs md:text-sm">Donor Members</div>
                        </div>
                        <div className="bg-[#1a1a1a] p-3 md:p-4 rounded-lg border border-red-600/20 hover:border-red-600 transition-colors duration-300">
                          <div className="text-red-500 text-2xl md:text-3xl font-light mb-1 md:mb-2">716</div>
                          <div className="text-gray-300 text-xs md:text-sm">Permanent Members</div>
                        </div>
                        <div className="bg-[#1a1a1a] p-3 md:p-4 rounded-lg border border-red-600/20 hover:border-red-600 transition-colors duration-300">
                          <div className="text-red-500 text-2xl md:text-3xl font-light mb-1 md:mb-2">17</div>
                          <div className="text-gray-300 text-xs md:text-sm">Honorary Members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 w-full">
                    <div className="relative group">
                      <Image
                        src="/assets/images/dropdown/about.jpg"
                        alt="About UMCL"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-[20px] shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Section */}
                <div className="bg-[#1a1a1a] rounded-[20px] p-6 transform">
                  <p className="text-white leading-relaxed text-justify">
                  Our membership currently stands at 26 Founder Life Members, 193 Donor Members, 716 permanent members, and 17 Honorary Members.
                  Many of our members are leaders in global business persons and distinguished personnel. The foundation of friendship on which the UMC was built remains one of its most charming characteristics and members & families meet with other members’ families in the club.

                  </p>
                </div>

                {/* Third Section */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3">
                    <div className="relative group">
                      
                      <Image
                        src="/assets/images/dropdown/clubFacilities.jpg"
                        alt="Club Facilities"
                        width={1100}
                        height={1100}
                        className="w-full h-[300px] object-cover rounded-[20px] shadow-xl"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="bg-black/80 rounded-[20px] p-6 backdrop-blur-sm space-y-6">
                      <p className="text-white leading-relaxed text-justify">
                        As well as providing excellent facilities and a warm atmosphere for our members, catering to the needs of both families and individuals, the Club also endeavors to make donations to charitable organizations in our host community of Bangladesh. The Uttara Model Club is a not-for-profit organization that is run by, and for, its members.
                      </p>
                      <p className="text-white leading-relaxed text-justify">  
                        The Club is run by the President and 10 members of the Executive Committee elected by the members of the Club as per the Articles of Association of the Club. The club is treated as 2nd home of its members.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
