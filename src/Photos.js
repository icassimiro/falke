import beer1 from "./Images/beer1.jpg";
import beer2 from "./Images/beer2.jpg";
import beer3 from "./Images/beer3.jpg";
import beer4 from "./Images/beer4.jpg";
export default function Photos() {
    return (
        <div className="photo">
            <img src={beer1} className="photoimg"></img>
            <img src={beer2} className="photoimg"></img>
            
            <img src={beer4} className="photoimg"></img>
            <img src={beer3} className="photoimg"></img>
        </div>

    )
}