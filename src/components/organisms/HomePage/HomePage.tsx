import { Button } from '@/components/atoms/Button'
import { Minus, Plus, ReturnCircled } from '@/components/atoms/Icons'
import { Logo } from '@/components/atoms/Logo/Logo'
import { useCount } from '@/hooks'
import { toastService } from '@/services/'

import * as S from './styles'

export const HomePage = () => {
  const { count, increment, decrement, reset } = useCount()

  const handleReset = () => {
    toastService.success('Count reseted')
    reset()
  }

  return (
    <S.Container>
      <Logo />
      <h1>React Boilerplate with Vite</h1>

      <S.State>
        <Button icon={<Minus width={20} height={20} />} onClick={decrement} />

        <span>{count}</span>

        <Button icon={<Plus width={20} height={20} />} onClick={increment} />
      </S.State>

      <Button
        icon={<ReturnCircled width={20} height={20} />}
        onClick={handleReset}
      >
        Reset
      </Button>
    </S.Container>
  )
}
