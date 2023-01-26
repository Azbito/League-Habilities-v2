import Divider from '@/components/Divider'
import Emotes from '@/components/Emotes'
import End from '@/components/End'
import EventPass from '@/components/EventPass'
import Icons from '@/components/Icons'
import Items from '@/components/Items'
import Miscellaneous from '@/components/Miscellaneous'
import Prestige from '@/components/Prestige'
import ReleaseImage from '@/components/ReleaseImage'
import Rewards from '@/components/Rewards'
import Table from '@/components/Table'
import miscellaneous from '@/utils/miscellaneousData'
import styles from '../../styles/release.module.scss'

export default function Release() {
  return (
    <div className={styles.container}>

      <ReleaseImage releaseimage='/images/release.jpg' releaseimgalt='Garen' />
      <Prestige title="New Prestige Skin!" description='She left Shurima to battle as a Mythmaker. You can play as Prestige Mythmaker Sivir Skin on League of Legends by getting the pass on the game. With 2,000 event tokens, you are able to purchase it.' splashart='/images/sivir.jpg' alt="Prestige skin" height="18rem" width="30rem" borderRadius='1rem' margin='3rem 4rem 0 0' />


      <Divider />

      <EventPass title='Lunar Pass 2023' passimg='/images/lunar-pass.png' altpassimg='pass' description='While the Mythmaker and Lunar Revel missions are open to all, those looking to hop into the new year with both feet can purchase the LoL Lunar Revel 2023 Pass for 1650 RP, which will instantly unlock 200 Lunar Revel Tokens and 4 Mythmaker Orbs at Milestone 0. Better yet, the pass will grant you access to premium LoL Lunar Revel 2023 Pass rewards.' />

      <Rewards title='Pass Rewards' description='As you play matches, you get experience points to get more milestones.' strong='Each Milestone takes 400 LoL Event XP to unlock.' />

      <Table />

      <Emotes emote1='/images/lantern-release-emote.png' emotetitle1='Lantern Release' emote2='/images/lucky-wink-emote.png' emotetitle2='Lucky Wink Emote' emote3='/images/opera-hands-emote.png' emotetitle3='Opera Hands' emote4='/images/tea-sip-emote.png' emotetitle4='Tea Sip' />

      <Icons icon='/images/mythmaker-bunny-icon.png' borderRadius='1rem' height='7rem' title="Mythmaker Bunny Icon" />

      <Items image1='/images/mythmaker-orb.png' alt1="Orb" image2='/images/mythmaker-exclusive-pack.png' alt2="pack" image3="/images/mythmaker-grab-bag.png" alt3="Grab Bag" image4='/images/lunar-emperor-orb.png' alt4="Orb" image5="/images/lunar-empress-grab-bag.png" alt5='Grab Bag' image6='/images/lunar-guardian-exclusive-pack.png' alt6="Pack" />

      <Miscellaneous img="/images/mythic-essence-icon.png" alt="Mythic Essence" data={miscellaneous} />

      <End />
    </div>
  )
}