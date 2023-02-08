import { Slide } from "@mui/material";
import Image from "next/image";
import Divider from "../Divider";
import styles from './championinfo.module.scss'

type ClassProps = {
  splashart: string,
  splashartalt: string,
  splashartheight: number,
  splashartwidth: number,
  championname: string,
  championsubtitle: string,
  championlore: string,
  classimage: string,
  classalt: string,
  classwidth: number,
  classheight: number,
  classmargin?: string,
  difficultyimage: string,
  difficultyalt: string,
  difficultywidth?: number,
  difficultyheight?: number,
  difficultymargin?: string,
  passivetitle?: string,
  passivedescription?: string,
  passive: string,
  passivealt: string,
  passivewidth?: number,
  passiveheight?: number,
  skilltitle1?: string,
  skilldescription1?: string,
  skill1: string,
  skillalt1: string,
  skillheight1?: number,
  skillwidth1?: number,
  skill2: string,
  skilltitle2?: string,
  skilldescription2?: string,
  skillheight2?: number,
  skillwidth2?: number,
  skillalt2: string,
  skilltitle3?: string,
  skilldescription3?: string,
  skill3: string,
  skillheight3?: number,
  skillwidth3?: number,
  skillalt3: string,
  skilltitle4?: string,
  skilldescription4?: string,
  skill4: string,
  skillalt4: string,
  skillheight4?: number,
  skillwidth4?: number,
}

export default function ChampionInfo({
  splashart,
  splashartalt,
  splashartwidth,
  splashartheight,
  championname,
  championsubtitle,
  championlore,
  classimage,
  classalt,
  classwidth,
  classheight,
  classmargin,
  difficultyimage,
  difficultyalt,
  difficultywidth,
  difficultyheight,
  difficultymargin,
  passivetitle,
  passive,
  passivedescription,
  passivealt,
  passivewidth,
  passiveheight,
  skilltitle1,
  skilldescription1,
  skill1,
  skillalt1,
  skillheight1,
  skillwidth1,
  skilltitle2,
  skilldescription2,
  skill2,
  skillheight2,
  skillwidth2,
  skillalt2,
  skilltitle3,
  skilldescription3,
  skill3,
  skillheight3,
  skillwidth3,
  skillalt3,
  skilltitle4,
  skilldescription4,
  skill4,
  skillalt4,
  skillheight4,
  skillwidth4 }: ClassProps) {

  return (
    <div className={styles.container}>

      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div className={styles.banner}>
          <Image className={styles.splashart} src={splashart} alt={splashartalt} width={splashartwidth} height={splashartheight} />
          <div className={styles.info}>
            <h1 className={styles.title}>{championname}</h1>
            <h1 className={styles.subtitle}>{championsubtitle}</h1>
            <p className={styles.lore}>{championlore}</p>
          </div>
        </div>
      </Slide>
      <div className={styles.difficultyclass}>
        <div className={styles.difficulty}>
          <p className={styles.difficultytitle}>Difficulty</p>
          <Image className={styles.difficultyimage} src={difficultyimage} alt={difficultyalt} width={difficultywidth} height={difficultyheight} style={{ margin: difficultymargin }} />
        </div>
        <div className={styles.class}>
          <p className={styles.classtitle}>Class</p>
          <Image className={styles.classimage} src={classimage} alt={classalt} width={classwidth} height={classheight} style={{ margin: classmargin }} />
        </div>
      </div>
      <div className={styles.skills}>
        <p className={styles.skillstitle}>Skills</p>
        <Image className={styles.skill} src={passive} alt={passivealt} width={passivewidth} height={passiveheight} />
        <div className={styles.card}>
          <h1>{passivetitle}</h1>
          <p className={styles.passivedescription}>{passivedescription}</p>
        </div>
        <Image className={styles.skill} src={skill1} alt={skillalt1} width={skillwidth1} height={skillheight1} />
        <div className={styles.card}>
          <h1>{skilltitle1}</h1>
          <p>{skilldescription1}</p>
        </div>
        <Image className={styles.skill} src={skill2} alt={skillalt2} width={skillwidth2} height={skillheight2} />
        <div className={styles.card}>
          <h1>{skilltitle2}</h1>
          <p>{skilldescription2}</p>
        </div>
        <Image className={styles.skill} src={skill3} alt={skillalt3} width={skillwidth3} height={skillheight3} />
        <div className={styles.card}>
          <h1>{skilltitle3}</h1>
          <p>{skilldescription3}</p>
        </div>
        <Image className={styles.skill} src={skill4} alt={skillalt4} width={skillwidth4} height={skillheight4} />
        <div className={styles.card}>
          <h1>{skilltitle4}</h1>
          <p>{skilldescription4}</p>
        </div>
      </div>
    </div>

  )
}