import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { ContactsPage } from '@/pages/ContactsPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { TeamPage } from '@/pages/TeamPage'

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  )
}
