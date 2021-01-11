import { AuthRule } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/AuthRule";

export interface HorizontalNavbarProps {
  items: NavItem[];
}

export interface NavItem {
  text: string;
  url: string;
  authRule?: AuthRule;
}
