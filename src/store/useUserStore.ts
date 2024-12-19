import AsyncStorage from '@react-native-async-storage/async-storage';
import {Profile, profileSchema} from '@/schemas/profile';
import {User, userResponseSchema} from '@/schemas/user';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface UserState {
  user: User | null;
  profile: Profile | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  setProfile: (profile: Profile) => void;
  clearProfile: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    set => ({
      user: null,
      profile: null,
      setUser: user => {
        const parsedUser = userResponseSchema.parse(user);
        set({user: parsedUser});
      },
      clearUser: () => set({user: null}),
      setProfile: profile => {
        const parsedProfile = profileSchema.parse(profile);
        set({profile: parsedProfile});
      },
      clearProfile: () => set({profile: null}),
    }),
    {
      name: 'UserStorage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserStore;
