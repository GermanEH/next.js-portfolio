'use server'
 
import { redirect } from 'next/navigation'

type navigate = () => void

const navigate = async () => {
  redirect(`/en`)
}

export default navigate