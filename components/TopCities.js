import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/TopCities.module.scss"
import SmallCardList from "./SmallCardList"
import { getData, getFPSData } from "../utils/storyblok"
import { createPortal } from "react-dom"



const TopCities = ({ data, level, locale }) => {


  var content = data;

  const [cities, setCities] = useState([]);
  getFPSData(content._uid, locale, content.preview = false, 'city').then(
    function (result) {
      setCities(result.data.stories);
  });
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.newsitem}>
          <h1 className={styles.title}>
            {content.title}
          </h1>

          {content.short&& <div className={styles.short}>
            {render(content.short)}
          </div>}

          { cities&& cities.length > 0 && <SmallCardList items={cities} title="" type="cities"></SmallCardList>}

        </div>
      </main>
    </SbEditable>
  )
}

export default TopCities
