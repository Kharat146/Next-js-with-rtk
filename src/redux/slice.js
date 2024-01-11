const { createSlice, nanoid } = require("@reduxjs/toolkit");

// createSlice
const initialState = {
    users:[]
}

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser:(state, action)=>{
            const data = action.payload;
            data.id = nanoid();
            state.users.push(data);
        },
        removeUser:(state, action) =>{
            const data = state.users.filter((item)=> 
            {
                return item.id !== action.payload
            })
            state.users = data;
        }
    }
})

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;