import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const[punkListData, setPunkListData] = useState([])
  const[selectedPunk , setSelectedPunk] = useState(0)

  useEffect(() => {
      const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x7634544d3357D4fFC22Ad1d4D760b287Da789af7&order_direction=asc') 
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  } , [])
  
  return(
  <div className='app'>
       <Header/>
       {
         
         punkListData.length > 0 && ( 
          <>
         <Main punkListData={punkListData} selectedPunk={selectedPunk} />
         <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
         </>
         )
       }
       {/* <CollectionCard 
       id={0} name={'Bandana Punk'} 
       traits={[{'value':7}]} 
       image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'
       /> 
       <Main punkListData={punkListData} />
       <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} /> */}
  </div>
 )
}

export default App;
