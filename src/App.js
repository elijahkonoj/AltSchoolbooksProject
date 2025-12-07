import BookList from "../BookList";
import HeaderComponent from "../Header";
import Accordion from "../src/Accordion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BookList />
      <Accordion title="About books">
        <p>You have three genres of books to pick from!</p>
      </Accordion>
    </div>
  );
}
