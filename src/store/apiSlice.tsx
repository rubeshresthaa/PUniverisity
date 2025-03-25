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

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery,
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogNew, void>({
      query: () => ({
        url: "blogpost/",
        method: "GET",
      }),
    }),
    getBlogsById: builder.query<BlogNew, Number>({
      query: (id) => ({
        url: `blogcontent/${id}/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogsByIdQuery } = blogApi;

// imageSLider

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery,
  endpoints: (builder) => ({
    getImageSlider: builder.query<BannerResponse, void>({
      query: () => ({
        url: "image_sliders",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetImageSliderQuery } = imageApi;

export const programApi = createApi({
  reducerPath: "programApi",
  baseQuery,
  endpoints: (builder) => ({
    getPrograms: builder.query<ProgramCardType[], void>({
      query: () => ({
        url: "course/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProgramsQuery } = programApi;

export const collegeApi = createApi({
  reducerPath: "collegeApi",
  baseQuery,
  endpoints: (builder) => ({
    getCollege: builder.query<CollegeResponse[], void>({
      query: () => ({
        url: "affiliated/",
        method: "GET",
      }),
    }),
  }),
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResposne, RegisterRequest>({
      query: (data) => ({
        url: "register/",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "login/",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
export const { useGetCollegeQuery } = collegeApi;
