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
import imgEnvoyer from '../styles/images/envoyer.png'
import imgSt from '../styles/images/st.png'
import imgProfil from '../styles/images/profil.png'


import { useRouter } from 'next/router'

function Main() {
  let router= useRouter()
  function redirect() {   router.push('/test')}
  function redirectMatchs(){ router.push('/')}
  function redirectConversationSt(){ router.push('/conversationSt')}
  function redirectModifier(){router.push('/profile')}

  return (
  <div className={styles.container}>
  <div className={styles.partiegauche}>
    <div className={styles.apropos}>
      <a onClick={redirectModifier} className={styles.photoTheo}>
      <Image className={styles.logoProfil}
        src={imgProfil}
        alt="photo_profil"
        
        width={40}
        height={40}
      />
      </a>
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
        <div className={styles.conversation}>
        <div className = {styles.stPrincipale} onClick={redirectConversationSt}>
                <Image className = {styles.imageSt}
                src={imgSt}
                alt=""
                width={60}
                height={60}
                />
                <div className = {styles.messageSt}>
                    <h1>St Microelectronics</h1>
                    <p>Bonjour, <br></br>Votre profil nous intéresse, pouvez-vous nous faire part de votre cv ainsi que d'une lettre témoignant la motivation que vous portez envers notre entreprise ? Cordialement, Eric Bogniet - Directeur des Ressources Humaines</p>
                </div>
            </div>
            <div className = {styles.ecrire}>
            <Image className = {styles.imageMoiRep}
                src={imgProfil}
                alt=""
                width={45}
                height={45}
                />
            <input type="text" placeholder='Répondre...'></input>
            <Image className = {styles.imageRepEnvoyer}
                src={imgEnvoyer}
                alt=""
                width={30}
                height={30}
                />

            </div>
            </div>
        </div>
    </div>
  </div>
  
  

)
}

export default Main
