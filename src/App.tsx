import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import HomePage from "./Components/HomePage";
import { pdfjs } from "react-pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
