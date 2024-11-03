// 如果使用了自定义类型，确保声明它们
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
} 