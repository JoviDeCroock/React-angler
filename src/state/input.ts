import * as React from "react";

interface Input {
  clear: () => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  setValue: (value: string | ((val: string) => string)) => void;
  value: string;
}

export default (initial: string = ""): Input => {
  const [value, setValue] = React.useState(initial);
  return {
    clear: () => setValue(""),
    onChange: (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    setValue,
    value,
  };
};
