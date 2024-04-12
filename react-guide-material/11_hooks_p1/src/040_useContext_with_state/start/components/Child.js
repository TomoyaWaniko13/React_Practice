import GrandChild from "./GrandChild";

const Child = () => (
  <div style={{ border: "5px solid black", padding: 10 }}>
    <h3>child component</h3>
    <GrandChild />
  </div>
);
export default Child;
