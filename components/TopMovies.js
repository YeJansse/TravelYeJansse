// import React, { useState } from "react"
// import SbEditable from "storyblok-react"
// import { render } from "storyblok-rich-text-react-renderer"
// import styles from "../styles/TopMovies.module.scss"
// import SmallCardList from "./SmallCardList"
// import { getData, getFPSData } from "../utils/storyblok"
// import { createPortal } from "react-dom"



// const TopMovies = ({ data, level, locale }) => {


//   var content = data;

//   const [movies, setMovies] = useState([]);
//   getFPSData(content._uid, locale, content.preview = false, 'movie').then(
//     function (result) {
//       setMovies(result.data.stories);
//   });
//   //returning the HTML
//   return (
//     <SbEditable content={content} key={content._uid}>
//       <main>
//         {/* <div className={[styles.movie, styles.test].join(' ')}> */}
//         <div className={styles.newsitem}>
//           <h1 className={styles.title}>
//             {content.title}
//           </h1>

//           {content.short&& <div className={styles.short}>
//             {render(content.short)}
//           </div>}

//           {movies && movies.length > 0 && <SmallCardList items={movies} title="" type="movie"></SmallCardList>}

//         </div>
//       </main>
//     </SbEditable>
//   )
// }

// export default TopMovies
