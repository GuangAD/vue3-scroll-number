export interface IOptions {
  transformDuration: number
}

const options: IOptions = {
  transformDuration: 1500
}

export function getOption(key: keyof IOptions) {
  return options[key]
}

export function setOptions(value: IOptions) {
  Object.assign(options, value)
}
