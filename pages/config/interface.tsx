import { Timestamp } from "firebase/firestore/lite"

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

export interface workInterface {
  id:string,
  title:string,
  description:string,
  picture:string,
  time:string
}

export interface homeInterface {
  profile:profileInterface,
  footer:footerInterface[],
  work:workInterface[]
}

export interface blogInterface {
  footer:footerInterface[]
}

export interface contactInterface {
  footer:footerInterface[]
}

export interface workViewInterface {
  title?:string
  work:workInterface[]
  footer?:footerInterface[]
}


export default function Page() {
  return <div className=""></div>
}
