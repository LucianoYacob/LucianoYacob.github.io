import Layout from "../components/Layout";
import NormalSection from "../components/NormalSection";
import Link from "next/link";
import PersonalizedPresentation from "../components/PersonalizedPresentation";
import styles from "../components/listStyles.module.css";
import helpPrintScreen from "../helpers/helpPrintScreen";


const CV= ({theme, setTheme}) => {
    return(
    <Layout theme={theme} setTheme={setTheme}>
        <PersonalizedPresentation showBox={false}/> 

        <NormalSection theme={theme}>             
            <div className="cont-btn">
                <input type="button" value="Imprimir" onClick={helpPrintScreen} />
            </div>

            <h2>Acerca</h2>
            <ul>
                <li className={styles.li}>Soy Luciano Ezequiel Yacob.</li>
                <li className={styles.li}>Nací el 28 de febrero de 1999.</li>
                <li className={styles.li}>Vivo en Lujan, prov. Buenos Aires, Argentina.</li>
                <li className={styles.li}>Tengo <b>experiencia de trabajo en equipo</b> en diferentes áreas.</li>
                <li className={styles.li}>Gran facilidad de <b>trabajo en grupo</b>.</li>
                <li className={styles.li}>Soy <b>responsable</b>, <b>proactivo</b> y <b>autodidacta</b>.</li>
            </ul>
        </NormalSection>

        <NormalSection theme={theme} paintBlack="#1a1a1a"> 
            <h2>Estudios</h2>
            <ul>
                <li className={styles.li}>Secundario Completo con especialidad en Musica.</li>
                <li className={styles.li}>Estudiante en la formación, <b>&quot;Argentina Programa&quot;</b> (Cursando).</li>
                <li className={styles.li}>Estudiante de <b>&quot;Licenciatura en Sistemas de Información&quot;</b> en la Universidad Nacional de Lujan &quot;UNLU&quot;. (Cursando primer año).</li>
                <li className={styles.li}>Varios cursos completados en Udemy sobre desarrollo de videojuegos y C#.
                    <ul>
                        <li className={styles.li}>
                            <Link href="/images/csharp.jpg">
                                <a className={styles.a} target="_blank">
                                    C# y Unity
                                </a>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/images/Unity2019.jpg">
                                <a className={styles.a} target="_blank">
                                    Unity 2019
                                </a>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/images/Unity2020.jpg">
                                <a className={styles.a} target="_blank">
                                    Unity 2020
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* <li>
                    Curso de Programacion en C# en edutin
                    {/* <img src="../public/favicon.png" height="32px" width="32px"  /> 
                </li> */}
            </ul>
        </NormalSection>

        <NormalSection theme={theme} renderBox={true}> 
            <h2 className={styles.title}>Tecnologías</h2>
            <ul className={styles.ul}>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/html5.svg" width="80" height="80" alt="HTML"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/css.svg" width="80" height="80" alt="CSS"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/javascript.svg" width="80" height="80" alt="JavaScript"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/bootstrap.svg" width="80" height="80" alt="Bootstrap"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/sass.svg" width="80" height="80" alt="Sass"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/react.svg" width="80" height="80" alt="React"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/next-js.svg" width="80" height="80" alt="NextJS"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/c-sharp.svg" width="80" height="80" alt="C-Sharp"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/git.svg" width="80" height="80" alt="Git"/></li>
                <li className={`${styles.icon}, ${styles.li}`}><img src="/icons/github.svg" width="80" height="80" alt="GitHUB"/></li>
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
};

export default CV;
