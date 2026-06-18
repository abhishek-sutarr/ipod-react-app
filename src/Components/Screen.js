import Menu from "./Menu";

export default function Screen({ screen, selected }) {

  if (screen === "menu") {
    return <Menu selected={selected} />;
  }

  return (
    <div className="screen-content">
      <h2>{screen}</h2>
    </div>
  );
}