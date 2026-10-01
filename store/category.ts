import { create } from 'zustand';

interface State {
    activeId: string;
    setActive: (activeId: string) => void;
}

export const useCategoryStore = create<State>((set) => ({
    activeId: 'Пицца',
    setActive: (activeId) => set({ activeId }),
}));