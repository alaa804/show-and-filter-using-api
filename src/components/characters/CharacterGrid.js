import React from 'react'
import Spinner from '../Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({  items , isloading }) => {
    return isloading ? <Spinner />   : (
         <section className="cards">
             { items.map((item) => (
                  <CharacterItem key={item.char_id}  item={item}  />
             ))  }
         </section>
     ) 

    
}

export default CharacterGrid
