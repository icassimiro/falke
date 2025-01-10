import pilsen from "./Images/pilsen.png";
import baron from "./Images/baron.png";
import diamantina from "./Images/diamantina.png";
import hoplager from "./Images/hoplager.png";
import ouropreto from "./Images/ouropreto.png";
import peregrinus from "./Images/peregrinus.png";
import logo from "./Images/logo.png";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Slide() {
    return (
        <div className="fullslide">
            <AutoplaySlider play={true} cancelOnInteraction={false} interval={10000}>
                <div className="divcarousel">

                    <img className="beer" src={pilsen}></img>
                    <div className="slidecolumn">
                        <img className="logo" src={logo}></img>
                        <h2 className="titlebeer">GERMAN PILSEN</h2>
                        <h2 className="subtitle">PILSEN</h2>
                        <h3 className="textbeer">Cerveja puro <strong className="strong">malte</strong>, com lúpulos nobres alemães suave. Apresenta uma <strong className="strong">coloração</strong> amarelo-palha, <strong className="strong">creme</strong> bem formado e com média persistência.</h3>
                        <h4 className="abv">4,5% ABV | 20 IBU</h4>
                    </div>
                </div>
                <div className="divcarousel">
                    <img className="beer" src={baron}></img>
                    <div className="slidecolumn">
                        <img className="logo" src={logo}></img>
                        <h2 className="titlebeer">RED BARON</h2>
                        <h2 className="subtitle">VIENNA LAGER</h2>
                        <h3 className="textbeer">Com <strong className="strong">malte</strong> levemente torrado na própria fábrica, sendo a primeira do estilo no Brasil. <strong className="strong">Coloração</strong> avermelhada e refrescância típica das <strong className="strong">lager</strong>.</h3>
                        <h4 className="abv">4,5% ABV | 20 IBU</h4>
                    </div>
                </div>
                <div className="divcarousel">
                    <img className="beer" src={hoplager}></img>
                    <div className="slidecolumn">
                        <img className="logo" src={logo}></img>
                        <h2 className="titlebeer">HOP LAGER</h2>
                        <h2 className="subtitle">LAGER</h2>
                        <h3 className="textbeer">Leve e refrescante, amargor moderado e baixo teor alcoólico, mas com intenso aroma de lúpulos americanos, trazendo notas cítricas e frutadas.</h3>
                        <h4 className="abv">4,5% ABV | 20 IBU</h4>
                    </div>
                </div>
                <div className="divcarousel">
                    <img className="beer" src={diamantina}></img>
                    <div className="slidecolumn">
                        <img className="logo" src={logo}></img>
                        <h2 className="titlebeer">DIAMANTINA</h2>
                        <h2 className="subtitle">BOHEMIAN PILSNER</h2>
                        <h3 className="textbeer">Coloração amarelo-ouro, corpo médio e espuma de boa formação. Aromas de cereal maltado e sabor equilibrado entre o malte e o lúpulo Saaz.</h3>
                        <h4 className="abv">5,7% ABV | 50 IBU</h4>
                    </div>
                </div>
                <div className="divcarousel">
                    <img className="beer" src={ouropreto}></img>
                    <div className="slidecolumn">
                        <img className="logo" src={logo}></img>
                        <h2 className="titlebeer">OURO PRETO</h2>
                        <h2 className="subtitle">SCHWARZBIER</h2>
                        <h3 className="textbeer">Coloração negro avermelhada, espuma de boa formação e persistente. Aromas de malte torrado e café, corpo médio e sensação de café e cacau.</h3>
                        <h4 className="abv">5,4% ABV | 20 IBU</h4>
                    </div>
                </div>
                <div className="divcarousel">
                    <img className="beer" src={peregrinus}></img>
                    <div className="slidecolumn">
                    <img className="logo" src={logo}></img>
                        <h2 className="titlebeer">PEREGRINUS</h2>
                        <h2 className="subtitle">AMERICAN PALE ALE</h2>
                        <h3 className="textbeer">Cerveja de cor amarelo claro, espuma branca e cremosa. Aroma intenso dos lúpulos americanos, cítricos e frutados. Corpo leve e refrescante.</h3>
                        <h4 className="abv">5,2% ABV | 34 IBU</h4>
                    </div>
                </div>
            </AutoplaySlider>
        </div>
    );
}