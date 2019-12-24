import { createSlice, CaseReducer } from "@reduxjs/toolkit"

export type AppState = {
  count: number,
  name: string,
  password: string
}

const appSlice = createSlice({
  name: "app",
  initialState: {
    count: 0,
    name: "",
    password: ""
  },
  reducers: {
    // automaticky vytvorí reducery a akcie z funkcií, pričom knižnica Immer zkonvertuje mutabilné operácie so stavom (state) na imutabilné operácie (pre Redux)
    increment(state: AppState, action: {payload: {
      amount: number
    }}) {
      const { amount } = action.payload
      state.count += amount ?? 1 // mutabilná operácia kópie stavu
      // ?? = elvis operator
    },

    decrement(state: AppState, action: {payload: {
      amount: number
    }}) {
      const { amount } = action.payload
      state.count -= amount ?? 1
    },


    setCredentials(state: AppState, action: {payload: {
      name: string,
      password: string
    }}) {
      const { name, password } = action.payload
      state.name = name
      state.password = password
    }

  }
})

export const { increment, decrement, setCredentials } = appSlice.actions
// hocikde v appke potom: dispatch(increment({amount: 30}))

// reducer
export default appSlice.reducer