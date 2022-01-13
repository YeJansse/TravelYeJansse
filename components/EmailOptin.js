import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
{ formstate&&<iframe width="540" height="900" src="https://8fc47476.sibforms.com/serve/MUIEAERzQOBVxyFnHjg4ycj-hGqPkFI-KNo8B7SCdyQmZFDl21D54EOF1PJjXggfKzH5wAmq5B9xz2GkY2fowYpFfRJAKFiSr4uVk0nTLMyZTSJXkNh472W3FdzO3EvCiGyUZ8ZmRoz_NXkdI4FkbqPzlReJsoQg6J0jqP0ptM-vCZk-jI6h2yEZ6odHL3nJtJMKKeOEfV_EETFA" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
    </div>
  );
};

export default EmailOptin;
