interface Props {
  language: string | null;
}

export default function Language({ language }: Props) {
  return language && <span>{language}</span>;
}
