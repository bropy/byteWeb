import { useUser } from '../contexts/UserContext'; // Correct import
import Navbar from "../components/layouts/Navbar";
import Form from "../components/add-game/Form";
import Footer from "@/components/layouts/Footer";
import mainStyle from '../styles/MainStyle.module.css';
import Loading from '@/components/layouts/Loading';

export default function UpdateProfile() {
    const { user } = useUser(); // Use custom hook to access user context

    if (!user) {
        return <Loading />; // Handle loading 
    }

    return (
        <div className={mainStyle.style}>
            <Navbar />
            <Form publisherId={user.id} /> {/* Use user.id */}
            <Footer />
        </div>
    );
}
