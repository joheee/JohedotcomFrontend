import { Timestamp, collection, getDocs, query } from "firebase/firestore/lite"
import { db, storage } from "../config/firebase"
import { workInterface } from "../config/interface"
import { getDownloadURL, ref } from "firebase/storage"

export class WorkController {
    
    static async GetWorkByDate(){
        const docWorkCol = query(collection(db, 'work'))
        const workSnapshot = await getDocs(docWorkCol)
    
        const workData:workInterface[] = [];
    
        for (const snap of workSnapshot.docs) {
            const imageRef = ref(storage, `work/${snap.data().picture}`);
            const imageSrc = await getDownloadURL(imageRef);
            
            const data: workInterface = {
                id: snap.id,
                title: snap.data().title,
                description: snap.data().description,
                picture: imageSrc,
                time: new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(snap.data().time.toDate())
            };
            workData.push(data);
        }
    
        return workData;
    }

}

export default function Page() {
    return <div className=""></div>
}