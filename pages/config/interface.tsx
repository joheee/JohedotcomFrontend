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