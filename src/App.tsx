import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './features/auth/presentation/signin/page/sign_in_page'
import MainPage from './features/main/presentation/page/main_page'
import { SignUpAgreementPage } from './features/auth/presentation/signup/sign_up_agreement/sign_up_agreement_page'
import { SignUpPasswordPage } from './features/auth/presentation/signup/sign_up_password/sign_up_password_page'
import { SignUpEmailPage } from './features/auth/presentation/signup/sign_up_email/sign_up_email_page'
import { AppRoutes } from './core/route/routes'

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.signIn} element={<SignInPage />} />
      <Route path={AppRoutes.main} element={<MainPage />} />
      <Route path={AppRoutes.signUpAgreement} element={<SignUpAgreementPage />} />
      <Route path={AppRoutes.signUpPassword} element={<SignUpPasswordPage />} />
      <Route path={AppRoutes.signUpEmail} element={<SignUpEmailPage />} />
    </Routes>
  )
}

export default App
