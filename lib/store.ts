import { create } from "zustand";

type quizState = {
    email: string;
    name: string;
    setemail: (email: string) => void;
    setname: (name: string) => void;
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
    name: "",
    quiz: [],
    score: 0,
    setScore: (score) => set({ score }),
    setemail: (email) => set({ email }),
    setname: (name) => set({ name }),
    addtoQuiz: (quiz) => set((state) => ({ quiz: [...state.quiz, ...quiz] })),
    reset: () => set({ email: "", quiz: [] }),
}));
