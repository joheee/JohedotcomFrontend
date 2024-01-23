import { doc, getDoc } from "firebase/firestore/lite"
import { db, storage } from "../config/firebase"
import { getDownloadURL, ref } from "firebase/storage"
import { profileInterface } from "../config/interface"

export class ProfileController {
  static async GetProfile() {
    const dofProfileRef = doc(db, 'profile', 'johe')
    const profileData = (await getDoc(dofProfileRef)).data() as profileInterface
    const imageRef = ref(storage, `profile/${profileData.picture}`)
    profileData.picture = await getDownloadURL(imageRef)
    return profileData
  }
}

export default function Page() {
  return <div className=""></div>
}