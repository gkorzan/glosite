import React from "react";

const languageContext = React.createContext({
  language: "en",
  setLanguage: () => {},
});

export default languageContext;
