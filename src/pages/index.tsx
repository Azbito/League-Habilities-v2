import { summonerProps } from "@/@types/summonerinterface";
import { topChampionProps } from "@/@types/topChampionInterface";
import AdBox from "@/components/AdBox";
import ChampionCard from "@/components/ChampionCard";
import Divider from "@/components/Divider";
import End from "@/components/End";
import FocusRelease from "@/components/FocusNews";
import InfoBox from "@/components/Infobox";
import News from "@/components/News";
import SearchCard from "@/components/SearchCard";
import { getChampionById } from "@/services/apiChampionId";
import { getSummonersName } from "@/services/apisummoner";
import { getTopChampion } from "@/services/apitopchampion";
import { Slide } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/home.module.scss"

// client side

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [info, setInfo] = useState<summonerProps>({
    accountId: '',
    id: '',
    name: '',
    profileIconId: 0,
    puuid: '',
    revisionDate: 0,
    summonerLevel: ''
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [championName, setChampionName] = useState<string>('')

  async function getSummonerId() {
    setIsLoading(true)
    try {
      const res: summonerProps = await getSummonersName(name)
      const resTopChampion: topChampionProps[] = await getTopChampion(res.id)
      const resChampion: any = await getChampionById(resTopChampion[0].championId)
      setInfo(res)
      setChampionName(resChampion.response)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      alert("Error")
    }

  }

  return (
    <div className={styles.content}>
      <div className={styles.banner}>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={styles.title}>Welcome to Summoner's Lobby</h1>
            <p className={styles.description}>Here, you can find stuffs about League of Legends and also tips about your favorite champion!</p>
          </div>
        </Slide>
      </div>

      <AdBox description="If you are interested to play League of Legends, you can download it in the official website by clicking" strong="here" image="/images/link.png" alt="link" linkto="https://www.leagueoflegends.com/" backgroundColor="#702c2c" width="40rem" height="5rem" />

      <Divider />

      <div className={styles.championnews}>

        <ChampionCard margin="7rem 0 0 3rem" title="Time to feast!" image="/images/kogmaw.jpg" alt="Kog'Maw" description="Void's creature is getting hungry. Take care in Runeterra!"
          buttonProps={{
            title: "Check it out!",
            margin: "1rem 0 0 0",
            onClick: () => router.push('/kog_maw')
          }}

        />

        <FocusRelease title="Celebrate Chinese New Year!" image="/images/thresh.jpg" alt="thresh new skin" width={220} height={400} description="Enjoy with our mythmakers the festival and battle with 'em" margin="0"
          buttonProps={{
            title: "Join them",
            margin: "1rem 0 0 0",
            onClick: () => router.push('/release')

          }} />

        <ChampionCard margin="7rem 3rem 0 0" title="Energize yourself!" image="/images/zeri.jpg" alt="Zeri" description="Don't you dare to steal her thunder"
          buttonProps={{
            title: "Check it out!",
            margin: "1rem 0 0 0"
          }} />

      </div>

      <Divider />

      <div className={styles.container}>
        <SearchCard
          title="Searching Summoners"

          inputProps={{
            value: name,
            onChange: e => setName(e.target.value),
            placeholder: "Insert a nickname"
          }}
          buttonProps={{
            title: "Search",
            onClick: () => !isLoading ? getSummonerId() : {},
            isLoading: isLoading
          }}

          image={info.profileIconId != 0 && `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${info.profileIconId}.png`}
          alt="Summoner's icon"
          imageMargin="1.5rem 0 .8rem 0"
          imageWidth={70}
          imageHeight={70}
          borderRadius=".8rem"

          summonerName={info.name}
          summonerLevel={info.summonerLevel}

          championPicture={championName && `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}.png`}
          championPictureAlt="Most played champion"
          championPictureMargin="1rem 0 0 0"
          championPictureHeight={50}
          championPictureWidth={50}
          championPictureBorderRadius="5px"
        />

        <InfoBox image="/images/star.png" alt="star" title="Give us a feedback!" description="We appreciate you visiting our website so far! Give us a feedback, so we will be able to improve it and host a better website for you. Click me!" margin="4rem 0 0 0" />

      </div>

      <Divider />

      <News image="/images/newspaper.png" alt="newspaper" title="Extry! Extry!" description="Stay tuned. Riot always publish new updates. Check it out before you get nerfed!" strong="Click here to go to Riot site" linkimage="/images/link.png" linkalt="link" linkto="https://www.leagueoflegends.com/en-us/news/tags/patch-notes/" patchimage="/images/patch.jpg" patchalt="patch_note_lol_riot_games" />

    </div>
  )
}
