import { useState } from "react";
function useCount(initialValue) {
  var [count, setCount] = useState(initialValue);

  const handleCounter = () => {
    count += 1;
    setCount(count);
  };

  const input = {
    value: count,
    onClick: handleCounter,
  };
  return [count, input];
}
export default useCount;
