const LICENSE_PLATE_REGEX = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}'

export function licensePlateValidate(licensePlate: string){
  const license = licensePlate.toLocaleUpperCase()

  const isValid = license.match(LICENSE_PLATE_REGEX)

  return isValid
}