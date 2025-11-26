import userProfil from '../../../../../assets/images/userProfile.png';

export default function HeroProfile({user}) {
    return (
        <section className="upAccount">
            <figure><img src={userProfil} alt="profile picture"/></figure>
            <h1>{user.username}</h1>
            <p>{user.mail}</p>
        </section>
    );
}