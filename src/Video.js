import Falke from "./Images/Falke.mp4";
import logo from "./Images/logo.png";
import falkeimg from "./Images/falkeimg.png";

export default function Video() {
    return (
        <div className="videodiv">
            
            <div className="divtextbackground">
                

                <div className="divlogo">
                    <img className="logoimg" src={falkeimg}></img>
                </div>
                <div className="divtitle">
                    <h2 className="titlebackground">Cervejaria Falke Bier<hr className="hrr"></hr></h2>
                </div>
                <div className="divsubtitle">
                    <h3 className="subtitleh">Bem-vindo à Falke Bier, onde cada gole é uma viagem ao mundo da cerveja artesanal. Aqui, combinamos ingredientes selecionados, métodos tradicionais e a paixão de mestres cervejeiros para criar sabores únicos que despertam os sentidos!</h3>
                </div>
             


            </div>
           
            <video
                className="video"
                controls={false}
                autoPlay={true}
                loop={true}
                playsInline
                muted src={Falke}>
                
            </video>

        </div>)
}
