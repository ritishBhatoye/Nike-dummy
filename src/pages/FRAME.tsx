import { FunctionComponent } from "react";
import styles from "./FRAME.module.css";

const FRAME: FunctionComponent = () => {
  return (
    <div className={styles.fRAMEDiv}>
      <img
        className={styles.simpleIconsnike}
        alt=""
        src="../simpleiconsnike.svg"
      />
      <div className={styles.mENDiv}>MEN</div>
      <div className={styles.wOMENDiv}>WOMEN</div>
      <div className={styles.sALEDiv}>SALE</div>
      <div className={styles.sKNRSDiv}>SKNRS</div>
      <div className={styles.div}>$190</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.addToCart}>Add To Cart</div>
      <div className={styles.heroElementsDiv}>
        <b className={styles.nikeAirMax}>Nike Air Max</b>
        <div className={styles.lebaghDiv}>Lebagh</div>
        <div className={styles.whatKindOfShoesDoesNikeM}>
          <p className={styles.whatKindOf}>
            What kind of Shoes does Nike make for men?
          </p>
          <p className={styles.fromRunningAnd}>
            From running and basketball to training and casual styles, Nike
            men's shoes are designed with the latest Nike innovations like
            Flyknit, Zoom and Air to keep you secure and comfortable no matter
            your sport. Shop men’s shoes by style, technology or sport, and
            check out new releases for all the latest.
          </p>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="../vector-1.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector-2.svg" />
      <div className={styles.jUSTDOIT}>jUST DO IT</div>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv1} />
          <img
            className={styles.airMax2xShoeWh9d6PRemovebIcon}
            alt=""
            src="../airmax2xshoewh9d6premovebgpreview-1@2x.png"
          />
          <b className={styles.nIKEAIRTAKEONE}>nIKE AIR TAKE ONE</b>
          <b className={styles.b}>$180</b>
          <img className={styles.starIcon} alt="" src="../star-1.svg" />
          <img className={styles.starIcon1} alt="" src="../star-2.svg" />
          <img className={styles.starIcon2} alt="" src="../star-3.svg" />
          <img className={styles.starIcon3} alt="" src="../star-4.svg" />
          <img className={styles.starIcon4} alt="" src="../star-5.svg" />
          <div className={styles.rectangleDiv2} />
          <img
            className={styles.akarIconscirclePlus}
            alt=""
            src="../akariconscircleplus.svg"
          />
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv3} />
          <img
            className={styles.airMax2xShoeWh9d6PRemovebIcon1}
            alt=""
            src="../airmax2xshoewh9d6premovebgpreview-11@2x.png"
          />
          <b className={styles.nIKEAIRTAKEONE1}>nIKE AIR TAKE ONE</b>
          <b className={styles.b1}>$200</b>
          <img className={styles.starIcon5} alt="" src="../star-11.svg" />
          <img className={styles.starIcon6} alt="" src="../star-21.svg" />
          <img className={styles.starIcon7} alt="" src="../star-31.svg" />
          <img className={styles.starIcon8} alt="" src="../star-41.svg" />
          <img className={styles.starIcon9} alt="" src="../star-51.svg" />
          <div className={styles.rectangleDiv4} />
          <img
            className={styles.akarIconscirclePlus1}
            alt=""
            src="../akariconscircleplus1.svg"
          />
        </div>
      </div>
      <img className={styles.shoe1Icon} alt="" src="../shoe-1@2x.png" />
    </div>
  );
};

export default FRAME;
