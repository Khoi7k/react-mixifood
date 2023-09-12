/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchData,
  fetchDataWithProperties,
  addNewDocument,
  deleteDocument,
  updateDocument
} from "../firebase/globalFnc";
const initialState = {
  status: "",
  data: null,
};

const products = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.status = "idle"), (state.data = action.payload);
      })
      .addCase(fetchProductByCate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProductByCate.fulfilled, (state, action) => {
        (state.status = "idle"), (state.data = action.payload);
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.noti = "Thêm sản phẩm thành công";
        state.new = action.payload;
        console.log(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.noti = "Xóa sản phẩm thành công";
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "idle";
        // Cập nhật thông tin sản phẩm trong state.data dựa vào ProductId và newData
        state.data = state.data.map((item) =>
          item.id === action.payload.ProductId
            ? { ...item, ...action.payload.newData }
            : item
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "idle";
        console.error("Error updating product:", action.error);
      });
  },
});

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const data = await fetchData("products");
  return data;
});
export const fetchProductByCate = createAsyncThunk(
  "special/fetch",
  async (id_cate) => {
    const data = await fetchDataWithProperties("products", "id_cate", id_cate);
    return data;
  }
);
export const addNewProduct = createAsyncThunk(
  "products/addNew",
  async (data) => {
    try {
      const docRef = addNewDocument("products", data);
      return docRef;
    } catch (err) {
      console.log(err);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    try {
      await deleteDocument("products", id);
      return id;
    } catch (err) {
      console.log(err);
    }
  }
);
export const updateProduct = createAsyncThunk(
    "products/update",
    async ({ ProductId, newData }) => {
      await updateDocument("products", ProductId, newData);
      return { ProductId, newData };
    }
  );

export default products;
