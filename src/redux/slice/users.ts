import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/redux/store";

export interface IUsers {
    firstName: string,
    lastName: string,
    phone: string,
    national: string,
    uid: string,
    logIn: boolean
}

const initialState: IUsers = {
    firstName: '',
    lastName: '',
    phone: '',
    national: '',
    uid: '',
    logIn: false
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, action) => {
            state.uid = action.payload

        },
        dataUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.national = action.payload.nationality
            state.phone = action.payload.phoneNumber
        },
        setLogIn:(state, action)=>{
            state.logIn = action.payload
        },

    }
})

export const {add,dataUser,setLogIn} = userSlice.actions
export const selectCount = (state: RootState) => state.user
export const url = (state:RootState) => state.user.uid
export default userSlice.reducer


