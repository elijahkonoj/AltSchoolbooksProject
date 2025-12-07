import Books from "./src/Books";

const BookList = () => {
  return (
    <ul
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        listStyle: "none",
        marginTop: "30px",
        padding: "20px",
      }}
    >
      <li
        style={{
          margin: "30px",
        }}
      >
        <Books title="The gods must be mad" />
        <Books title="The gods are not to blame" />
        <Books title="The sugar girl" />
      </li>
    </ul>
  );
};
export default BookList;
