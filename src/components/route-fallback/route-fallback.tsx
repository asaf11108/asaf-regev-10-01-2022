import { VFC } from "react";
import Loader from "../loader/loader";
import { LoaderSize } from "../loader/loader.model";

const RouteFallback: VFC = () => <div style={{margin: 'auto'}}><Loader color='white' size={LoaderSize.Small} /></div>;

export default RouteFallback;