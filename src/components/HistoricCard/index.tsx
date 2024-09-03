import { TouchableOpacityProps } from 'react-native'
import { Check, ClockClockwise } from 'phosphor-react'
import { Container, Departure, Info, LicensePlate } from './styles'
import { useTheme } from 'styled-components/native'

export type HistoricCardProps = {
  id: string
  licensePlate: string
  created: string
  isSinc: boolean
}

type Props = TouchableOpacityProps & {
  data: HistoricCardProps
}

export function HistoricCard({ data, ...rest }: Props) {
  const { COLORS } = useTheme()
  return (
    <Container activityOpacity={0.7} {...rest}>
      <Info>
        <LicensePlate>{data.licensePlate}</LicensePlate>
        <Departure>{data.created}</Departure>
      </Info>

      {data.isSinc ? (
        <Check size={24} color={COLORS.BRAND_LIGHT} />
      ) : (
        <ClockClockwise size={24} color={COLORS.GRAY_400} />
      )}
    </Container>
  )
}
