import {
  faBarcode,
  faDollarSign,
  faTag,
  faList,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { ListItemProps } from "./types";

export const listItems: ListItemProps[] = [
  {
    id: "01",
    title: "Produits",
    icon: faBarcode,
    isExpanded: false,
    subMenu: [
      {
        id: "01_01",
        title: "Liste des produits",
      },
      {
        id: "01_02",
        title: "Liste des marques",
      },
    ],
  },
  {
    id: "02",
    title: "Ventes",
    icon: faDollarSign,
    isExpanded: false,
    subMenu: [
      {
        id: "03_01",
        title: "Clients",
      },
      {
        id: "03_02",
        title: "Commandes",
      },
      {
        id: "03_03",
        title: "Factures",
      },
      { id: "03_04", title: "Avoirs" },
    ],
  },
  {
    id: "03",
    title: "Achats",
    icon: faTag,
    isExpanded: false,
    badge: {
      color: "secondary",
      text: "SEE",
    },
    subMenu: [
      {
        id: "03_01",
        title: "Liste des fournisseurs",
      },
      {
        id: "03_02",
        title: "Commandes",
      },
      {
        id: "03_03",
        title: "Approvisionnement",
      },
      { id: "03_04", title: "Inventaire" },
      { id: "03_05", title: "Paiements fournisseurs" },
    ],
  },
  {
    id: "04",
    title: "Comptabilité",
    icon: faList,
    isExpanded: false,
    subMenu: [
      {
        id: "04_01",
        title: "Exports factures clients",
      },
      {
        id: "04_02",
        title: "Exports commandes fournisseurs",
      },
    ],
  },
  {
    id: "05",
    title: "Reporting",
    icon: faChartBar,
    isExpanded: false,
    subMenu: [
      {
        id: "05_01",
        title: "Ventes",
      },
      {
        id: "05_02",
        title: "Achats",
      },
      {
        id: "05_03",
        title: "Store crédit",
      },
    ],
  },
];
