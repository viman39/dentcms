import { usePublicProfile } from './publicProfile.hook';

export const PublicProfile = () => {
    const { user, isLoading } = usePublicProfile();

    return (
        <>
            {isLoading && <div>loading ... </div>}
            {!isLoading && <div>{user?.username}</div>}
        </>
    );
};
