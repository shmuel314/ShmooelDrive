
import './App.css';
import Layout from './components/Layout';

function App() {
  // const folders = {
    
  //     root: {
  //       Fantazy: {
  //         Harry_Potter: {1:{A:"a"},2:{B:"b"}},
  //         Narniya: {3:{C:"c"},4:{D:"d"}},
  //       },
  //       doku: {
  //         Ben_gurion: {5:{E:"e"},6:{F:"f"}},
  //         Begin: {7:{G:"g"},8:{H:"h"}}
  //       },
  //       cook: {
  //         cakes: {8:{I:"i"},9:{J:"j"}},
  //         cookies: {10:{K:"k"},11:{L:"l"}}
  //       }
  //     }
    
  // }
  // console.log(folders);
  return (
    <div className="App">   
      {/* {Object.keys(folders.root.Fantazy.Harry_Potter).map(key=>{
        return(
          <>
           <div className="folder">{key}</div>
          </>
        )
      })}  */}

      <Layout/>
    </div>
  );
}

export default App;
