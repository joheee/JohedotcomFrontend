import Recent from '../../styles/Recentpost.module.scss'
import RecentPostCard from './RecentPostCard'

export default function Recentpost(){
    return  <div className={Recent.recentPostContainer}>
                <div className="">
                    <div className={Recent.recentPostTitle}>
                        Recent Blogs
                    </div>
                </div>
                <div className={Recent.cardPostContainer}>

                    <RecentPostCard/>
                    <RecentPostCard/>
                    <RecentPostCard/>

                </div>
            </div>
}