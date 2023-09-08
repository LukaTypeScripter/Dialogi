import { Data, aboutUs } from './../dataTypes';
import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users';
const ADMIN_URL = '/api/admin';
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchData: builder.mutation<Data, void>({
      query: () => ({
        url: `${USERS_URL}/data`,
        method: "GET", // Assuming you're making a GET request for fetching data
      }),
    }),
    aboutusimages: builder.mutation<aboutUs[], void>({
      query: (data) => ({
        url: `/api/admin/aboutusimage`,
        method: "GET",
       
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useFetchDataMutation, useLogoutMutation, useAboutusimagesMutation, useUpdateUserMutation } = usersApiSlice;