import { useUser } from '../contexts/UserContext'; // Correct import
import Navbar from "../components/layouts/Navbar";
import Form from "../components/add-media/Form"; // Make sure Form is your AddScreenshotForm
import Footer from "@/components/layouts/Footer";
import mainStyle from '../styles/MainStyle.module.css';
import Loading from '@/components/layouts/Loading';

export default function AddMedia() {
    const { user } = useUser(); // Use custom hook to access user context

    if (!user) {
        return <Loading />; // Handle loading or redirection
    }

    return (
        <div className={mainStyle.style}>
            <Navbar />
            {/* Pass user.id as profileId */}
            <Form profileId={user.id} publisherLogin={user.login} />
            <Footer />
        </div>
    );
}
