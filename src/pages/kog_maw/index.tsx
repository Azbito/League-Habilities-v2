import Button from '@/components/Button'
import ChampionInfo from '@/components/ChampionInfo'
import Divider from '@/components/Divider'
import Skins, { SkinsDataProps } from '@/components/Skins'
import { Slide } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/kogmaw.module.scss'

export default function KogMaw() {

  const router = useRouter()

  const skins: SkinsDataProps[] = [
    {
      id: 1,
      skinImage: "/images/KogMaw_1.jpg",
      skinTitle: "Caterpillar Kog'Maw",
      skinAlt: "Caterpillar Kog'Maw",
    },
    {
      id: 2,
      skinImage: "/images/KogMaw_2.jpg",
      skinTitle: "Sonoran Kog'Maw",
      skinAlt: "Sonoran Kog'Maw",
    },
    {
      id: 3,
      skinImage: "/images/KogMaw_3.jpg",
      skinTitle: "Monarch Kog'Maw",
      skinAlt: "Monarch Kog'Maw",
    },
    {
      id: 4,
      skinImage: "/images/KogMaw_4.jpg",
      skinTitle: "Reindeer Kog'Maw",
      skinAlt: "Reindeer Kog'Maw",
    },
    {
      id: 5,
      skinImage: "/images/KogMaw_5.jpg",
      skinTitle: "Lion Dance Kog'Maw",
      skinAlt: "Lion Dance Kog'Maw",
    },
    {
      id: 6,
      skinImage: "/images/KogMaw_6.jpg",
      skinTitle: "Deep Sea Kog'Maw",
      skinAlt: "Deep Sea Kog'Maw",
    },
    {
      id: 7,
      skinImage: "/images/KogMaw_7.jpg",
      skinTitle: "Jurassic Kog'Maw",
      skinAlt: "Jurassic Kog'Maw",
    },
    {
      id: 8,
      skinImage: "/images/KogMaw_8.jpg",
      skinTitle: "Battlecast Kog'Maw",
      skinAlt: "Battlecast Kog'Maw",
    },
    {
      id: 9,
      skinImage: "/images/KogMaw_9.jpg",
      skinTitle: "Pug'Maw",
      skinAlt: "Pug'Maw",
    },
    {
      id: 10,
      skinImage: "/images/KogMaw_10.jpg",
      skinTitle: "Hextech Kog'Maw",
      skinAlt: "Hextech Kog'Maw",
    },
    {
      id: 11,
      skinImage: "/images/KogMaw_11.jpg",
      skinTitle: "Arcanist Kog'Maw",
      skinAlt: "Arcanist Kog'Maw",
    }
    ,
    {
      id: 12,
      skinImage: "/images/KogMaw_12.jpg",
      skinTitle: "Bee'Maw",
      skinAlt: "Bee'Maw",
    },
    {
      id: 13,
      skinImage: "/images/KogMaw_13.jpg",
      skinTitle: "Zap'Maw",
      skinAlt: "Zap'Maw",
    }
  ]

  return (
    <div className={styles.container}>
      <ChampionInfo splashart='/images/kogmaw_splashart.jpg' splashartalt='kogmaw' splashartwidth={600} splashartheight={400} championname="Kog'Maw" championsubtitle="The Mouth Of The Abyss" championlore="Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog’Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it. Though not inherently evil, Kog’Maw’s beguiling naiveté is dangerous, as it often precedes a feeding frenzy—not for sustenance, but to satisfy its unending curiosity." classimage='/images/marksman.png' classalt='marksman' classheight={50} classwidth={50} difficultyimage="/images/kogmawdifficulty.png" difficultyalt='difficulty' difficultyheight={50} difficultywidth={50} difficultymargin="-1.2rem 0 0 0" passive='/images/KogMaw_IcathianSurprise.png' passivealt="Kog'Maw Icathian Surprise" passiveheight={50} passivewidth={50} passivetitle="Icathian Surprise" passivedescription='4 seconds after dying, Kogmaw explodes, dealing true damage to surrounding enemies.' skill1='/images/KogMawQ.png' skillalt1="Kog'Maw Caustic Spittle" skillheight1={50} skillwidth1={50} skilltitle1="Caustic Spittle" skilldescription1="Kog'Maw launches a corrosive projectile which deals magic damage and corrodes the target's armor and magic resist for a short time. Kog'Maw also gains additional attack speed." skill2='/images/KogMawBioArcaneBarrage.png' skillalt2="Kog'Maw Bio Arcane Barrage" skillheight2={50} skillwidth2={50} skilltitle2='Bio Arcane Barrage' skilldescription2="Kog'Maw's attacks gain range and deal a percent of the target's maximum health as magic damage." skill3='/images/KogMawVoidOoze.png' skillalt3="Void Ooze" skillheight3={50} skillwidth3={50} skilltitle3='Void Ooze' skilldescription3="Kog'Maw launches a peculiar ooze which damages all enemies it passes through and leaves a trail which slows enemies who stand on it." skill4='/images/KogMawLivingArtillery.png' skillalt4="Living Artillery" skillwidth4={50} skillheight4={50} skilltitle4="Living Artillery" skilldescription4="Kog'Maw fires an artillery shell at a great distance dealing magic damage (increased significantly on low health enemies) and revealing non-stealthed targets. Additionally, multiple Living Artilleries in a short period of time cause them to cost additional Mana." />


      <Skins skinsData={skins} />

      <div className={styles.end}>
        <Button width='2rem' height='2rem' padding='.7rem' borderRadius='55%'
          title="<"
          onClick={() => router.back()}
          margin="0 0 0 2rem"
        />

        <br />
      </div>
    </div>
  )
}