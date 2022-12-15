import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import imgApple from '../styles/images/apple.png'
import imgAtos from '../styles/images/atos.png'
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
  function redirectInformations() {router.push('/informations')}
  function redirectMessages() {router.push('/messages')}
  function animerAtos() {
    let atos= document.getElementById('imgAtos');
    let start = Date.now(); // mémoriser l'heure de début
    let timer = setInterval(function() {
    // combien de temps s'est écoulé depuis le début ?
      let timePassed = Date.now() - start+250;
      if (timePassed >= 2060) {
        clearInterval(timer); // terminer l'animation après 2 secondes
        if(atos!=null){
          atos.style.visibility='hidden';
          router.push('/indexAvecAtos');
        }
      return;
      }
    // dessiner l'animation à l'instant timePassed
    draw(timePassed);
    }, 20);

    // à mesure que timePassed passe de 0 à 2000
    // left obtient des valeurs de 0px à 400px
    function draw(timePassed: number) {
      if(atos!=null){
        atos.style.top = timePassed / 4.5 + 'px';
        atos.style.right = (timePassed+1000) / 2 + 'px';
      }
    }
  }


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
        <div className={styles.maatch}>
          <div className={styles.infomatch}>
            <Image className={styles.imageAtosMatch}
            src={imgAtos}
            id="imgAtos"
            alt=""
            width={180}
            height={68}
            />
            <h1 className={styles.felicitations}>MATCH !</h1>
            <p>L'annonceur de l'offre que vous avez aimée est aussi interessé par votre profil !</p>
            <p>Vous vous plaisez mutuellement, alors foncez !</p>
            <input type="button" value="Ajouter aux matchs" className={styles.boutonMerci} onClick={animerAtos}></input>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main
