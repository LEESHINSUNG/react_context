// React_P.J와 두 모듈을 불러온다
import React, { useContext, useState } from 'react'

// 테마를 기반으로 사용할 몇 가지 값은 만든다
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

export const ThemeContext = React.createContext({
  theme: undefined,
  setTheme: async (theme) => null,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}