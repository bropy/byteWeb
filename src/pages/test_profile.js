import Navbar from "../components/layouts/Navbar";
import Content from "../components/test_profile/Content";
import Footer from "../components/layouts/Footer";

import mainStyle from '../styles/MainStyle.module.css';


export default function Test_Profile(){
    return(
        <div className={mainStyle.style}>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    );
}