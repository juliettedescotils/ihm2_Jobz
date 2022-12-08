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
                <label className={styles.label}> Login : </label><br></br>
                <input type="text" className={styles.loginInput} placeholder='Login'></input><br></br><br></br>
                <label className={styles.label}> Password : </label><br></br>
                <input type="text" className={styles.pwdInput} placeholder="Password"></input><br></br><br></br>
                <input type="submit" className={styles.connectButton} value="Connect"></input>
            </form>
        </div>
        <div className={styles.logo}>JOBZ</div>
        <div className={styles.slogan}>C'est ici que tout commence</div>
        
    </div>



/*  <div className={styles.container}>
    
 </div> <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"></br>
  <label for="lname">Last name:</label></br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  </form> 
  <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
</div></br> */
  
)
}

