export default function Wheel({
  selected,
  setSelected,
  openMenu,
  selectItem
}) {

  const rotateMenu = (e) => {

    if (e.movementY > 0) {
      setSelected((prev) => (prev + 1) % 4);
    }

    if (e.movementY < 0) {
      setSelected((prev) => (prev + 3) % 4);
    }
  };

  return (
    <div
      className="wheel"
      onPointerMove={rotateMenu}
    >

      <button
        className="menu-btn"
        onClick={openMenu}
      >
        MENU
      </button>

      <button className="left-btn">
        ◀◀
      </button>

      <button className="right-btn">
        ▶▶
      </button>

      <button className="bottom-btn">
        ►
      </button>

      <button
        className="center-btn"
        onClick={selectItem}
      >
      </button>

    </div>
  );
}