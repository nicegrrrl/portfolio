import { ReactNode } from "react";

export interface ContentTemplateProps {
  title: string;
  children: ReactNode;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface ImageDescriptionProps {
  image: string;
  description: string;
}

export interface ItemNameProps {
  text: string;
}

export interface ListItemProps {
  id: number;
  name: string;
  image: string;
}

export interface NavHeaderListItemProps {
  content: string;
  navigate: string;
}

export interface Stack {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  stacks: Stack[];
  image: string;
  repo: string;
  deploy: string;
}
