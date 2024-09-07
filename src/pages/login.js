import Navbar from "../components/layout/Navbar";
import Form from "@/components/login/Form";

import mainStyle from '../styles/MainStyle.module.css';


export default function Download(){
    return(
        <div className={mainStyle.style}>
            <Navbar/>
            <Form/>
        </div>
    );
}