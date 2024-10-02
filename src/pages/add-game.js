import Navbar from "../components/layouts/Navbar";
import Form from "../components/add-game/Form";
import Footer from "@/components/layouts/Footer";

import mainStyle from '../styles/MainStyle.module.css';


export default function AddGame(){
    return(
        <div className={mainStyle.style}>
            <Navbar />
            <Form/>
            <Footer/>
        </div>
    );
}