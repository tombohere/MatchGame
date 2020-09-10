const modVars = () => {
  if (window.rows / window.cols < window.innerHeight / window.innerWidth) {
    document.documentElement.style.setProperty(
      "--fontSize",
      "calc(60vw / " + window.cols + ")"
    );
    document.documentElement.style.setProperty(
      "--boardHeight",
      "calc(80vw * (" + window.rows + " / " + window.cols + "))"
    );
    document.documentElement.style.setProperty("--boardWidth", "80vw");
  } else {
    document.documentElement.style.setProperty(
      "--fontSize",
      "calc(60vh / " + window.rows + ")"
    );
    document.documentElement.style.setProperty("--boardHeight", "80vh");
    document.documentElement.style.setProperty(
      "--boardWidth",
      "calc(80vh * (" + window.cols + " / " + window.rows + "))"
    );
  }
};

export default modVars;
