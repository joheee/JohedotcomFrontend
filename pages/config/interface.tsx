export interface profileInterface {
  title:string,
  subtitle:string,
  picture:string,
  description:string
}

export interface footerInterface {
  media:string
  username:string,
}

export default interface homeInterface {
  profile:profileInterface,
  footer:footerInterface[]
}

export interface blogInterface {
  footer:footerInterface[]
}

export interface contactInterface {
  footer:footerInterface[]
}

export interface workInterface {
  footer:footerInterface[]
}