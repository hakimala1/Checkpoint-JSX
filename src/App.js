
import './App.css';
import image from "./imageInSrc.jpg"
import video from "./maVidéo.mp4"
import './style.css'
import { Image } from 'react-bootstrap';
import Nav from './Component/Entete'
function App() {
  return (
    <div className="App">
      <Nav/>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}} >
      <h1 class="title red">Hakim Ala Eddine</h1>
      
      <div className="box">
      <Image src={image} alt ='myImage'rounded/><br/>
      <Image src="/imageInPublic.jpg" alt ='myImage' rounded />
      </div>
      <video width="800" height="240" controls>

        <source src={video} type="video/mp4" />

        </video>

        </div>
    </div>
  );
}

export default App;
