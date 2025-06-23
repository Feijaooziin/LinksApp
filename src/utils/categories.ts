import { MaterialIcons } from "@expo/vector-icons";

type Category = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  { id: "1", name: "Code", icon: "code" },
  { id: "2", name: "Work", icon: "engineering" },
  { id: "3", name: "Learn", icon: "class" },
  { id: "4", name: "Site", icon: "newspaper" },
  { id: "5", name: "Video", icon: "movie" },
  { id: "6", name: "Random", icon: "settings-applications" },
];
