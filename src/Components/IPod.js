import { useState } from "react";
import Screen from "./Screen";
import Wheel from "./Wheel";
import menuItems from "./Data";

export default function IPod() {

  const [selected, setSelected] = useState(0);
  const [screen, setScreen] = useState("menu");

  const openMenu = () => {
    setScreen("menu");
  };

  const selectItem = () => {
    setScreen(menuItems[selected]);
  };

  return (
    <div className="ipod">

      <Screen
        screen={screen}
        selected={selected}
      />

      <Wheel
        selected={selected}
        setSelected={setSelected}
        openMenu={openMenu}
        selectItem={selectItem}
      />

    </div>
  );
}