import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

import { useRouter } from 'next/router'

export default function Login() {
  let router= useRouter()
  

  function redirect() {
       router.push('/index')
    }


  return (
    <div className={styles.container}>
        <div className={styles.loginBox}>
            
            <form action='/'>
                <label className={styles.label}> Identifiant : </label><br></br>
                <input type="text" className={styles.loginInput} placeholder='Identifiant'></input><br></br><br></br>
                <label className={styles.label}> Mot de passe : </label><br></br>
                <input type="password" className={styles.pwdInput} placeholder="Mot de passe"></input><br></br><br></br>
                <input type="submit" className={styles.connectButton} value="Connexion"></input>
            </form>
        </div>
        <div className={styles.logo}>JOBZ</div>
        <div className={styles.slogan}>C'est ici que tout commence</div>
        
    </div>  
)
}

