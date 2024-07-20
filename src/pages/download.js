import Footer from "@/components/layout/Footer";
import TestDownload from "../components/download/TestDownload";
import Navbar from "../components/layout/Navbar";

export default function Download(){
    return(
        <div>
            <Navbar />
            <TestDownload />
            <Footer/>
        </div>
    );
}