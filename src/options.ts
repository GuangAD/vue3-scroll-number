export interface IOptions {
  transformDuration?: number
  fractionDigits?: number
  prefix?: string
  infix?: string
  suffix?: string
  thousandSeparator?: string
}

const options: IOptions = {
  transformDuration: 1500,
  fractionDigits: 0,
  prefix: '',
  infix: '',
  suffix: '',
  thousandSeparator: ','
}

export function getOption(key: keyof IOptions) {
  return options[key]
}

export function setOptions(value: IOptions) {
  Object.assign(options, value)
}
