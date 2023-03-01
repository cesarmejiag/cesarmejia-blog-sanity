import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faList,
  faTableCells,
  faSortNumericDown,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faTableCells, faSortNumericDown, faSortNumericUp);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/github-dark.css";
import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
