import ArticleLand from "./ArticleLand.jsx";
import {useCallback, useEffect, useRef, useState} from "react";

export default function Article() {

    const [currentPage, setCurrentPage] = useState(1);
    const screenRef = useRef(null);
    const totalPages = 5;

   const goToNext = useCallback(() => {
        if (screenRef.current) {
            if (currentPage < totalPages) {
                screenRef.current.scrollBy({ left: screenRef.current.offsetWidth, behavior: "smooth" });
            } else {

                screenRef.current.scrollTo({ left: 0, behavior: "smooth" });
            }
        }
    }, [currentPage, totalPages]);

   useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3500);

        return () => clearInterval(interval);
    }, [goToNext]);

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

    const goToPage = useCallback((pageNumber) => {
        if (screenRef.current && pageNumber >= 1 && pageNumber <= totalPages) {
            const container = screenRef.current;
            const slides = container.querySelectorAll('li');
            const targetSlide = slides[pageNumber - 1];
            if (targetSlide) {
                const slideWidth = targetSlide.offsetWidth;
                const slideLeft = targetSlide.offsetLeft;

                const targetScrollLeft = slideLeft - (container.offsetWidth / 2) + (slideWidth / 2);

                container.scrollTo({
                    left: targetScrollLeft,
                    behavior: "smooth"
                });

                setCurrentPage(pageNumber);
            }
        }
    }, [totalPages]);

    const renderPaginatorItems = () => {
        const items = [];
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <li
                    key={i}
                    className={currentPage === i ? "active" : ""}
                    onClick={() => goToPage(i)}
                    style={{ cursor: "pointer" }}
                />
            );
        }
        return items;
    };

    return (

        <article>
            <ul className="lineArticle" ref={screenRef}>
                <ArticleLand />
                <ArticleLand />
                <ArticleLand />
                <ArticleLand />
                <ArticleLand />
            </ul>
            <ul className="paginator">
                {renderPaginatorItems()}
            </ul>
        </article>
    );
}