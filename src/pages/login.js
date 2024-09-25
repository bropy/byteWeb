import Navbar from "../components/layouts/Navbar";
import Form from "@/components/login/Form";

import mainStyle from '../styles/MainStyle.module.css';


export default function Login(){
    return(
        <div className={mainStyle.style}>
            <Navbar/>
            <Form/>
        </div>
    );
}