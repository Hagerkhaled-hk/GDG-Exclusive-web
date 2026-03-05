import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchProfile = createAsyncThunk(
    'profile/fetchProfile',
    async(_,{rejectWithValue }) =>{

        try{
const token = localStorage.getItem("accessToken");
if(!token)throw new Error("No token found");


const responce = await axios.get("https://api.escuelajs.co/api/v1/auth/profile",
{
    headers:{Authorization: `Bearer ${token}`}
}
);
console.log("response" ,await responce.data);


return await responce.data;
}
        catch(error)
        {
            return rejectWithValue(error.responce?.data || error.message)

        }
    }
);


const profileSlice =createSlice({
    name:"profile",
    initialState : {
        user :null,
        status : "loading" ,
        error: null
    }

    ,
reducers:{
clearProfile : (state) =>{
    state.user=null,
    state.status="loading",
    state.error=null
}
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch profile';
      });
}


}

)


export const {clearProfile} =profileSlice.actions;
export default profileSlice.reducer;