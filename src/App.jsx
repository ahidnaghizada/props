
import './App.css'
import Mas from './components/Mas'
import Num from './components/Num'
      

function App() {


  return (
    <>
      <h1>suret-mesafe-zaman</h1>
      <Num suret={5} mesafe={2}/>
      <h1>maas</h1>
      <Mas alinan={100} faiz={20}/>
    </>
  )
}

export default App
