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
import imgLocal from '../styles/images/localisation.png'
import imgSt from '../styles/images/st.png'
import imgProfil from '../styles/images/profil.png'


import { useRouter } from 'next/router'

function Main() {
  let router= useRouter()
  function redirectInformations() {   router.push('/informations')}
  function redirectMessages(){ router.push('/messages')}
  function animerCoeur(){let start = Date.now(); // mémoriser l'heure de début
  let coeur= document.getElementById('coeur');
  let timer = setInterval(function() {
    // combien de temps s'est écoulé depuis le début ?
    let timePassed = Date.now() - start+200;
  
    if (timePassed >= 2000) {
      clearInterval(timer); // terminer l'animation après 2 secondes
      if(coeur!=null){
        coeur.style.visibility='hidden';
        router.push('/match');
      }
      return;
    }
  
    // dessiner l'animation à l'instant timePassed
    draw(timePassed);
    
  
  }, 20);
  

  
  // à mesure que timePassed passe de 0 à 2000
  // left obtient des valeurs de 0px à 400px
  function draw(timePassed: number) {
    
    if(coeur!=null){
      coeur.style.bottom = timePassed / 5 + 'px';
      coeur.style.opacity = 1/(timePassed/400) + '';
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
      <div className={styles.imageLikeable}>
      <div className={styles.descriptionComplete}>
        <Image className={styles.imageAtos}
            src={imgAtos}
            alt="photo_cv/recrutement"
            width={180}
            height={68}
          />
          
        
        
          
          <p>Bienvenue chez Atos, où nous imaginons le futur de la tech.

Leader international du numérique sécurisé et décarboné, Atos contribue à façonner les nouvelles technologies avec ses clients. Nos 112 000 collaborateurs travaillent avec des entreprises et des organisations dans le monde entier sur des projets passionnants et de grandes envergures.</p>
          <h4>Votre mission :</h4>
          <p>Assurer la maintenance de la base de données du personnel</p>
          <h4>Compétences attendues :</h4>
          <p>Bac +3 minimum ou équivalent avec minimum 2 ans d’expérience. Tu es motivé(e), et passionné(e), et impatient(e) d’apporter tes compétences et d’en acquérir de nouvelles ? Rejoins-nous ! </p>
          <p>Le stage est à pourvoir à partir de janvier 2023 pour une durée de 5 mois minimum, avec possibilité d'embauche à la clé.</p>
          <p> <Image className={styles.imageAtos}
            src={imgLocal}
            alt="photo_cv/recrutement"
            width={30}
            height={30}
          />
          Phalempin (59)
          </p>
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
          <a onClick={animerCoeur} >
          <Image className={styles.boutonLike} id="coeur"
            src={imgCoeur}
            alt="liker"
            width={60}
            height={60}
          />
          </a>
          <a onClick={redirectInformations} className={styles.boutonInfoInfo}>
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
