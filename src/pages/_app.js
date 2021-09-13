import '../styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import backgroundReducer from '../features/background'
import booksReducer from '../features/books'

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      background: backgroundReducer,
      books: booksReducer,
    },
    
  })
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
