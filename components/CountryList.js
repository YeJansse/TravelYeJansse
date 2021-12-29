const { useState } = require("react")
const { render } = require("sass")
const { default: SbEditable } = require("storyblok-react")

Import React, { useState } from "react"
Import SbEditable from "storyblok-react"
Import { render } from "storyblok-rich-text-react-renderer"
Import styles from "../styles/CountryList.module.scss"
Import { getAllItems } from "../utils/storyblok"
Import SmallCardList from "./SmallCardList"

const CountryList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  const [items, setItems] = setItems();
  getAllItems('country', locale, sortby).then(
    function (result) {
      setItems(result.data.stories)
    }
  );
  
  return (
    <div className={styles.list}>
      <div>
        {items && items.length > 0 && <SmallCardList items={items}
        type="movie"></SmallCardList>}
      </div>
    </div>
  );

  export default CountryList
