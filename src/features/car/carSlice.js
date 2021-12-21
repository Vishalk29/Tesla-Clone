import {createSlice} from '@reduxjs/toolkit'
// create initial state

const initialState = {
  cars: ['Model S', 'Model 3', 'Model X', 'Model Y'],
}
// to create actual slice
const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
})

export const selectCars = (state) => state.car.cars
export default carSlice.reducer
