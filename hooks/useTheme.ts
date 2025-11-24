import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../store/slices/themeSlice"
import type { RootState } from "../store/store"

export const useTheme = () => {
  const dispatch = useDispatch()
  const isDark = useSelector((state: RootState) => state.theme.isDark)

  return {
    isDark,
    toggleTheme: () => dispatch(toggleTheme()),
  }
}
