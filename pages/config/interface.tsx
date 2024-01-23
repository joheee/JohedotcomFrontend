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

export interface blogInterface {
  id:string,
  title:string,
  description:string,
  time:string
}

export interface homeViewInterface {
  profile:profileInterface,
  footer:footerInterface[],
  work:workInterface[],
  blog:blogInterface[]
}

export interface blogViewInterface {
  footer?:footerInterface[]
  blog:blogInterface[]
}

export interface contactViewInterface {
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
