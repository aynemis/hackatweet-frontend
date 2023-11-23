import styles from '../styles/LoginPage.module.css';



function LoginPage() {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img className={styles.img} src="image-login-twitter.jpg" alt="tweet" />
        </div>
        <div className={styles.content}>

        <h1 className={styles.title}>See what's <br />happening</h1>
        <p className={styles.text1}>Join Hackatweet today.</p>

        <button className={styles.btnSignUp}>Sign up</button>
        <p className={styles.text2}>already have an account ?</p>
        <button className={styles.btnSignIn}>Sign in</button>
        </div>
      </div>
    );
   }
   
   export default LoginPage;