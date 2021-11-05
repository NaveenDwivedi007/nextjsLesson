import { ThemeProvider } from '@theme-ui/theme-provider'
import '../styles/globals.css'
import theme from '../theme'

// theme provider will rap all the component with theme create in theme.js as 
// _app.js is file where all the component will pass through(root for styling)

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme ={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
}

export default MyApp
