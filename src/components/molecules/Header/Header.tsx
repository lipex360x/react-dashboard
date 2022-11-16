import * as S from './styles'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <S.Container>
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
    </S.Container>
  )
}
