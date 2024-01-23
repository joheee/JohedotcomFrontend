import { collection, getDocs, query } from "firebase/firestore/lite"
import { db } from "../config/firebase"
import { footerInterface } from "../config/interface"

export class FooterController {

  static async GetFooter() {
    const docFooterCol = query(collection(db, 'footer'))
    let footerSnapshot = await getDocs(docFooterCol)
    let footerData:footerInterface[] = []
    footerSnapshot.forEach(snap => {
      footerData.push({
        media:snap.id,
        username:snap.data().username
      })
    })
    return footerData
  }

}

export default function Page() {
  return <div className=""></div>
}