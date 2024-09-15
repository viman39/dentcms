import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserByUsername } from './publicProfile.model';
import { UserProfile } from './publicProfile.types';

export const usePublicProfile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState<UserProfile | null>(null);
    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const user = await fetchUserByUsername(username || '');
                if (!user) {
                    throw new Error(`User not found: ${username}`);
                }
                setUser(user);
            } catch (e) {
                setIsError(true);
                navigate('/');
            } finally {
                setIsLoading(false);
            }
        };

        getUserProfile();
    }, [username]);

    return { user: user, isLoading, isError };
};
