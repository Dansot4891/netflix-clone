import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './features/auth/presentation/signin/page/sign_in_page'
import MainPage from './features/main/presentation/page/main_page'
import { SignUpAgreementPage } from './features/auth/presentation/signup/sign_up_agreement/page/sign_up_page'

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/sign-up-agreement" element={<SignUpAgreementPage />} />
    </Routes>
  )
}

export default App
