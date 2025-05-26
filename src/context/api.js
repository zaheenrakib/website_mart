import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// fetch product categories 

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get(`${BASE_URL}/category`);
            return res.data;
        }
    });
};

// fetch products 

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await axios.get(`${BASE_URL}/products`);
            return res.data;
        }
    });
};

export const useSlugProducts = (slug) => {
    return useQuery({
        queryKey: ["slugProducts"],
        queryFn: async () => {
            const res = await axios.get(`${BASE_URL}/products/product/${slug}`);
            return res.data;
        }
    })
}


export const useGetReviewByProductId = (key,id) =>{
    return useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axios.get(`${BASE_URL}/review/${id}`)
            return res.data
        }
    })
}
export const getOrderByID = (key,id) =>{
    return useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axios.get(`${BASE_URL}/orders/customer/${id}`)
            return res.data
        }
    })
}

export const useGetDailyDeals = () => {
    return useQuery({
        queryKey: ["daily-deals"],
        queryFn: async () => {
            const res = await axios.get(`${BASE_URL}/daily-deals`);
            return res.data;
        }
    });
}
