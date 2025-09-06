import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
import { VISTA_LISTAR } from "./menuitems";

function App() {
  const [menuItem, setMenuItem] = useState(VISTA_LISTAR); // 'alta' o 'listar'

  const handleSetMenuItem = (menuItem) => {
    setMenuItem(menuItem);
  };

  return (
    <>
      <Header onSetMenuItem={handleSetMenuItem} menuItem={menuItem} />
      <Body menuItem={menuItem} onSetMenuItem={handleSetMenuItem} />
    </>
  );
}

export default App;
