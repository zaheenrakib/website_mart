

const ProductAditionalDetails = ({productDescription}) => {
  
  return (
    <div className="">
      <div className="container mx-auto p-6   rounded-lg">
        <div className="rac_section_heading flex justify-start ml-5 ">
          <h3 className="text-2xl">Additional Details</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: productDescription?.description }} />
        
      </div>
    </div>
  );
};

export default ProductAditionalDetails;
