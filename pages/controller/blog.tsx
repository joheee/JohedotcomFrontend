import { collection, getDocs, query } from "firebase/firestore/lite"
import { db } from "../config/firebase"
import { blogInterface } from "../config/interface"

export class BlogController {
    static async GetBlogByDate(){
        const blogCol = query(collection(db, 'blog'))
        const blogSnapshot = await getDocs(blogCol)
        const blogData:blogInterface[] = []
    
        blogSnapshot.forEach(item => {
            const data:blogInterface = {
                id:item.id,
                title:item.data().title,
                description:item.data().description,
                tag:item.data().tag,
                time: new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(item.data().time.toDate())
            }
            blogData.push(data)
        })

        return blogData
    }
}

export default function Page() {
    return <div className=""></div>
}