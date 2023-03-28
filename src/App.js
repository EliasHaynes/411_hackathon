import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './styles.module.css'

import Articles from "./Articles";
import SearchBar from "./SearchBar";
import Comments from "./Comments"
import Filter from "./Filter"
import NavBar from "./NavBar"
import Pagination from "./Pagination"
import Settings from "./Settings"


function App() {
  
  useEffect(() => {
    
    axios.get('http://hn.algolia.com/api/v1/items/10')
    //Step2: Grab the response from the api and store it
    .then(res => {
      const theData = res.data
      console.log(theData)
    })
  },[])

  return (
    <div>
      <NavBar />
      <Filter />
      <Articles />
      <Pagination />
    </div>
  );
}

export default App;

//Relationship between Components
  //1. App - Top Dog.
  //2. NavBar - Contains: SearchBar,Settings components. Place NavBar at top of render.
  //3. Pagination - Render in App at bottom.
  //4. Articles - Render in App above Pagination component. Filter component will determine if this or Comments will display or both. Default will be Articles
  //5. Filter - Place this under NavBar. This component will have the most functionality. It will be essentially 3 possible pages. 1 of them being both components. It will have Date/Popularity ordering. And filtering based on timeframes.
  //6. Settings(child Component of NavBar) - I may need a SettingsPage Component for this for when the user clicks on the setting button on the homepage.


//Api Related:
  //1. In the axios request for the GET items. The id parameter so far ive hardcoded with 1 but i will need to make a dynamic id variable to query into there for a dynamic query.
  //2. Looking at the doc there is ways to simplify the sorting that the Filter component will be dealing with. This API has it somewhat in their query

//Components I may need to add:
  // A component for the page when you click on the Article
  // A component for the page when you click on a Comment
  // A component for the page when you click on Settings
  // A component for the page when you click on a user/author
  // A component for the page when you click