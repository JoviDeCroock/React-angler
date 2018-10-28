import * as React from "react";

export default (initial: string = "") => {
  const [value, setValue] = React.useState(initial);
  return {
    value,
    setValue,
    clear: () => setValue(""),
    onChange: (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  };
};
