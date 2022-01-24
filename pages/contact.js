import Link from "next/link";
import Layout from "../components/Layout";
import NormalSection from "../components/NormalSection";
import PersonalizedPresentation from "../components/PersonalizedPresentation";
import styles from "../components/listStyles.module.css";
import helpPrintScreen from "../helpers/helpPrintScreen";

const Contact = ({theme, setTheme}) => (
    <Layout theme={theme} setTheme={setTheme}>
        <PersonalizedPresentation/>
        <NormalSection theme={theme}> 
            <div className="cont-btn">
                <input type="button" value="Imprimir" onClick={helpPrintScreen} />
            </div>
            <h2>Contacto</h2>
            <ul>
                <li className={styles.li}>lucianoe.yacob@gmail.com</li>
                <li className={styles.li}>+54 2323 555448</li>
                <li className={styles.li}>
                    <a href="https://www.linkedin.com/in/luciano-yacob-6b62b722a/" target="_blank" rel="noopener noreferrer" className={theme === "light" ? styles.aDark : styles.a}>Linkedin</a>
                </li>
                <li className={styles.li}>
                    <a href="https://github.com/LucianoYacob" target="_blank" rel="noopener noreferrer" className={theme === "light" ? styles.aDark : styles.a}>GitHUB</a>
                </li>
                <li className={styles.li}>
                    <a href="https://LucianoYacob.github.io" target="_blank" rel="noopener noreferrer" className={theme === "light" ? styles.aDark : styles.a}>Luciano Yacob</a>
                </li>
            </ul>
        </NormalSection>
        
        <style jsx>{`
            .cont-btn{
                height: 34px;
            }
            input{
                position: relative;
                display: block; 
                margin: 25px auto 0px;
                background-color: transparent;
                border: solid 1px ${theme === "light" ? "#40010080" : "#e8e8e8" };
                border-radius: 5px;
                font-size: calc(.8rem + .2vw);
                padding: 5px 10px;
                color: ${theme === "light" ? "#1a1a1a" : "#e8e8e8"}
            }
            input:active{
                box-shadow: 0px 0px 4px 0px #0a0a0a;
                font-size: calc(.7rem + .2vw);
            }
        `}
        </style>
    </Layout>
);

export default Contact;
