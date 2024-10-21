// menuData.ts

// Define the Menu interface
export interface Menu {
  id: number;
  title: string;
  path?: string; // optional for top-level items that may not have a path
  newTab: boolean;
  submenu?: Menu[]; // optional for submenu items
}

// Define the menuData array
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Resources",
    path: "/resource",
    newTab: false,
  },
  {
    id: 4,
    title: "Service",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Service1",
        path: "/Service",
        newTab: false,
      },
      {
        id: 42,
        title: "Service2",
        path: "/Service",
        newTab: false,
      },
      {
        id: 43,
        title: "Service3",
        path: "/Service",
        newTab: false,
      },
      {
        id: 44,
        title: "Service4",
        path: "/Service",
        newTab: false,
      },
      
      
    ],
  },
];

export default menuData;
