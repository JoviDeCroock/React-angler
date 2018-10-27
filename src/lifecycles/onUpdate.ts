import { useEffect } from "react";

// TODO: this works for one instance.
// In theory this is fine but i'm not content YET
export default (() => {
  let prevProps;
  return (props: Object, cb: (prevProps: Object, props: Object) => void) => {
    return useEffect(() => {
      cb && cb(prevProps, props);
      prevProps = props;
    });
  };
})();
