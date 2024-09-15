import { mockUserPublicProfile } from './__mocks__/publicProfile.fixtures';
import { UserProfile } from './publicProfile.types';

export const fetchUserByUsername = (username: string) => {
    return new Promise<null | UserProfile>((resolve, reject) => {
        setTimeout(() => {
            if (username === mockUserPublicProfile.username) {
                resolve(mockUserPublicProfile);
            } else {
                reject(null);
            }
        }, 1000);
    });
};
