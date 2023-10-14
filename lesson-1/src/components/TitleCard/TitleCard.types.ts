export interface TitleCardProps {
  text: string;
  onCheck: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}
