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
            state.logIn = true
        },
        dataUser: (state, action) => {
            console.log(action.payload)
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.national = action.payload.nationality
            state.phone = action.payload.phoneNumber
        }
    }
})
export const {add,dataUser} = userSlice.actions
export const selectCount = (state: RootState) => state.user
export default userSlice.reducer


