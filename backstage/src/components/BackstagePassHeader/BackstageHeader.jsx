import "./BackstageHeader.css";
export default function BackstageHeader() {
  return (
    <div className="backstage-header">
      <div className="backstage-left">
        <div className="bp-icon">
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="dot"></span>
        </div>

        <div className="brand">
          <span className="brand-main">Backstage</span>
          <span className="brand-accent">Pass</span>
        </div>
      </div>

      <div className="backstage-right">
        <div className="fire">
          🔥 <span>30</span>
        </div>
        <div className="icon">🔔</div>
        <img className="avatar" src="https://i.pravatar.cc/32" alt="user" />
      </div>
    </div>
  );
}
