import onMount from "./onMount";
import onUnmount from "./onUnmount";
import onUpdate from "./onUpdate";

interface InitLifeCycles {
  didMount?: () => void;
  didUnmount?: () => void;
  didUpdate?: (prevProps: Object, props: Object) => void;
  props?: Object;
}

export default ({ didMount, didUnmount, didUpdate, props }: InitLifeCycles = {}) => {
  onMount(didMount);
  onUnmount(didUnmount);
  onUpdate(props, didUpdate);
};
