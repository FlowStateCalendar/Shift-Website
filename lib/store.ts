import { create } from "zustand";

type quizState = {
    email: string;
    firstName: string;
    lastName: string;
    setemail: (email: string) => void;
    setfirstName: (firstName: string) => void;
    setlastName: (lastName: string) => void;
    quiz: {
        question: string;
        answer: string;
    }[];
    addtoQuiz: (quiz: { question: string; answer: string }[]) => void;
    score: number;
    setScore: (score: number) => void;
    reset: () => void;
};

export const useQuizStore = create<quizState>((set) => ({
    email: "",
    firstName: "",
    lastName: "",
    quiz: [],
    score: 0,
    setScore: (score) => set({ score }),
    setemail: (email) => set({ email }),
    setfirstName: (firstName) => set({ firstName }),
    setlastName: (lastName) => set({ lastName }),
    addtoQuiz: (quiz) => set((state) => ({ quiz: [...state.quiz, ...quiz] })),
    reset: () => set({ email: "", firstName: "", lastName: "", quiz: [] }),
}));
