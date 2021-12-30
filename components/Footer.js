import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="/Travel.png"
            alt="IMDBPlus Logo"
            width="300" height=""
            className="" 
          />
        </div>
        <p>Travel good, travel with Travel+</p>
      </div>
    </footer>



  )
}

export default Footer
