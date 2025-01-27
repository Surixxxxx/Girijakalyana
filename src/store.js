// src/store.js
import {create} from 'zustand';

const useStore = create((set) => ({
  profileImage:'',
  setprofileImage:(data)=>set((state)=>({profileImage:data})),
}));

export default useStore;
