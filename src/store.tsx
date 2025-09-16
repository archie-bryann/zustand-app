import { create } from "zustand"

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        // set({ count: 1 }) // hardcoded
        set((state) => ({ count: state.count + 1 })); // dynamic
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + 1 }))
    },
    decrement: () => {
        // set({ count: -1 }); // hardcoded
        set((state) => ({ count: state.count - 1 })); // dynamic
    }
}))