import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from '../api/gameApi';

import Navbar from "../../components/layouts/Navbar2";
import Content from '../../components/apps/Content';
import Footer from "../../components/layouts/Footer";

import mainStyle from '../../styles/MainStyle.module.css'


export default function App() {
    const [app, setApp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
      if (id) {
        fetchData(`/${id}`)
          .then(data => {
            console.log("Fetched data:", data); // Debug log
            setApp(data);
            setLoading(false);
          })
          .catch(err => {
            console.error("Error fetching app:", err); // Debug log
            setError(err.message);
            setLoading(false);
          });
      }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    //if (!app) return <div>No app found</div>;
    //if (error) return <div>Error: {error}</div>;

    return (
      <div className={mainStyle.style}>
        <Navbar />
        <Content app={app} />
        <Footer />
      </div>
    );
}