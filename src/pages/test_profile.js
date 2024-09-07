import Navbar from "../components/layout/Navbar";
import Content from "../components/test_profile/Content";
import Footer from "@/components/layout/Footer";

import MainStyle from '../styles/MainStyle.module.css';

export default function Test_Profile(){
    return(
        <div className={MainStyle.style}>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    );
}