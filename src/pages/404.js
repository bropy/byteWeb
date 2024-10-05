import Link from 'next/link';

import Navbar from "../components/layouts/Navbar";
import Content from "../components/page404/Content";
import Footer from "../components/layouts/Footer";

import mainStyle from '../styles/MainStyle.module.css';


export default function Page404 () {
    return (
        <div className={mainStyle.style}>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    );
};
