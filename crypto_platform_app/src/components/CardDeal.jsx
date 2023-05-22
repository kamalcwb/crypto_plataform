import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Encontre o melhor investimento <br className="sm:block hidden" /> em poucos passos.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Nosso time de tecnologia antecipa tendências do mercado, para tornar a experiência de investir mais simples e acessível para todas as pessoas.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

export default CardDeal;

