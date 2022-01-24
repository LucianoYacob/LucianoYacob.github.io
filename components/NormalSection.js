import BoxZone from "../components/BoxZone";

const NormalSection = ({children, theme, paintBlack, renderBox = false}) => {

    let bgColor = theme === "light" ? "#e8e8e8" : "#1a1a1a";
    let color = theme === "light" ? "#1a1a1a" : "#e8e8e8";
    return ( 
        <>
            <section>
                {renderBox && <BoxZone />}
                <article>
                    {children}
                </article>
            </section>

            <style jsx>{`
                section{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    min-width: 100%;
                    min-height: 100vh;
                    padding: 5vh 0;
                    border-top: 1px solid #e8e8e8;
                    overflow-y: hidden;
                    overflow-x: hidden;

                    transition: background-color 1s ease-out; 
                    background-color: ${paintBlack !== undefined ? paintBlack : bgColor};
                }

                article{
                    width: 750px;
                    max-width: 95%;
                    margin: 0 auto;
                    padding: 0;
                    height: auto;
                    line-height: 1.6em;
                    word-spacing: 1px;
                    letter-spacing: 10px
                    
                    transition: color 1s ease-out; 
                    color: ${paintBlack !== undefined ? "#e8e8e8" : color};
                }

            `}</style>
        </>
     );
}

export default NormalSection;