import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id?: string;
  firstName?: string;
  lastName?:string;
  email?: string;
}

interface UserState {
  user: User | null;
  isProfileUpdated: boolean;
  loggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (val: boolean) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isProfileUpdated: false,
      loggedIn:false,

      login: (user) => set({ user, loggedIn:true }),
      logout: () => set({ user: null, loggedIn:false }),
      updateProfile: (val) => set({ isProfileUpdated: val }),
    }),
    {
      name: "user-storage", // localStorage key
    }
  )
);

export default useUserStore;
