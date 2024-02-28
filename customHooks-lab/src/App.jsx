import useStorage from "./hooks/useStorage";

function App() {
  const [state, handleSetter] = useStorage("");
  localStorage.setItem("value", state);
  sessionStorage.setItem("value", state);
  const handleKeyDown = (e) => {
    handleSetter(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleKeyDown} />
    </div>
  );
}

export default App;
