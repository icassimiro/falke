import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

export default function Info() {
    return (
        <div className="divinfo">
            <AiFillInstagram className="insta" />
            <FaFacebookSquare className="face" />
            <AiFillTikTok className="wpp" />
            <RiWhatsappFill className="wpp" />
           
            
        </div>)
}