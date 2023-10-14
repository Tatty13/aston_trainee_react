export interface Item {
  id: string;
  text: string;
}

export interface TitleListProps {
  titles: Item[];
  onCheck: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}
