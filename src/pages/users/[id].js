import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from '../api/profileApi';


export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOwnProfile, setIsOwnProfile] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const checkAuthAndFetchProfile = async () => {
            if (id) {
                try {
                    // Fetch the profile data
                    const profileData = await fetchData(`/${id}`);
                    setProfile(profileData);

                    // Check if the profile belongs to the logged-in user
                    const response = await fetch('/api/auth/user', { credentials: 'include' });
                    if (response.ok) {
                        const userData = await response.json();
                        setIsOwnProfile(userData.id === id);
                    }
                    setLoading(false);
                } catch (err) {
                    console.error("Error:", err);
                    setError(err.message);
                    setLoading(false);
                }
            }
        };

        checkAuthAndFetchProfile();
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

function Content({ profile, isOwnProfile }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
                <img 
                    src={profile.avatar || "/placeholder-avatar.png"} 
                    alt={profile.nickname} 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{profile.nickname || "No data"}</h2>
                <p className="text-gray-600 mb-4">{profile.description || "No data"}</p>
                
                {isOwnProfile ? (
                    <div className="space-y-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Edit Profile
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                            Account Settings
                        </button>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                            Privacy Settings
                        </button>
                    </div>
                ) : (
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Subscribe
                    </button>
                )}
            </div>
        </div>
    );
}