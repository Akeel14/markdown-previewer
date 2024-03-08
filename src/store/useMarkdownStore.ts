import { create } from "zustand";

interface MarkdownStore {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

// const [markdown, setMarkdown] = useState("Hello World");

export const useMarkdownStore = create<MarkdownStore>((set: any) => ({
  markdown: "Hello World",
  setMarkdown: (markdown: string) => set({ markdown }),
}));
