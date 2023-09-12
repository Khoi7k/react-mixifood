/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { auth, db } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addNewDocument } from '../firebase/globalFnc';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const signInWithGoogle = createAsyncThunk(
    'auth/signInWithGoogle',
    async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider); 
        const data = {
            name: result.user.displayName,
            email: result.user.email
        }
        
        const docRef = addNewDocument('users', data)

        const userJSON = JSON.stringify(data)
        sessionStorage.setItem('user', userJSON)
        
        return docRef
    }
  );
  
  export const signOut = createAsyncThunk('auth/signOut', async () => {
      await auth.signOut();
  });

export const { clearUser } = authSlice.actions;

export default authSlice;