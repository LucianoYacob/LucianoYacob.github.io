import styles from "./presentation.module.css";
import BoxZone from "./BoxZone";

const prefix = '';

const PersonalizedPresentation = ({showBox}) => {
    return (
        <section className={styles.presentation}>
            {showBox && <BoxZone />}

            <article className={styles.firstArticle}>
                <div>
                    <div className={styles.imgContainer}>
                        <img src={prefix + "/images/mainimg.jpg"} alt="LucianoYacob" height="125" width="125"/>
                    </div>
                    <h1 className={styles.h1}>Luciano Yacob</h1>
                    <h2 className={styles.h2}>Diseñador y Programador Web Front-end</h2>
                </div>
            </article>
        </section> 
    );
}

export default PersonalizedPresentation ;