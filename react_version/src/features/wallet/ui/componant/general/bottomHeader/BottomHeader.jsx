import {NavLink} from "react-router-dom";
import './BottomHeader.css';

import accueil from '../../../../../../assets/images/accueil.png';
import userProfile from '../../../../../../assets/images/userProfile.png';
import story from '../../../../../../assets/images/story.png';
import assistante from '../../../../../../assets/images/assistante.png';

export default function BottomHeader(){
    return(
        <section className="bottomHeader">
            <ul>
                <li><NavLink to={`/home`} className={({ isActive }) => isActive ? 'active' : '' }><img src={accueil} alt="home"/></NavLink></li>
                <li><NavLink to={"/history"} className={({ isActive }) => isActive ? 'active' : '' }><img src={story} alt="story"/></NavLink></li>
                <li><NavLink to={`/profile`} className={({ isActive }) => isActive ? 'active' : '' }><img src={userProfile} alt="profile"/></NavLink></li>
                <li><NavLink to={''} className={({ isActive }) => isActive ? 'active' : '' }><img src={assistante} alt="client assistance"/></NavLink></li>
            </ul>
        </section>
    );
}