import styles from './page.module.css'
import Banner from '@/components/Banner'
import VdoCard from '@/components/VdoCard'

export default function Home() {
  return (
      <main className = {styles.main}>
        <Banner/>
        <VdoCard></VdoCard>
      </main>
  )
}
