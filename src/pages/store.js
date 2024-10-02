import Navbar from "../components/layouts/Navbar2";
import Content from "../components/store/Content";
import Footer from "../components/layouts/Footer";

import mainStyle from '../styles/MainStyle.module.css';


export default function Store(){
    return(
        <div className={mainStyle.style}>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    );
}