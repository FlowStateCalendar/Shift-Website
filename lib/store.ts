import { create } from "zustand";

type quizState = {
    email: string;
    setemail: (email: string) => void;
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
    quiz: [],
    score: 0,
    setScore: (score) => set({ score }),
    setemail: (email) => set({ email }),
    addtoQuiz: (quiz) => set((state) => ({ quiz: [...state.quiz, ...quiz] })),
    reset: () => set({ email: "", quiz: [] }),
}));
