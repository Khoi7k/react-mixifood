/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addNewDocument,
  fetchData,
  deleteDocument,
  updateDocument,
} from "../firebase/globalFnc";
const initialState = {
  status: "",
  data: null,
};

const categories = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        (state.status = "idle"), (state.data = action.payload);
      })
      .addCase(addNewCategory.fulfilled, (state, action) => {
        state.noti = "Thêm sản phẩm thành công";
        state.new = action.payload;
        console.log(action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.noti = "Xóa sản phẩm thành công";
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(updateCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = "idle";
        // Cập nhật thông tin sản phẩm trong state.data dựa vào categoryId và newData
        state.data = state.data.map((item) =>
          item.id === action.payload.categoryId
            ? { ...item, ...action.payload.newData }
            : item
        );
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = "idle";
        console.error("Error updating category:", action.error);
      });
  },
});

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const data = await fetchData("categories");
    return data;
  }
);

export const addNewCategory = createAsyncThunk(
  "categories/addNew",
  async (data) => {
    try {
      const docRef = addNewDocument("categories", data);
      return docRef;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id) => {
    try {
      await deleteDocument("categories", id);
      return id;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/update",
  async ({ categoryId, newData }) => {
    await updateDocument("categories", categoryId, newData);
    return { categoryId, newData };
  }
);

export default categories;
