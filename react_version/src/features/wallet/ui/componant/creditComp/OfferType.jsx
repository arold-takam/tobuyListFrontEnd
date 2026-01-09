import {useEffect, useRef, useState} from "react";
import triangle from "../../../../../assets/images/Triangle.png";


export default function OfferType({ selectedOffer, onSelectOffer , OFFERS}) {
    const [currentPage, setCurrentPage] = useState(1);

    const screenRef = useRef(null);

    const totalPages = OFFERS.length;

    const scrollToOffer = (index) => {
        if (screenRef.current) {
            const cardWidth = screenRef.current.querySelector("li")?.offsetWidth || 288;
            const gap = 32;
            const offset = index * (cardWidth + gap);
            screenRef.current.scrollTo({
                left: offset,
                behavior: "smooth"
            });
            setCurrentPage(index + 1);
        }
    };

    const goToNext = () => {
        if (currentPage < totalPages) {
            scrollToOffer(currentPage);
        }
    };

    const goToPrev = () => {
        if (currentPage > 1) {
            scrollToOffer(currentPage - 2);
        }
    };

    useEffect(() => {
        const screen = screenRef.current;
        if (!screen) return;

        const handleScroll = () => {
            const cardWidth = screen.querySelector("li")?.offsetWidth || 288;
            const gap = 32;
            const scrollLeft = screen.scrollLeft;
            const newPage = Math.round(scrollLeft / (cardWidth + gap)) + 1;
            setCurrentPage(Math.min(Math.max(newPage, 1), totalPages));
        };

        screen.addEventListener("scroll", handleScroll);
        return () => screen.removeEventListener("scroll", handleScroll);
    }, [totalPages]);



    const handleOfferClick = (offerId) => {
        onSelectOffer(offerId);
    };

    return (
        <div className="offerType">
            <h2>Choisir Votre Offre d'Emprunt</h2>
            <div className="screen" ref={screenRef}>
                <ul>
                    {OFFERS.map((offer) => (
                        <li
                            key={offer.id}
                            className={selectedOffer === offer.id ? "active" : ""}
                            onClick={() => handleOfferClick(offer.id)}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="number">{offer.number}</span>
                            <h3>OFFRE <b>{offer.name}</b></h3>
                            <div className="details">
                                <div className="amount">
                                    <p>Montant OFFERT:</p>
                                    <p><b>{offer.amount}</b> FCFA</p>
                                </div>
                                <div className="delay">
                                    <p>DÉLAIS D'EMPRUNT:</p>
                                    <p><b>{offer.delay}</b> Jours</p>
                                </div>
                                <div className="taxe">
                                    <p>TAXES PRÉLEVÉE:</p>
                                    <p><b>{offer.tax}</b> %</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="btn">
                <button
                    type="button"
                    className="left"
                    onClick={goToPrev}
                    disabled={currentPage === 1}
                >
                    <img src={triangle || ""} alt="arrow" />
                </button>
                <div className="paginator">
                    <p><b>{currentPage}</b> /{totalPages}</p>
                </div>
                <button
                    type="button"
                    className="right"
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                >
                    <img src={triangle || ""} alt="arrow" />
                </button>
            </div>
        </div>
    );
}