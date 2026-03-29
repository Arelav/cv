interface Props {
  language: string | null;
}

export default function Language({ language }: Props) {
  if (!language) return null;
  return <span>{language}</span>;
}
