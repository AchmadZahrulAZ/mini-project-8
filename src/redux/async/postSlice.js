import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Async Thunk
export const fetchRecentPosts = createAsyncThunk(
  'posts/fetchRecent',
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/games`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const fetchPosts = createAsyncThunk(
  'posts/fetchAll',
  async ({ page = 1, search = '' }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/games/news`, {
        params: { page, search },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const fetchDetail = createAsyncThunk(
  'posts/fetchDetail',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/detail/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const postSubscribe = createAsyncThunk(
  'posts/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/subscribe`, { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    recentPosts: { data: [], loading: false, error: null },
    allPosts: { data: [], loading: false, error: null },
    detail: { data: null, loading: false, error: null },
    subscribeStatus: { data: null, loading: false, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle recent posts
    builder
      .addCase(fetchRecentPosts.pending, (state) => {
        state.recentPosts.loading = true;
        state.recentPosts.error = null;
      })
      .addCase(fetchRecentPosts.fulfilled, (state, action) => {
        state.recentPosts.loading = false;
        state.recentPosts.data = action.payload;
        console.log('Recent Posts Payload:', action.payload);
      })
      .addCase(fetchRecentPosts.rejected, (state, action) => {
        state.recentPosts.loading = false;
        state.recentPosts.error = action.payload;
        console.error('Recent Posts Error:', action.payload);
      });

    // Handle all posts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.allPosts.loading = true;
        state.allPosts.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.allPosts.loading = false;
        state.allPosts.data = action.payload;
        console.log('All Posts Payload:', action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.allPosts.loading = false;
        state.allPosts.error = action.payload;
        console.error('All Posts Error:', action.payload);
      });

    // Handle detail
    builder
      .addCase(fetchDetail.pending, (state) => {
        state.detail.loading = true;
        state.detail.error = null;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.detail.loading = false;
        state.detail.data = action.payload;
        console.log('Detail Payload:', action.payload);
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.detail.loading = false;
        state.detail.error = action.payload;
        console.error('Detail Error:', action.payload);
      });

    // Handle subscribe
    builder
      .addCase(postSubscribe.pending, (state) => {
        state.subscribeStatus.loading = true;
        state.subscribeStatus.error = null;
      })
      .addCase(postSubscribe.fulfilled, (state, action) => {
        state.subscribeStatus.loading = false;
        state.subscribeStatus.data = action.payload;
        console.log('Subscribe Payload:', action.payload);
      })
      .addCase(postSubscribe.rejected, (state, action) => {
        state.subscribeStatus.loading = false;
        state.subscribeStatus.error = action.payload;
        console.error('Subscribe Error:', action.payload);
      });
  },
});

export default postsSlice.reducer;
