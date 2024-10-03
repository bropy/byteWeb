import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from '../api/profileApi';
import { useUser } from '../../contexts/UserContext';

import Navbar from "../../components/layouts/Navbar";
import Content from '@/components/profiles/Content';
import Footer from "../../components/layouts/Footer";

import mainStyle from '../../styles/MainStyle.module.css'
import Loading from '@/components/layouts/Loading';

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    const { user } = useUser();

    console.log("Profile component - user:", user); // Log user state

    useEffect(() => {
      console.log("Profile component - useEffect triggered, id:", id);
      if (id) {
        fetchData(`/${id}`)
          .then(data => {
            console.log("Fetched profile data:", data);
            setProfile(data);
            setLoading(false);
          })
          .catch(err => {
            console.error("Error fetching profile:", err);
            setError(err.message);
            setLoading(false);
          });
      }
    }, [id]);

    if (!user || loading) {
      console.log("Profile component - Loading state, user:", user, "loading:", loading);
      return <Loading />;
    }
    if (error) return <div>Error: {error}</div>;
    if (!profile) return <div>No profile found</div>;

    console.log("Profile component - Rendering content, user:", user, "profile:", profile);

    return (
      <div className={mainStyle.style}>
        <Navbar />
        <Content profile={profile} currentUser={user} />
        <Footer />
      </div>
    );
}