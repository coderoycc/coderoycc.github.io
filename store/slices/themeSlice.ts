import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
  isDark: boolean
}

const initialState: ThemeState = {
  isDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark
      if (state.isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
