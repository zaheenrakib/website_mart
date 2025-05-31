import React from 'react';

const BannerSkeleton = () => {
  return (
    <div className="rac_banner_wrapper">
      <div className="container mx-auto">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="rac_banner_content">
              <div className="rac_banner_text">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
                </div>
                <div className="rac_banner_btn flex gap-4">
                  <div className="animate-pulse h-12 w-32 bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-12 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pe-0">
            <div className="rac_banner_img">
              <div className="animate-pulse bg-gray-200 rounded-lg h-[500px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;