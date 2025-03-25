import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Base Query with Headers
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery,
  endpoints: (builder) => ({
    postContact: builder.mutation<Contact, ContactRequest>({
      query: (data) => ({
        url: "contact/",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

// Export Hooks
export const { usePostContactMutation } = contactApi;

// Blog APi

export const blogApi=createApi({
  reducerPath:"blogApi",
  baseQuery,
  endpoints:(builder)=>({
    getBlogs:builder.query<BlogNew,void>({
      query:()=>({
        url:'blogpost/',
        method:"GET"
      })
    })
  })
})

export const {useGetBlogsQuery}=blogApi;

// imageSLider

export const imageApi=createApi({
  reducerPath:"imageApi",
  baseQuery,
  endpoints:(builder)=>({
    getImageSlider:builder.query<BannerResponse,void>({
      query:()=>({
        url:"image_sliders",
        method:"GET"
      })

    })
  })
})

export const {useGetImageSliderQuery}=imageApi;