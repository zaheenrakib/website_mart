import PageBanner from "../components/PageBanner";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { notifyError, notifySuccess } from "../utils/toast";
import axios from "axios";
import { useState } from 'react';
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Add this to indicate required fields in labels
const RequiredLabel = ({ children }) => (
    <label className="block text-slate-50 mb-2">
        {children} <span className="text-red-500">*</span>
    </label>
);

const Membership = () => {
    const [loading, setLoading] = useState(false);
    const { register, reset,  handleSubmit, setValue, control, formState: { errors } } = useForm({
        defaultValues: {
            children: [{ name: "", gender: "", dob: "" }],
            profileImage: ""
        },
        mode: "onBlur"
    });
    const { fields, append, remove } = useFieldArray({
        control: control,
        name: "children"
    }); 

    const professionalInfo = useWatch({control, name: "profession"})
    const purposeofStayInBangladesh = useWatch({control, name: "purposeAndPeriodOfStayInBangladesh"})
    const everRejectedForMembership = useWatch({control, name: "everDeniedForMembership"})
    const interestToBeMember = useWatch({control, name: "interestedToBecomeMember"})
    const aditionalSuggest = useWatch({control, name: "additionalInfo"})

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            setLoading(true);
    
            // Append all fields dynamically
            for (const key in data) {
                if (key === "profileImage") {
                    formData.append("profileImage", data.profileImage[0]);
                    formData.append("profileImage", data.profileImage[0].name);

                }  else if (key === "children") {
                    data.children.forEach((child, index) => {
                        formData.append(`children[${index}][name]`, child.name);
                        formData.append(`children[${index}][gender]`, child.gender);
                        formData.append(`children[${index}][dob]`, child.dob || "");
                    });
                } else {
                  // Convert empty strings to null for dates
                    const value = data[key];
                    formData.append(key, value);
                }
            }
    
            const response = await axios.post(
                `${BASE_URL}/membership-requests/add?type=membership`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
    
            if (response.status === 200 || response.status === 201) {   

                notifySuccess("Membership request submitted successfully!");
                reset(); 
                setImagePreview(null);
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            } else {
                notifyError("Failed to submit membership request. Please try again.");
            }
            
        } catch (error) {
            console.error(error);
            notifyError(error.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    const handleUppercaseInput = (e) => {
        const uppercasedValue = e.target.value.toUpperCase();
        setValue("fullName", uppercasedValue, { shouldValidate: false });
    };
    return (
    <>
        
        <div className="rac_main_wrapper">
            <PageBanner
            pageTitle={`Membership Request`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                    pageDescription="Fill the form to get into our club family"
            />
            <div className="max-w-5xl mx-auto p-3 md:p-6 bg-black shadow-lg rounded-lg">
                
                <h1 className="text-2xl md:text-3xl text-center my-4">Particulars of Applicant For Membership</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                    {/* Basic Information */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="space-y-4 w-full md:w-4/5">
                            <div>
                                <RequiredLabel>Full Name (IN BLOCK LETTERS)</RequiredLabel>
                                <input 
                                {...register("fullName", {
                                    required: "Full Name is required",
                                    maxLength: {
                                    value: 80,
                                    message: "Full Name must be less than 80 characters",
                                    },
                                    pattern: {
                                    value: /^[A-Za-z.\s]+$/, // allow spaces between names
                                    message: "Full Name must contain only letters and spaces",
                                    },
                                })} 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" 
                                onChange={handleUppercaseInput}
                                />

                                
                            </div>
                            {
                                errors.fullName && (
                                    <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
                                )
                            }
                            <div>
                                <RequiredLabel>Father's/Husband's Name</RequiredLabel>
                                <input {...register("fatherName", { required: "Father's/Husband's Name is required",
                                    maxLength: {
                                        value: 80,
                                        message: "Father's/Husband's must be less than 80 characters",
                                    },
                                    pattern:{
                                        value: /^[A-Za-z.\s]+$/, // allow spaces between names
                                        message: "Father's must contain only letters and spaces",
                                    }
                                })} type="text" placeholder="Father's/Husband's Name" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.fatherName && (
                                    <p className="text-red-600 text-sm mt-1">{errors.fatherName.message}</p>
                                )}
                            </div>
                            <div>
                                <RequiredLabel>Mother's Name</RequiredLabel>
                                <input {...register("motherName", { required: "Mother's Name is required",
                                    maxLength: {
                                        value: 80,
                                        message: "Mother's name must be less than 80 characters",
                                    },
                                    pattern:{
                                        value: /^[A-Za-z.\s]+$/, // allow spaces between names
                                        message: "Mother's Name must contain only letters and spaces",
                                    }
                                 })} type="text" placeholder="Mother's Name" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.motherName && (
                                    <p className="text-red-600 text-sm mt-1">{errors.motherName.message}</p>
                                )}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-auto space-y-4">
                            <div className="relative w-[150px] h-[140px] mx-auto bg-gray-800 rounded-lg overflow-hidden">
                                {imagePreview ? (
                                    <Image
                                        height={1000}
                                        width={1000}
                                        src={imagePreview}
                                        alt="Profile Preview"
                                        className="w-full h-[3/5] object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-[3/5] flex items-center justify-center">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-20 w-20 text-gray-400" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                                            />
                                        </svg>
                                    </div>
                                    )}
                            </div>
                            <input 
                                type="file" 
                                accept="image/*"
                                {...register("profileImage", { 
                                    required: "Profile photo is required",
                                    onChange: (e) => handleImageChange(e)
                                })} 
                                className="w-full text-sm text-gray-400
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-red-600 file:text-white
                                    hover:file:bg-red-700
                                    cursor-pointer"
                            />
                            {errors.profileImage && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.profileImage.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold my-4">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <RequiredLabel>Residential</RequiredLabel>
                                <textarea { ...register("residentialAddress", { required: "Residential address is required",
                                    maxLength: {
                                        value: 80,
                                        message: "Residential address must be less than 80 characters",
                                    },
                                })} placeholder="Residential address" type="text" className="w-full h-24 p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.residentialAddress && (
                                    <p className="text-red-600 text-sm mt-1">{errors.residentialAddress.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">Business/Office</label>
                                <textarea {...register("businessAdress",{
                                    maxLength: {
                                        value: 80,
                                        message: "Business address must be less than 80 characters",
                                    },
                                })} placeholder="Business address" type="text" className="w-full h-24 p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.businessAdress && (
                                    <p className="text-red-600 text-sm mt-1">{errors.businessAdress.message}</p>
                                )}
                            </div>
                            <div>
                                <RequiredLabel>Permanent</RequiredLabel>
                                <textarea {...register("permenantAddress", { 
                                    required: "Permanent address is required",
                                    maxLength: {
                                        value: 80,
                                        message: "Permanent address must be less than 80 characters",
                                    },
                                    })} 
                                    placeholder="Permanent address" 
                                    type="text" 
                                    className="w-full h-24 p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.permenantAddress && (
                                    <p className="text-red-600 text-sm mt-1">{errors.permenantAddress.message}</p>
                                )}
                            </div>
                            <div>
                                <RequiredLabel>Mailing Address</RequiredLabel>
                                <textarea { ...register("mailingAddress", {
                                    required: "Mailing Address is required",
                                    maxLength: {
                                        value: 80,
                                        message: "Residential address must be less than 80 characters",
                                    },
                                    })} 
                                    placeholder="Mailing address" 
                                    type="text" 
                                    className="w-full h-24 p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.mailingAddress && (
                                    <p className="text-red-600 text-sm mt-1">{errors.mailingAddress.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold my-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                            <div>
                                <label className="block text-slate-50 mb-2">Residence Phone</label>
                                <input {...register("residencePhone",{
                                    pattern: {
                                        value: /^01[0-9]{9}$/,
                                        message: "Please enter an 11-digit phone number starting with 01.",
                                    }
                                })} type="tel" placeholder="Residence phone" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.residencePhone && (
                                    <p className="text-red-600 text-sm mt-1">{errors.residencePhone.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">Business Phone</label>
                                <input {...register("businessPhone",{
                                    pattern: {
                                        value: /^01[0-9]{9}$/,
                                        message: "Please enter an 11-digit phone number starting with 01.",
                                    }
                                })} type="tel" placeholder="Business Phone" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.businessPhone && (
                                    <p className="text-red-600 text-sm mt-1">{errors.businessPhone.message}</p>
                                )}
                            </div>
                            <div>
                                <RequiredLabel>Mobile</RequiredLabel>
                                <input { ...register("mobile", { 
                                    required: "Mobile number is required",
                                    pattern: {
                                        value: /^01[0-9]{9}$/,
                                        message: "Please enter an 11-digit phone number starting with 01.",
                                    }
                                })} 
                                type="tel"  
                                placeholder="Mobile" 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.mobile && (
                                    <p className="text-red-600 text-sm mt-1">{errors.mobile.message}</p>
                                )}
                            </div>
                            <div>
                                <RequiredLabel>Email</RequiredLabel>
                                <input { ...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Please enter a valid email address"
                                    }
                                })} 
                                type="email" 
                                placeholder="Email" 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* House/Plot Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold my-4">If owner of House/Plot in Uttara Model Town</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-slate-50 mb-2">House/Plot No.</label>
                                <input {...register("houseOrPlotNo",{
                                    maxLength: {
                                        value: 20,
                                        message: "House/Plot No. must be less than 20 characters",
                                    }
                                })} 
                                type="text" 
                                placeholder="House/plot no." 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">Road No.</label>
                                <input { ...register("roadNo", {
                                    maxLength: {
                                        value: 20,
                                        message: "Road No. must be less than 20 characters",
                                    }
                                })} 
                                type="number" 
                                placeholder="Road no." 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">Sector No.</label>
                                <input {...register("sectorNo",{
                                    maxLength: {
                                        value: 20,
                                        message: "Sector No. must be less than 20 characters",
                                    }
                                })} type="text" placeholder="Sector no." className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">Living Here?</label>
                                <select {...register("livingHere")} className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black">
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Income and TIN */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-slate-50 mb-2">Annual Income (Tk.)</label>
                            <input {...register("income", {
                                maxLength: {
                                    value: 20,
                                    message: "Annual Income must be less than 20 characters",
                                }
                            })} 
                            type="number" 
                            placeholder="Annual Income" 
                            className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            {errors.income && (
                                <p className="text-red-600 text-sm mt-1">{errors.income.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-slate-50 mb-2">TIN Number</label>
                            <input {...register("tinNumber")} placeholder="TIN Number" type="text" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                        </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4">
                        
                        <h3 className="font-semibold text-2xl my-4">Professional Information</h3>
                        
                        <div>
                            <div className="flex justify-between">  

                                <label className="block text-slate-50 mb-2">Full particulars of your Profession/Business</label>
                                <p className="text-sm text-red-400 text-right">
                                    {professionalInfo?.length || 0}/500 characters
                                </p>
                            </div>
                            <textarea 
                                maxLength={500}
                                {...register("profession")}
                                type="text"
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" 
                                rows="3"
                                placeholder="Include name, date of commencement and your Status/Designation/Rank etc."
                            ></textarea>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold my-4">Personal Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                            <div>
                                <label className="block text-slate-50 mb-2">Date of Birth</label>
                                <input {...register("dateOfBirth",
                                    {
                                        required: "Date of birth is required",
                                        validate: (value) => {
                                            const today = new Date();
                                            const dob = new Date(value);
                                            const age = today.getFullYear() - dob.getFullYear();
                                            const monthdiff = today.getMonth() - dob.getMonth();
                                            const daydiff = today.getDate() - dob.getDate();
                                            
                                            const is18orordr = (age > 18 || (age===18 && (monthdiff >0 || (monthdiff===0 && daydiff>=0))));
                                            
                                            return is18orordr || "You must be at least 18 years old to apply.";
                                        }

                                    }

                                )} 
                                type="date" 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" 
                                />
                                {errors.dateOfBirth && (
                                    <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
                                )}
                            </div>
                            
                            <div>

                                <label className="block text-slate-50 mb-2">Nationality</label>
                                <input 
                                {...register("nationality", 
                                    {
                                        required:"Nationality is required",
                                        maxLength: {
                                            value: 20,
                                            message: "Nationality must be less than 20 characters",
                                        }
                                    }
                                )} 
                                type="text" 
                                placeholder="Nationality" 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {errors.nationality && (
                                    <p className="text-red-500 text-sm">{errors.nationality.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">National ID No.</label>
                                <input {...register("nationalIdno")} type="number" placeholder="National ID no." className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">Religion</label>
                                <input {...register("religion", 
                                    {
                                        maxLength: {
                                            value: 20,
                                            message: "Religion must be less than 20 characters",
                                        }
                                    }
                                )} type="text" placeholder="Religion" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                {
                                    errors.religion && (
                                        <p className="text-red-600 text-sm">{errors.religion.message}</p>
                                    )
                                }
                            </div>
                            <div>
                                <label className="block text-slate-50 mb-2">Blood Group</label>
                                <select {...register("bloodGroup")} className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black">
                                    <option value="">Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-slate-50 mb-2">Academic Qualification</label>
                            <input {...register("academicQualification",
                                {
                                    maxLength: {
                                        value: 50,
                                        message: "Academic Qualification must be less than 50 characters",
                                    }
                                }
                            )} type="text" placeholder="Academic Qualification" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            {errors.academicQualification && (
                                <p className="text-red-600 text-sm">{errors.academicQualification.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Family Particulars */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl my-4">Family Particulars</h3>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-slate-50 mb-2">Name of Spouse</label>
                                    <input 
                                    {...register("nameOfSpouse",
                                        {
                                            maxLength: {
                                                value: 80,
                                                message: "Name of spouse must be less than 80 characters",
                                            }
                                        }

                                    )} 
                                    placeholder="Name of spouse" type="text" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                </div>
                                <div>
                                    <label className="block text-slate-50 mb-2">Date of Birth</label>
                                    <input 
                                        {...register("spouseDateOfBirth",{
                                            validate: (value) => {
                                            const today = new Date();
                                            const dob = new Date(value);
                                            const age = today.getFullYear() - dob.getFullYear();
                                            const monthdiff = today.getMonth() - dob.getMonth();
                                            const daydiff = today.getDate() - dob.getDate();
                                            
                                            const is18orordr = (age > 18 || (age===18 && (monthdiff >0 || (monthdiff===0 && daydiff>=0))));
                                            
                                            return is18orordr || "Age should be at least 18 years";
                                        }
                                        })}
                                        type= "date"
                                        className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" 
                                    />
                                    {
                                        errors.spouseDateOfBirth && (
                                            <p className="text-red-600 text-sm">{errors.spouseDateOfBirth.message}</p>
                                        )
                                    }
                                </div>
                                <div>
                                    <label className="block text-slate-50 mb-2">Occupation</label>
                                    <input 
                                    {...register("spouseOccupation", 
                                        {
                                            maxLength: {
                                                value: 50,
                                                message: "Occupation must be less than 30 characters",
                                            }
                                        }
                                    )} 
                                    type="text" 
                                    placeholder="Occupation" 
                                    className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-50 mb-2">Children Information</label>
                                {fields.map((field, index) => (
                                    <div key={field.id} className="grid md:grid-cols-4 gap-4 mt-2 items-center">
                                        <div className="md:col-span-2">
                                            <input 
                                                {...register(`children.${index}.name`,
                                                    {
                                                        maxLength: {
                                                            value:80,
                                                            message: "Children name must be less than 80 characters",
                                                        }
                                                    }
                                                )}
                                                type="text" 
                                                placeholder="Children Name" 
                                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" 
                                            />
                                        </div>
                                        <div>
                                            <select 
                                                {...register(`children.${index}.gender`)}
                                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black"
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input 
                                                {...register(`children.${index}.dob`)}
                                                type="date"
                                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" 
                                            />
                                        </div>
                                        {fields.length > 1 && (
                                            <button 
                                                type="button"
                                                className="bg-red-500 text-white p-2 rounded" 
                                                onClick={() => remove(index)}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                ))}

                                <button 
                                    type="button"
                                    className="bg-gray-500 text-white p-2 rounded mt-4" 
                                    onClick={() => append({ name: "", gender: "", dob: "" })}
                                >
                                    Add Child
                                </button>
                            </div>

                            <div>
                                <label className="block text-slate-50 mb-2">Wedding Day</label>
                                <input {...register("weddingDay")} type="date" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            </div>
                        </div>
                    </div>

                    {/* Foreign National Information */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl my-4">Foreign National Information</h3>
                        <div>
                            <div className="flex justify-between">

                                <label className="block text-slate-50 mb-2">Purpose and period of stay in Bangladesh</label>
                                <p className="text-sm text-red-400 text-right">
                                    {purposeofStayInBangladesh?.length || 0}/500 characters
                                </p>
                            </div>
                            <textarea
                            maxLength={500} 
                            {...register("purposeAndPeriodOfStayInBangladesh")} placeholder="Purpose and period of stay in Bangladesh" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" rows="3"></textarea>
                            {errors.purposeAndPeriodOfStayInBangladesh && (
                                <p className="text-red-600 text-sm">{errors.purposeAndPeriodOfStayInBangladesh.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Other Club Memberships */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl my-4">Other Club Memberships</h3>
                        <div>
                            <label className="block text-slate-50 mb-2">Membership with other Club(s)</label>
                            <textarea {...register("membershipWithOtherClubs")} placeholder="Yes - ABC Club, XYZ Club" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" rows="2"></textarea>
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <label className="block text-slate-50 mb-2">Have you ever been denied for membership With any Club?</label>
                                <p className="text-sm text-red-400 text-right">
                                    {everRejectedForMembership?.length || 0}/500 characters
                                </p>
                            </div>
                            <textarea 
                            maxLength={500}
                            {...register("everDeniedForMembership")} 
                            className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" rows="2" placeholder="If yes, please provide details"></textarea>
                        </div>
                    </div>

                    {/* Interest and Motivation */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl my-4">Interest and Motivation</h3>
                        <div>
                            <div className="flex justify-between">
                                <label className="block text-slate-50 mb-2">Why are you interested to become a member of Uttara Model Club Limited?</label>
                                <p className="text-sm text-red-400 text-right">
                                    {interestToBeMember?.length || 0}/500 characters
                                </p>
                            </div>
                            <textarea 
                            maxLength={500}
                            { ...register("interestedToBecomeMember")} 
                            className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" rows="3"></textarea>
                        </div>
                        
                        <div>
                            <label className="block text-slate-50 mb-2">Your area of interest in club activities</label>
                            <div className="grid grid-cols-2 gap-4">
                                {['a', 'b', 'c', 'd'].map((item) => {
                                    const fieldName = `interest${item.toUpperCase()}`;
                                    return (
                                        <div key={item} className="flex flex-col">
                                        <input
                                            {...register(fieldName, {
                                            maxLength: {
                                                value: 15,
                                                message: `Interest ${item.toUpperCase()} must be less than 15 characters`,
                                            },
                                            })}
                                            type="text"
                                            placeholder={`Interest ${item.toUpperCase()}`}
                                            className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black"
                                        />
                                        {errors[fieldName] && (
                                            <span className="text-red-500 text-sm mt-1">
                                            {errors[fieldName].message}
                                            </span>
                                        )}
                                    </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl my-4">Additional Information</h3>
                        <div>
                            <div className="flex justify-between">
                                <label className="block text-slate-50 mb-2">Additional Information / Suggestion If any</label>
                                <p className="text-sm text-red-400 text-right">
                                    { aditionalSuggest?.length || 0}/500 characters
                                </p>
                            </div>
                            <textarea 
                            maxLength={500}
                            {...register("additionalInfo")} 
                            placeholder="Additional Information / Suggestion If any"
                            className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" rows="3"></textarea>
                        
                        </div>
                    </div>

                    {/* References */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold my-4">References</h3>
                        <p className="text-sm text-[#7b7373] px-2">Name at least two friends and acquaintances other than the Proposer & Seconder amongst the existing Founder/Permanent/Life/Donor Members of Uttara Model Club Limited, who may be referred to regarding your eligibility:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2].map((ref) => (
                                <div key={ref} className="space-y-3 p-4 border rounded bg-gray-900">
                                    <div>
                                        <RequiredLabel>Name</RequiredLabel>
                                        <input {...register(`refName${ref}`, { required: "Reference name is required",
                                            maxLength: {
                                                value: 80,
                                                message: "Reference name must be less than 80 characters",
                                            }
                                         })} type="text" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                        {errors[`refName${ref}`] && (
                                            <p className="text-red-600 text-sm mt-1">{errors[`refName${ref}`].message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <RequiredLabel>Member ID</RequiredLabel>
                                        <input {...register(`refAc${ref}`, { required: "Reference A/C is required" })} type="text" className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                        {errors[`refAc${ref}`] && (
                                            <p className="text-red-600 text-sm mt-1">{errors[`refAc${ref}`].message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <RequiredLabel>Telephone</RequiredLabel>
                                        <input
                                        {...register(`refTelephone${ref}`,{
                                            pattern: {
                                                value: /^01[0-9]{9}$/,
                                                message: "Please enter an 11-digit phone number starting with 01.",
                                            }
                                        }, { required: "Reference telephone is required" })} 
                                        type="number" 
                                        className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                                        {errors[`refTelephone${ref}`] && (
                                            <p className="text-red-600 text-sm mt-1">{errors[`refTelephone${ref}`].message}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Category of Membership */}
                    <div className="space-y-4">
                        <RequiredLabel>Category of Membership interested in</RequiredLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                            {[
                                'Permanent Member',
                                'Donor Member',
                                'Honorary Member',
                                'Life Member', 
                            ].map((category) => (
                                <label key={category} className="border p-3 rounded flex items-center space-x-2">
                                    <div htmlFor={category} className="text-sm flex justify-center items-center gap-3">
                                        <input  
                                            {...register("membershipCategory", { 
                                                required: "Please select a membership category" 
                                            })}
                                            type="radio"
                                            id={category}
                                            name="membershipCategory"
                                            value={
                                                category==="Permanent Member"? `PM`
                                                :category=== "Donor Member"? `DM`
                                                :category=== "Honorary Member"? `HM`
                                                :`LM`}
                                            className="w-4 h-4"
                                        />
                                        <div>
                                            {category}
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>
                        {errors.membershipCategory && (
                            <p className="text-red-600 text-sm">{errors.membershipCategory.message}</p>
                        )}
                    </div>

                    {/* Donation Information */}
                    <div className="space-y-4">
                        <div>
                            <RequiredLabel>
                                Your Proposed donation for the development of the club
                            </RequiredLabel>
                            
                            <input 
                                {...register("donationAmount", { 
                                    required: "Donation amount is required",
                                    min: { 
                                        value: 1000,
                                        message: "Minimum donation amount is 1000 Taka"
                                    }
                                })}
                                type="number" 
                                className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black"
                                placeholder="Enter amount in Taka"
                            />
                            {errors.donationAmount && (
                                <p className="text-red-600 text-sm mt-1">{errors.donationAmount.message}</p>
                            )}
                            
                        </div>
                    </div>

                    {/* Proposer & Seconder Information */}
                    <div className="space-y-6">
                        <div>
                            <RequiredLabel>Name of Proposer & Club A/C No.</RequiredLabel>
                            <input 
                            {...register("proposerNameAndClubAcNo", { required: "Proposer name and Club A/C No. is required",
                                maxLength: {
                                    value: 80,
                                    message: "Proposer name and Club A/C No. must be less than 80 characters",
                                }
                             })}
                            type="text" 
                            className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            {errors.proposerNameAndClubAcNo && (
                                <p className="text-red-600 text-sm mt-1">{errors.proposerNameAndClubAcNo.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-slate-50 mb-2">Name of Seconder & Club A/C No.</label>
                            <input 
                            {...register("seconderNameAndClubAcNo", { 
                                maxLength: {
                                    value: 80,
                                    message: "Seconder name and Club A/C No. must be less than 80 characters",
                                }
                            })}
                            type="text" 
                            className="w-full p-2 rounded focus:outline focus:outline-3 focus:outline-red-600 inset-5 bg-red-100 text-black" />
                            {errors.seconderNameAndClubAcNo && (
                                <p className="text-red-600 text-sm">{errors.seconderNameAndClubAcNo.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end mt-8">
                        <button type="submit" className="w-full md:w-auto bg-red-600 
                        border-2 border-solid border-red-600 px-6 py-3 rounded hover:bg-black text-base md:text-lg text-slate-50 hover:text-red-600 transition-all duration-300">
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        
    </>
  );
}

export default Membership;

