import Triangle from "../../../../../assets/images/Triangle.png";

export default function InfoList() {
    return (
        <section className="info">
            <div className="top">
                <h3>News</h3>
                <button type="button" className="allBtn">VIEW ALL</button>
            </div>
            <section className="slider">
                <ul>
                    <li>
                        <button type="button" className="see">CONSULTER</button>
                        <div className="new">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                debitis dolores ratione voluptatem!
                            </p>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="see">CONSULTER</button>
                        <div className="new">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                debitis dolores ratione voluptatem!
                            </p>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="see">CONSULTER</button>
                        <div className="new">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                debitis dolores ratione voluptatem!
                            </p>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="see">CONSULTER</button>
                        <div className="new">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                debitis dolores ratione voluptatem!
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="btn">
                    <button type="button" className="left"><img src={Triangle} alt="arrow"/>
                    </button>
                    <div className="paginator"><p><b>1</b>/15</p></div>
                    <button type="button" className="right"><img src={Triangle} alt="arrow"/></button>
                </div>
            </section>
        </section>
    );
}