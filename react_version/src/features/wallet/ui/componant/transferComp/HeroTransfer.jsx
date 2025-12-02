import transfert from '../../../../../assets/images/transfert.png'

export default function HeroTransfer() {
    return (
        <section className="up">
            <h1>FAIRE UN TRANSFERT</h1>
            <figure>
                <img src={transfert || ""} alt="deposit"/>
            </figure>
        </section>
    )
}
