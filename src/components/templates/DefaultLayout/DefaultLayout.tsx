import { Outlet } from 'react-router-dom'

import { ToastContainer } from '@/components/bosons/ToastContainer'
import { Sidebar } from '@/components/molecules/Sidebar'
import { Topbar } from '@/components/molecules/Topbar'

import * as S from './style'

export const DefaultLayout = () => {
  return (
    <>
      <S.Container className="app">
        <Sidebar />

        <S.Main>
          <Topbar />
          <Outlet />
        </S.Main>
      </S.Container>

      <ToastContainer />
    </>
  )
}
