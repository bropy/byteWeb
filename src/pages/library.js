import Navbar from "../components/layouts/Navbar";
import Content from "../components/library/Content";
import Footer from "@/components/layouts/Footer";

import MainStyle from '../styles/MainStyle.module.css';


export default function Library(){
    return(
        <div className={MainStyle.style}>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    );
}