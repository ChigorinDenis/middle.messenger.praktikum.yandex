import Block from "../framework/Block";
import store from "./store";
import { StoreEvents } from "./store";

interface BlockProps {
  [key: string]: unknown;
}

function connect(
  Component: typeof Block,
  mapStateToProps: (state: Indexed) => Indexed
) {
  return class extends Component {
    constructor(props: BlockProps) {
      super({ ...props, ...mapStateToProps(store.getState()) });
      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}

export default connect;
