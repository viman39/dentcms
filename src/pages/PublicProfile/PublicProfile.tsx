import { memo } from 'react';
import { usePublicProfile } from './publicProfile.hook';
import './publicProfile.scss';
import Card from '../../components/common/Card/Card';

const ProfileComponent: React.FC<{ user: any }> = memo(({ user }) => {
    return (
        <div className="profile-container">
            <h3 className="profile-title">{`${user?.title} ${user?.firstName} ${user?.lastName}`}</h3>
            <Card>CARD</Card>
        </div>
    );
});

export const PublicProfile = () => {
    const { user, isLoading } = usePublicProfile();

    return (
        <>
            {isLoading && <div>loading ... </div>}
            {!isLoading && <ProfileComponent user={user} />}
        </>
    );
};
