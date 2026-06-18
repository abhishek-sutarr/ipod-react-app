import menuItems from "./Data";

export default function Menu({ selected }) {
  return (
    <div className="screen">

      <div className="menu">
        <h3>iPod</h3>

        {menuItems.map((item, index) => (
          <div
            key={index}
            className={
              selected === index
                ? "menu-item active"
                : "menu-item"
            }
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}