import onMount from "./onMount";
import onUnmount from "./onUnmount";
import onUpdate from "./onUpdate";

interface InitLifeCycles {
  didMount?: () => void;
  didUnmount?: () => void;
  didUpdate?: () => void;
  watchables?: Array<any>,
}

export default function useLifecycles({ didMount, didUnmount, didUpdate, watchables }: InitLifeCycles = {}) {
  onMount(didMount);
  onUnmount(didUnmount);
  onUpdate(didUpdate, watchables);
};
