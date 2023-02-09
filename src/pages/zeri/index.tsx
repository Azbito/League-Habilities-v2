import Button from '@/components/Button'
import ChampionInfo from '@/components/ChampionInfo'
import Skins, { SkinsDataProps } from '@/components/Skins'
import { useRouter } from 'next/router'
import styles from '../../styles/zeri.module.scss'

export default function Zeri() {
  const router = useRouter();

  const skins: SkinsDataProps[] = [
    {
      id: 1,
      skinImage: "/images/Zeri_1.jpg",
      skinTitle: "Withered Rose Zeri",
      skinAlt: "Withered Rose Zeri",
    },
    {
      id: 2,
      skinImage: "/images/Zeri_2.jpg",
      skinTitle: "Ocean Song Zeri",
      skinAlt: "Ocean Song Zeri",
    }]

  return (
    <div className={styles.container}>
      <ChampionInfo
        splashart='/images/Zeri_0.jpg'
        splashartalt='kogmaw'
        splashartwidth={700}
        splashartheight={400}
        championname="Zeri"
        championsubtitle="The Spark of Zaun"
        championlore="A headstrong, spirited young woman from Zaun's working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life. Deeply compassionate toward others, Zeri carries the love of her family and her home into every fight. Though her eagerness to help can sometimes backfire, Zeri believes one truth to be certain: stand up for your community, and it will stand up with you."
        classimage='/images/marksman.png'
        classalt='marksman'
        classheight={50}
        classwidth={50}
        difficultyimage="/images/difficultyNormal.png"
        difficultyalt='difficulty'
        difficultyheight={50}
        difficultywidth={50}
        difficultymargin="-1.2rem 0 0 0"
        passive='/images/ZeriP.png'
        passivealt="Living Battery"
        passiveheight={50}
        passivewidth={50}
        passivetitle="Living Bqattery"
        passivedescription='Zeri gains Move Speed whenever she receives a shield. When she damages an enemy shield she absorbs its energy, shielding herself.'
        skill1='/images/ZeriQ.png'
        skillalt1="Burst Fire"
        skillheight1={50}
        skillwidth1={50}
        skilltitle1="Burst Fire"
        skilldescription1="Zeri's Attacks are treated as Abilities and Burst Fire is treated as an Attack. Moving and casting Burst Fire stores up energy in Zeri's Sparkpack. When fully charged her next Attack will slow and deal bonus damage. Burst Fire shoots a burst of 7 rounds that deal attack damage to the first enemy hit."
        skill2='/images/ZeriW.png'
        skillalt2="Ultrashock Laser"
        skillheight2={50}
        skillwidth2={50}
        skilltitle2='Ultrashock Laser'
        skilldescription2="Zeri fires an electric pulse that slows and damages the first enemy hit. If the pulse hits a wall it expands into a long range laser."
        skill3='/images/ZeriE.png'
        skillalt3="Spark Surge"
        skillheight3={50}
        skillwidth3={50}
        skilltitle3='Spark Surge'
        skilldescription3="Zeri dashes a short distance and energizes her next 3 shots of Burst Fire, causing them to pierce through enemies. She will vault and grind over any terrain she touches."
        skill4='/images/ZeriR.png'
        skillalt4="Lightning Crash"
        skillwidth4={50}
        skillheight4={50}
        skilltitle4="Lightning Crash"
        skilldescription4="Zeri discharges a nova of electricity and overcharges herself, gaining increased damage and stacking Move Speed that refreshes and gets stronger every time she hits an enemy champion. While overcharged, Burst fire becomes a faster triple shot that chains lightning between enemies." />

      <Skins skinsData={skins} />

      <div className={styles.end}>
        <Button width='2rem' height='2rem' padding='.7rem' borderRadius='55%'
          title="<"
          onClick={() => router.back()}
          margin="0 0 0 2rem"
        />
      </div>
      <br />
    </div>
  )
}