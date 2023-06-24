import React from "react";
import { Button } from "./Button/Button";
function App() {
  return (
    <div>
      React App without CRA 2nd App imported from npm package...
      <Button primary={true} label='Click Me!' />
    </div>
  );
}

export default App;
