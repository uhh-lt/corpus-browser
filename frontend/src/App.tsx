import { InstantSearch, SearchBox, Hits, RefinementList, Configure, Pagination } from 'react-instantsearch'
import { searchClient } from './plugins/SearchKit'
import HitView from './HitView'
import { useState } from 'react'

function App() {
  const [clicked, setClicked] = useState<any | undefined>()

  console.log(clicked)

  return (
    <InstantSearch indexName="teaching" searchClient={searchClient}>
      <Configure hitsPerPage={5} />
      <div style={{display: "flex", flexDirection: "row", gap: "16px", height: "100vh"}}>
        <div style={{width: "10%"}}>
          <b>Tags</b>
          <div style={{height: "1px", width: "50%", backgroundColor: "black", marginBottom: "16px"}}></div>
          <RefinementList attribute="tag" showMore />
        </div>
        <div style={{width: "45%", height: "100%", display: "flex", flexDirection: "column"}}>
            <SearchBox />
            <div style={{overflowY: "auto", flexGrow: 1}}>
              <Hits hitComponent={(props) => <HitView {...props} onClick={(hit: any) => setClicked(hit)} />}/>
            </div>
            <Pagination />
        </div>
        {clicked && (
          <div style={{width: "45%"}} className="ais-Hits">
            <ol className="ais-Hits-list">
              <li className="ais-Hits-item">
                <div>
                  <h2>{clicked.title}</h2>
                  <p>{clicked.tag} - {clicked.url.split("/")[2]} - <a href={clicked.url} target='_blank'>Link to original</a></p>
                </div>  
              </li>
            </ol>
          </div>
        )}
      </div>
    </InstantSearch>

  )
}

export default App
