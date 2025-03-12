import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formapi = createApi({
  reducerPath: "form",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000`,
  }),
  tagTypes: ["Form"],
  endpoints: (builder) => ({
    forms: builder.query({
      query: (name) => `/form?name=${name}`,
      providesTags: (result, error, name) => [{ type: "Form", id: name }],
      staleTime: 60 * 1000,
    }),

    addForm: builder.mutation({
      query: (formData) => ({
        url: "/form",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Form"],
    }),
  }),
});

export const { useFormsQuery, useAddFormMutation } = formapi;
