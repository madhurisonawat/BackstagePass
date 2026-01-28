import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ selectedDay, onSelect }) {
  const [clickedDays, setClickedDays] = useState([]);

  const handleDayClick = (day) => {
    setClickedDays((prev) => {
      if (prev.includes(day)) {
        return prev.filter((d) => d !== day);
      } else {
        return [...prev, day];
      }
    });
    onSelect(day);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        {[...Array(9)].map((_, i) => {
          const day = i + 1;
          const isSelected = day === selectedDay;
          const isClicked = clickedDays.includes(day);

          return (
            <div
              key={day}
              className={`day-item${isSelected ? " active" : ""}`}
              onClick={() => handleDayClick(day)}
              style={{ cursor: "pointer" }}
            >
              <span className={isClicked ? "clicked-day-text" : "day-text"}>
                Day - {day}
              </span>
              <span className="day-icon">
                {isClicked ? (
                  <span className="green-tick">✔</span>
                ) : !isClicked ? (
                  <span className="grey-lock">🔒</span>
                ) : (
                  ""
                )}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
