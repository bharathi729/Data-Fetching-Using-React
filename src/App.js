import React from "react";

const data = [
  { Company: "Instagram", Location: "India" },
  { Company: "Google", Location: "California" },
  { Company: "Amazon", Location: "United States" },
  { Company: "Microsoft", Location: "Washington" },
  { Company: "Facebook", Location: "USA" },
  { Company: "Samsung", Location: "South Korea" }
];
function App() {
  function myFunction(e) {
    e.preventDefault();
    console.log("function running");
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const [input, setInput] = React.useState("");
  return (
    <div className="tables">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => myFunction(e)}
      />
      <table>
        <tr>
          <th>Company</th>
          <th>Location</th>
        </tr>
        {data.map((val, key) => {
          return val.Company.includes(input) ? (
            <tr key={key}>
              <td>{val.Company}</td>
              <td>{val.Location}</td>
            </tr>
          ) : null;
        })}
      </table>
    </div>
  );
}
export default App;
