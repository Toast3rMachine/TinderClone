import { create } from "zustand";

const useAcceptedProfileStore = create((set) => ({
    acceptedProfile: [],
    setAcceptedProfile: (acceptedProfile:Array<any>) => set ({ acceptedProfile })
}))

export default useAcceptedProfileStore