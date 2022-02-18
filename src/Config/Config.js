import { Home, Contact, Notifications, Portfolio } from "@containers";

const Config = {
  Language: "ar",
  Notification: [
    {
      enabled: true,
      name: "Notifications",
      label: "bell-outline",
      component: Notifications,
      number: "14",
      header: false,
    },
  ],
  Layout: "RTL",
  Main_Drawer_Bar: true,
  listLanguage: [
    { label: `🇺🇸 English`, key: "en", name: "English" },
    { label: "🇪🇬 Arabic", key: "ar", name: "Arabic" },
  ],
  Drawer: [
    {
      name: "Portfolio",
      label: "view-headline",
      component: Portfolio,
      header: false,
    },
    {
      name: "Contact",
      label: "contacts-outline",
      component: Contact,
      header: false,
    },
  ],
  TabBar: [
    {
      name: "Home",
      label: "home",
      component: Home,
      header: false,
    },
    {
      name: "Portfolio",
      label: "view-headline",
      component: Portfolio,
      header: false,
    },
    {
      name: "Contact",
      label: "contacts-outline",
      component: Contact,
      header: false,
    },
  ],

  Firebase: {
    Sender_ID: "",
    Server_key: "",
    Project_ID: "",
    Project_Number: "",
    Storage_Bucket: "",
    Firebase_Url: "",
  },
};

export default Object.assign(Config);
