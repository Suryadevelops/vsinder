import React from "react";
import { Image } from "react-native";
interface FlairProps {
  size?: number;
  name: keyof typeof flairMap;
}

export const flairMap = {
  angular: "angular.png",
  bash: "bash.png",
  c: "c.png",
  cSharp: "cSharp.png",
  cpp: "cpp.png",
  css: "css.png",
  dart: "dart.png",
  flutter: "flutter.png",
  go: "go.png",
  haskell: "haskell.png",
  html: "html.png",
  ionic: "ionic.png",
  java: "java.png",
  javascript: "javascript.png",
  kafka: "kafka.png",
  kotlin: "kotlin.png",
  kubernetes: "kubernetes.png",
  php: "php.png",
  python: "python.png",
  react: "react.png",
  ruby: "ruby.png",
  rust: "rust.png",
  svelte: "svelte.png",
  swift: "swift.png",
  tailwindcss: "tailwindcss.png",
  typescript: "typescript.png",
  vue: "vue.png"
};

export const Flair: React.FC<FlairProps> = ({ size = 24, name }) => {
  if (!(name in flairMap)) {
    return null;
  }
  return (
    <Image
      source={{
        uri: `https://flair.benawad.com/` + flairMap[name],
      }}
      style={{ height: size, width: size }}
    />
  );
};
