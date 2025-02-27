import { create } from "zustand"

const useUserStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user: any) => set({ user }),
    setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated })
}))

export default useUserStore