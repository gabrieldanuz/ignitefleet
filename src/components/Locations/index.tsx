import { Car, FlagCheckered } from 'phosphor-react'

import { LocationInfo, LocationInfoProps } from '../LocationInfo'
import { Container, Arrival, Line } from './styles'

type Props = {
  departure: LocationInfoProps
  arrival?: LocationInfoProps | null
}

export function Locations({ departure, arrival = null }: Props) {
  return (
    <Container>
      <LocationInfo
        icon={Car}
        label={departure.label}
        description={departure.description}
      />

      {arrival && (
        <>
          <Line />

          <LocationInfo
            icon={FlagCheckered}
            label={arrival.label}
            description={arrival.description}
          />
        </>
      )}
    </Container>
  )
}
