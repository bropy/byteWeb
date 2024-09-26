import Navbar from "../components/layouts/Navbar";
import Content from "../components/support/Content";
import Footer from "../components/layouts/Footer";

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