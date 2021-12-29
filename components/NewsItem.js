import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/NewsItem.module.scss"
import SmallCardList from "./SmallCardList"



const NewsItem = ({ data, level }) => {
  var movies = [];
  var personalities = [];
  var countries = [];
  //enriching data
  if (level === 'data') {
    var content = data.story.content;
    movies = data.rels.filter(obj => {
      return content.movies.includes(obj.uuid);
    });
    personalities = data.rels.filter(obj => {
      return content.personalities.includes(obj.uuid);
    });
    countries = data.rels.filter(obj => {
      return content.countries.includes(obj.uuid);
    });
  } else {
    var content = data;
  }
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.newsitem}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.article}>
            {render(content.article)}
          </div>
          {movies && movies.length > 0 && <SmallCardList items={movies} title="Related movies" type="movie"></SmallCardList>}
          {personalities && personalities.length > 0 && <SmallCardList items={personalities} title="Related personalities" type="personality"></SmallCardList>}
          {countries && countries.length > 0 && <SmallCardList items={countries} title="Related countries" type="country"></SmallCardList>}
      
        </div>
      </main>
    </SbEditable>
  )
}

export default NewsItem
