import './Home.css';
import {useLocation} from "react-router-dom";

export default function Home() {
    const location = useLocation();
    const dataAuth = location.state?.dataAuth;
    if (!dataAuth) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    return (
        <div className="home">
            <h1>Welcome dear {dataAuth.username} !</h1>
        </div>
    );
}