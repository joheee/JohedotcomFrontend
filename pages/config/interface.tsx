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

export interface homeInterface {
  profile:profileInterface,
  footer:footerInterface[]
}

export interface blogInterface {
  footer:footerInterface[]
}

export interface contactInterface {
  footer:footerInterface[]
}