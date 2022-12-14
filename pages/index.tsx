import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import imgApple from '../styles/images/apple.png'
import imgAtos from '../styles/images/atos.png'
// import imgProfile from '../styles/images/bonhomme_bleu.jfif'
import imgCoeur from '../styles/images/coeur.png'
import imgCroix from '../styles/images/croix.png'
import imgFacebook from '../styles/images/facebook.png'
import imgFramboise from '../styles/images/framboise.png'
import imgGoogle from '../styles/images/google.png'
import imgHp from '../styles/images/hp.png'
import imgInfos from '../styles/images/information.png'
import imgLocalisation from '../styles/images/balance.png'
import imgRetour from '../styles/images/retour_arriere.png'
import imgSpaceX from '../styles/images/spacex.png'
import imgSt from '../styles/images/st.png'
import imgProfil from '../styles/images/profil.png'


import { useRouter } from 'next/router'

function Main() {
  let router= useRouter()
  function redirectInformations() {   router.push('/informations')}
  function redirectMessages(){ router.push('/messages')}
  return (
  <div className={styles.container}>
  <div className={styles.partiegauche}>
    <div className={styles.apropos}>
      <Image className={styles.logoProfil}
        src={imgProfil}
        alt="photo_profil"
        width={40}
        height={40}
      />
      <p className={styles.nomUtilisateur}>Théo</p>
      <Image
        src={imgFramboise}
        alt="fruit_tuilisateur"
        width={40}
        height={40}
      />
      
    </div>

    <div className={styles.contenu}>
      <div className={styles.matchmessages}>
        <div className={styles.match}>Matchs</div>
        <a onClick={redirectMessages} className={styles.messages}>Messages</a>
        
      </div>

      <div className={styles.images}>
      <Image
        src={imgHp}
        alt="logo_apple"
        width={180}
        height={180}
      />
      <Image
        src={imgGoogle}
        alt="logo_google"
        width={180}
        height={180}
      />
      <Image
        src={imgFacebook}
        alt="logo_facebook"
        width={180}
        height={180}
      />
      <Image
        src={imgSt}
        alt="logo_spaceX"
        width={180}
        height={180}
      />
      </div>

      <div className={styles.logobas}>
        <h1>JOBZ</h1>
      </div>
    </div>

    

    
  </div>

  <div className={styles.partiedroite}>
    <div className={styles.contenuDroite}>
      <div className={styles.imageLikeable}>
      <div className={styles.descriptionRapide}>
        <Image className={styles.imageAtos}
            src={imgAtos}
            alt="photo_cv/recrutement"
            width={180}
            height={68}
          />
        
        
          <h4>Type d'offre :</h4>
          <p>Stage</p>
          <br />
          <br />
          <h4>Mission :</h4>
          <p>Maintenance de la base de données</p>
          <br />
          <br />
          <h4>Compétences attendues :</h4>
          <p>Bac +3 minimum domaine informatique, connaissances en Oracle</p>
          <br />
          <br />
          <p>Durée : 5 mois, disponible début janvier 2023</p>
        </div>
        </div>
        
        <div className={styles.actions}>
        <Image
            src={imgRetour}
            alt="retour_arriere"
            width={60}
            height={60}
          />
          <Image
            src={imgCroix}
            alt="refuser"
            width={60}
            height={60}
          />
          <Image
            src={imgCoeur}
            alt="liker"
            width={60}
            height={60}
          />
          <a onClick={redirectInformations}>
          <Image 
            src={imgInfos}
            alt="voir_infos"
            width={60}
            height={60}
          />
          </a>
        </div>
    </div>
  </div>
  </div>
  
  

)
}

export default Main
