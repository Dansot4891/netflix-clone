import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './features/auth/presentation/signin/page/sign_in_page'
import SignUpPage from './features/main/page/main_page'

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
