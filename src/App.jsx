import { Post } from "./Post";
import { Header } from "./components/header";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Fabrício Mendes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe reprehenderit, quibusdam facilis deleniti excepturi amet, sunt natus quam aperiam alias cumque eveniet est atque ipsum consectetur quia quaerat voluptates!"
      />
    </div>
  );
}

export default App;
