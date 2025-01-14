import api from "./api";

export const itemApi = api.injectEndpoints({
  reducerPath: "itemApi",
  endpoints: (builder) => ({
    addItem: builder.mutation({
      query: (formData) => ({
        url: "items",
        method: "POST",
        body: formData,
      }),
    }),

    getAllItems: builder.query({
      query: () => "items",
    }),

    getItemById: builder.query({
      query: (id) => `items/${id}`,
    }),

    deleteItem: builder.mutation({
      query: (id) => ({
        url: `items/${id}`,
        method: "DELETE",
      }),
    }),

    updateItem: builder.mutation({
      query: ({ id, formData }) => ({
        url: `items/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),

    getMinimumQuantity: builder.query({
      query: () => "items/minimumQuantity",
    }),

    getItemCount: builder.query({
      query: () => "items/count",
    }),
  }),
});

export const {
  useAddItemMutation,
  useGetAllItemsQuery,
  useGetItemCountQuery,
  useLazyGetAllItemsQuery,
  useGetItemByIdQuery,
  useLazyGetItemByIdQuery,
  useDeleteItemMutation,
  useUpdateItemMutation,
  useGetMinimumQuantityQuery,
  useLazyGetMinimumQuantityQuery,
} = itemApi;
