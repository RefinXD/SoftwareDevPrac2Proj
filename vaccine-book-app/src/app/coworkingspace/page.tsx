import Panel from '@/components/Panel'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  
  return (
    <main>
      <Panel session={session}/>
    </main>
  )
}
