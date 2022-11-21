import { Container } from '@/components/bosons/Container'
import { Header } from '@/components/molecules/Header'
import { TeamTable } from '@/components/organisms/TeamTable'

export const TeamPage = () => {
  return (
    <Container>
      <Header title="MANAGE TEAM" subtitle="Managing the Team Members" />

      <TeamTable />
    </Container>
  )
}
