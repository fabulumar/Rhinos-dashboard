export type ListItemProps = {
  id?: string;
  title: string;
  icon: any;
  onClick?: (e: any) => void;
  isExpanded: boolean;
  badge?: {
    color: "primary" | "secondary";
    text: string;
  };
  subMenu?: {
    id: string;
    title: string;
  }[];
};
