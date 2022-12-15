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
import imgAtos2 from '../styles/images/atos2.png'
import imgSt from '../styles/images/st.png'
import imgNike from '../styles/images/nike.png'
import imgProfil from '../styles/images/profil.png'


import { useRouter } from 'next/router'

export default function indexAvecAtos() {
  let router= useRouter()
  function redirectInformations() {   router.push('/informations')}
  function redirectMessages(){ router.push('/messages')}
  function redirectProfil(){ router.push('/profile')}
  return (
  <div className={styles.container}>
  <div className={styles.partiegauche}>
    <div className={styles.apropos}>
      <a onClick={redirectProfil} className={styles.photoTheo}>
      <Image className={styles.logoProfil}
        src={imgProfil}
        alt="photo_profil"
        width={40}
        height={40}
      />
      </a>
      <p className={styles.nomUtilisateur}>Théo Guilbavux</p>
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
      <Image
        src={imgAtos2}
        alt=""
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
            src={imgNike}
            alt="photo_cv/recrutement"
            width={180}
            height={100}
          />
        
        
          <h4>Type d'offre :</h4>
          <p>Alternance</p>
          <br />
          <br />
          <h4>Mission :</h4>
          <p>Refonte du site web de Nike</p>
          <br />
          <br />
          <h4>Compétences attendues :</h4>
          <p>Bac +5 minimum domaine informatique + de 10 années d'expérience</p>
          <br />
          <br />
          <p>Disponible début janvier 2023</p>
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


