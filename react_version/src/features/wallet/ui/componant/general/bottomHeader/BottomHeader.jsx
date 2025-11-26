import {Link} from "react-router-dom";
import './BottomHeader.css';

import accueil from '../../../../../../assets/images/accueil.png';
import userProfile from '../../../../../../assets/images/userProfile.png';
import story from '../../../../../../assets/images/story.png';
import assistante from '../../../../../../assets/images/assistante.png';

export default function BottomHeader(){
    return(
        <section className="bottomHeader">
            <ul>
                <li><Link to={`/home`} className="active"><img src={accueil} alt="home"/></Link></li>
                <li><a href="./html/story.html"><img src={story} alt="story"/></a></li>
                <li><Link to={`/profile`}><img src={userProfile} alt="profile"/></Link></li>
                <li><a href="#"><img src={assistante} alt="client assistance"/></a></li>
            </ul>
        </section>
    );
}