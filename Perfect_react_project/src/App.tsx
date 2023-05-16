import { useEffect, useState } from "react";

function App() {
  const [count] = useState(0 as number); // useState
  useEffect(() => {
    console.log({ count });
  }, [count]);

  return <></>;
}

export default App;
