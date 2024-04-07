import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const postData = createAsyncThunk(
    'postData',
    async(user, {dispatch}) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://65f50f49f54db27bc0229313.mockapi.io/users', options)
        dispatch(postInfo(response))
        localStorage.setItem('userRegister', JSON.stringify(user))
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: []
    },
    reducers: {
        postInfo: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const {postInfo} = postSlice.actions
export default postSlice.reducer