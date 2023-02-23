import "./miniav.css";

const MiniNav = (props: any) => {
 
  return (
    <nav className=" mini-nav-bar bg-black">
      {props.sec.map((item: any) => (
        <div className="nav-item" key={Math.random()}>{item.name}</div>
      ))}
    </nav>
  );
};

export default MiniNav;
