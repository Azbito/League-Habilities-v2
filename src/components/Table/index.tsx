import { rewardsInterface } from "@/@types/rewardsInterface";
import styles from './table.module.scss'
import infos from "./data";

export default function Table() {
  return (
    <center>

      <table className={styles.table}>
        <thead>
          <tr className={styles.title}>
            <th>Milestone</th>
            <th>Tokens</th>
            <th>Rewards</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((item: rewardsInterface, index: number) => (
            <tr key={item.id} className={index % 2 == 0 ? styles.even : styles.odd}>
              <td className={styles.tableinfo}>{index}</td>
              <td className={styles.tableinfo}>{item.tokens}</td>
              <td className={styles.tableinfo}>{item.rewards}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </center>
  )
}