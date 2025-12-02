import storyImg from "../../../../../assets/images/story.png";

export default function Hero() {
    return (
        <section className="up">
            <h1>HISTORIQUE DES TRANSACTIONS</h1>
            <figure><img src={storyImg || "#"} alt="history picture"/></figure>
        </section>
    );
}