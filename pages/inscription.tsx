import Head from 'next/head'
import styles from '../styles/Inscription.module.css'
import photoProfil from '../styles/images/profil.png'

import { useRouter } from 'next/router'

export default function updateProfile() {
  let router= useRouter()
  

  function redirectLogin() {
       router.push('/login')
    }


  return (
    <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo}>JOBZ</div><br></br>
          <form action='/' >
            <label className={styles.label}> Nom </label><br></br>
            <input type="text" className={styles.loginInput} placeholder="Prénom Nom"></input><br></br>
            
            <label className={styles.label}> Email </label><br></br>
            <input type="text" className={styles.loginInput} placeholder="email.adressd@gmail.com"></input><br></br>

            <label className={styles.label}> Identifiant </label><br></br>
            <input type="text" className={styles.loginInput} placeholder="id0123"></input><br></br>
            
            <label className={styles.label}> Mot de passe </label><br></br>
            <input type="password" className={styles.pwdInput} placeholder="Mot de passe"></input><br></br>
                    
            <label className={styles.label}> Confirmation mot de passe </label><br></br>
            <input type="password" className={styles.pwdInput} placeholder="Mot de passe"></input><br></br>
            
            <div className={styles.radioContainer}> 
              <input type="radio"></input>
              <label className={styles.label}>Recruteur</label><br></br>
              <input type="radio" checked></input>
              <label className={styles.label}>Chercheur d'emploi</label><br></br>
            </div>
      
            <div>
              <input type="submit" className={styles.buttonValidate} value="S'inscrire"></input>
              <input type="submit" className={styles.buttonCancel} value="Se connecter" onClick={redirectLogin}></input>
            </div>
            
          </form>

        </div>    
      </div>       
)
}

