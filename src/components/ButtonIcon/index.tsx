import React from 'react'
import { Container } from './styles'
import { IconProps } from 'phosphor-react'
import { TouchableOpacityProps } from 'react-native'
import theme from '../../theme'
import { useTheme } from 'styled-components'

export type IconBoxProps = (props: IconProps) => JSX.Element

type Props = TouchableOpacityProps & {
  icon: IconBoxProps
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container activityOpacity={0.7} {...rest}>
      <Icon size={52} color={COLORS.BRAND_MID} />
    </Container>
  )
}
