import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import mypic from '../styles/images/balance.png'

export default function pagetest() {
  return (
    <Image
    src={mypic}
    alt="logo_theo"
    width={500}
    height={500}
  />
  

)
}

