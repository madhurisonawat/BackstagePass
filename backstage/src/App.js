import { useState } from "react";
import BackstageHeader from "./components/BackstagePassHeader/BackstageHeader";
import Header from "./components/Header/Header";
import FeedPostCard from "./components/PostCard/FeedpostCard";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [day, setDay] = useState(1);
  const [theme, setTheme] = useState("light");

  return (
    <div className="app" data-theme={theme}>
      <BackstageHeader />
      <Header theme={theme} setTheme={setTheme} />

      <div className="layout">
        <Sidebar selectedDay={day} onSelect={setDay} />

        <main className="content">
          <FeedPostCard />
        </main>
      </div>
    </div>
  );
}
