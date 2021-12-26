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
{ formstate&&<iframe width="540" height="305" src="https://8fc47476.sibforms.com/serve/MUIEAHBHnOLZ5rfcpxFqTeTA_JervZkd8LiU4Acm9l81slR030o_rqWNlz51j4wQpZ7F2RlPZSgx63djMLIp0e4GQVlI5hhTdQ3vejD5x2_NcGgvNT0B1L9NKBTuaCf_Zv3hsS0Sg5Z6cYZeZX98xL_mTZJJcQoEnlLSPuLGXHaA48xqyxle2PuazBSC6QwQ5wYpbeDvHmhAVrlA" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
    </div>
  );
};

export default EmailOptin;
