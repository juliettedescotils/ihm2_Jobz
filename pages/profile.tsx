import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Profile.module.css'
import photoProfil from '../styles/images/profil.png'

import { useRouter } from 'next/router'

export default function updateProfile() {
  let router= useRouter()
  

  function redirectFinal() {
       router.push('/indexFinal')
    }
  function redirectDeconnexion(){
      router.push('/login')
  }


  return (
    <div className={styles.container}>
      <div className={styles.logo}>JOBZ</div><br></br>
        <div className={styles.profileForm}>
            <div>
                <Image src={photoProfil} alt="photo_profil" width={80} height={80}/>
            </div><br></br>

            <div className={styles.form}>
                <form>
                    <label className={styles.label}> Nom </label><br></br>
                    <input type="text" className={styles.input} placeholder="Théo"></input><br></br><br></br>
                    <label className={styles.label}> Description courte </label><br></br>
                    <input type="text" className={styles.input} placeholder='étudiant dynamique et motivé en deuxième année de master informatique et cognition...'></input><br></br><br></br>
                    <label className={styles.label}> Type d'emploi recherché </label><br></br>
                    <select className={styles.input} name="type d'emploi">
                        <option>CDI</option>
                        <option>CDD</option>
                        <option>Stage</option>
                        <option>Alternance</option>
                    </select><br></br><br></br>
                    <label className={styles.label}> Compétences </label><br></br>
                    <input type="text" className={styles.input} placeholder='HTML/CSS, JavaScript, Next.js...'></input><br></br><br></br>
                    <label className={styles.label}> Diplômes obtenus </label><br></br>
                    <input type="text" className={styles.input} placeholder='Master 1 - MIASHS IC, Licence MIASHS...'></input><br></br><br></br>
                    <div>
                        <input type="submit" className={styles.buttonSave} value="Enregistrer" onClick={redirectFinal}></input>
                        <input type="submit" className={styles.buttonCancel} value="Deconnexion" onClick={redirectDeconnexion}></input>
                    </div>
            </form>
            </div>    
        </div>       
    </div>
  )
}

