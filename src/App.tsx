import { ThemeProvider } from 'styled-components'
import { theme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
