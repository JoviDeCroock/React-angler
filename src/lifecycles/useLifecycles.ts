import onMount from "./useOnMount";
import onUnmount from "./useOnUnmount";
import onUpdate from "./useOnUpdate";

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
