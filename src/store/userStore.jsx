import { create } from 'zustand'

const useUserStore = create((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
}))

export default useUserStore