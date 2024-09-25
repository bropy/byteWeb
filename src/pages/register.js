import Navbar from "../components/layouts/Navbar";
import Form from "@/components/register/Form";

import mainStyle from '../styles/MainStyle.module.css';


export default function Register(){
    return(
        <div className={mainStyle.style}>
            <Navbar/>
            <Form/>
        </div>
    );
}