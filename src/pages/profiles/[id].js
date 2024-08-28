import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { fetchData } from '../api/profileApi';

import Content from '@/components/profiles/Content';

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
      if (id) {
        fetchData(`/${id}`)
          .then(data => {
            console.log("Fetched data:", data); // Debug log
            setProfile(data);
            setLoading(false);
          })
          .catch(err => {
            console.error("Error fetching profile:", err); // Debug log
            setError(err.message);
            setLoading(false);
          });
      }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!profile) return <div>No profile found</div>;

    return (
      <div>
        <Navbar />
        <Content profile={profile} />
        <Footer />
      </div>
    );
}