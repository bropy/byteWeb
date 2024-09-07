import Navbar from "../components/layout/Navbar";
import Content from "../components/support/Content";
import Footer from "@/components/layout/Footer";

import MainStyle from '../styles/MainStyle.module.css';


export default function Support(){
    return(
        <div className={MainStyle.style}>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    );
}