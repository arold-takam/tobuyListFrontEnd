import tirelire from '../../../../../assets/images/Tirelire.png'

export default function HeroDeposit() {
    return (
        <section className="up">
            <h1>FAIRE UN DEPOT</h1>
            <figure>
                <img src={tirelire || ""} alt="deposit"/>
            </figure>
        </section>
    )
}
