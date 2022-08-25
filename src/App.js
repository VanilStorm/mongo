import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log(123)
    }, [])

  return (
    <div className="App">
        <h1>hello</h1>
    </div>
  );
}

export default App;
