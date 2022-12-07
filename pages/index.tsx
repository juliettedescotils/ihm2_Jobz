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

import { useRouter } from 'next/router'

function Main() {
  let router= useRouter()
  function redirect() {   router.push('/test')}
  return (
  <div className={styles.container}>
  <div className={styles.partiegauche}>
    <div className={styles.apropos}>
      <Image
        src={imgInfos}
        alt="photo_profil"
        width={40}
        height={40}
      />
      <p className={styles.nomUtilisateur}>ThÃ©o</p>
      <Image
        src={imgFramboise}
        alt="fruit_tuilisateur"
        width={40}
        height={40}
      />
      
    </div>

    <div className={styles.contenu}>
      <div className={styles.matchmessages}>
        <p className={styles.match}>Matchs</p>
        <p className={styles.messages}>Messages</p>
        
      </div>

      <div className={styles.images}>
      <Image
        src={imgApple}
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
        src={imgSpaceX}
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
      <a onClick={redirect} className={styles.imageLikeable}>
        <Image
            src={imgInfos}
            alt="photo_cv/recrutement"
            width={180}
            height={180}
          />
        </a>
        
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
          <Image
            src={imgInfos}
            alt="voir_infos"
            width={60}
            height={60}
          />
        </div>
    </div>
  </div>
  </div>
  
  

)
}

export default Main