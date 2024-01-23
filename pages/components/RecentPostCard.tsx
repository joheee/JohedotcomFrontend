import Recentpost from '../../styles/Recentpostcard.module.scss'
import { blogInterface } from '../config/interface'

export default function RecentPostCard(prop:blogInterface){
    return  <div className={Recentpost.recentPostCardContainer}>
                <div className={Recentpost.recentPostCardTitle}>{prop.title}</div>

                <div className={Recentpost.recentPostCardDateContainer}>
                    <div className={Recentpost.recentPostCardDateItem}>{prop.time}</div>
                    <div className={Recentpost.recentPostCardDateItem}>
                        |
                    </div>
                    <div className={Recentpost.recentPostCardDateItem}>
                        code, design
                    </div>
                </div>

                <div className={Recentpost.recentPostCardDesc}>{prop.description}</div>
            </div>
}