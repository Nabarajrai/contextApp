import { useState } from "react";

function useToggle(initialVal) {
  const [state, setState] = useState(initialVal);
  const Toggle = () => {
    setState(!state);
  };
  return [state, Toggle];
}

export default useToggle;
