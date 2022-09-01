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

// ThemeProvider는 Theme를 가져오기 위해 구독할 수 있는 Provider component를 만든다.
export const ThemeProvider = ({ children }) => {
  // 구성요소 자체의 로드 시 초기 상태를 설정하는 처리
  const [theme, setTheme] = useState(themes.light)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}