import { Outlet } from 'react-router-dom'

import { ToastContainer } from '@/components/bosons/ToastContainer'
import { Header } from '@/components/molecules/Header'

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  )
}
