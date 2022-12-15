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
import imgNike from '../styles/images/nike.png'
import imgSt from '../styles/images/st.png'
import imgProfil from '../styles/images/profil.png'


import { useRouter } from 'next/router'

function Main() {
  let router= useRouter()
  function redirect() {   router.push('/test')}
  function redirectMatchs(){ router.push('/')}
  function redirectConversationSt(){ router.push('/conversationSt')}

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
        <a onClick={redirectMatchs} className={styles.matchDansMessages}>Matchs</a>
        <a className={styles.messagesDansMessages}>Messages</a>
        
      </div>

      <div className={styles.messagesGroup}>
        <div className = {styles.st} onClick={redirectConversationSt}>
            <Image className = {styles.imageSt}
            src={imgSt}
            alt=""
            width={60}
            height={60}
            />
            <div className = {styles.mess}>
                <h1>St Microelectronics</h1>
                <p>Eux : Votre profil nous intéresse, pouvez-vous nous faire part de votre cv ainsi que...</p>
            </div>
        </div>
        <div className = {styles.hp}>
            <Image className = {styles.imageHp}
            src={imgHp}
            alt=""
            width={60}
            height={60}
            />
            <div className = {styles.mess}>
            <h1>Hewlett-Packard</h1>
            <p>Vous : Merci de votre réponse, à bientôt j’espère.</p>
            </div>
        </div>
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
