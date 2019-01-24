import * as React from "react";

interface Input {
  clear: () => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  setValue: (value: string | ((val: string) => string)) => void;
  value: string;
}

export default (initial?: string): Input => {
  const { 0: value, 1: setValue } = React.useState(initial || "");
  return {
    clear: React.useCallback(() => setValue(() => ""), []),
    onChange: React.useCallback((e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value), []),
    setValue,
    value,
  };
};
