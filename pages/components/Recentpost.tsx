import Recent from '../../styles/Recentpost.module.scss'
import { blogViewInterface } from '../config/interface'
import RecentPostCard from './RecentPostCard'

export default function Recentpost(prop:blogViewInterface){
    
    if(prop.blog === undefined) return <div className=""></div>

    return  <div className={Recent.recentPostContainer}>
                <div className="">
                    <div className={Recent.recentPostTitle}>
                        Recent Blogs
                    </div>
                </div>
                <div className={Recent.cardPostContainer}>
                    {
                        prop.blog.map((item, i) => (
                            <RecentPostCard {...item} key={i}/>
                        ))
                    }
                </div>
            </div>
}