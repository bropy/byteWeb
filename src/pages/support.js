import Navbar from "../components/layouts/Navbar";
import Content from "../components/support/Content";
import Footer from "../components/layouts/Footer";

import mainStyle from '../styles/MainStyle.module.css';


export default function Support(){
    return(
        <div className={mainStyle.style}>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    );
}