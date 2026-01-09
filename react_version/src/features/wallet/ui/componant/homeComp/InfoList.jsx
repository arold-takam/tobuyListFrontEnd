import Triangle from "../../../../../assets/images/Triangle.png";
import {useEffect, useRef, useState} from "react";

export default function InfoList() {

    const news = [
        {
            id: "1",
            info : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitisexercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,debitis dolores ratione voluptatem!"
        },
        {
            id: "2",
            info : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitisexercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,debitis dolores ratione voluptatem!"
        },
        {
            id: "3",
            info : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitisexercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,debitis dolores ratione voluptatem!"
        },
        {
            id: "4",
            info : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitisexercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,debitis dolores ratione voluptatem!"
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);

    const screenRef = useRef(null);

    const totalPages = news.length;

    const goToNext = () => {
        if (screenRef.current && currentPage < totalPages) {
            screenRef.current.scrollBy({ left: screenRef.current.offsetWidth, behavior: "smooth" });
        }
    };

    const goToPrev = () => {
        if (screenRef.current && currentPage > 1) {
            screenRef.current.scrollBy({ left: -screenRef.current.offsetWidth, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const screen = screenRef.current;
        if (!screen) return;

        const handleScroll = () => {
            const scrollLeft = screen.scrollLeft;
            const containerWidth = screen.offsetWidth;

            const newPage = Math.round(scrollLeft / containerWidth) + 1;
            setCurrentPage(Math.min(Math.max(newPage, 1), totalPages));
        };

        handleScroll();

        screen.addEventListener("scroll", handleScroll);
        return () => screen.removeEventListener("scroll", handleScroll);
    }, [totalPages]);

    return (
        <section className="info">
            <div className="top">
                <h3>News</h3>
                <button type="button" className="allBtn">VIEW ALL</button>
            </div>
            <section className="slider" >
                <ul ref={screenRef}>
                    {
                        news.map((n) => (
                            <li key={n.id}>
                                <button type="button" className="see">CONSULTER</button>
                                <div className="new">
                                    <p>
                                        {n.info}
                                    </p>
                                </div>
                            </li>
                       ))
                    }
                </ul>
                <div className="btn">
                    <button
                        type="button"
                        className="left"
                        onClick={goToPrev}
                        disabled={currentPage === 1}
                    >
                        <img src={Triangle || ""} alt="arrow"/>
                    </button>
                    <div className="paginator"><p><b>{currentPage}</b>/{totalPages}</p></div>
                    <button
                        type="button"
                        className="right"
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                    >
                        <img src={Triangle || ""} alt="arrow"/>
                    </button>
                </div>
            </section>
        </section>
    );
}