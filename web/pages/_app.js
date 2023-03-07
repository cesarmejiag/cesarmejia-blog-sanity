import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faList,
  faTableCells,
  faSortNumericDown,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(
  faSun,
  faMoon,
  faList,
  faTableCells,
  faSortNumericDown,
  faSortNumericUp
);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/github-dark.css";
import "@/styles/index.css";
import "react-toggle/style.css";

import ThemeProvider from "@/providers/ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
