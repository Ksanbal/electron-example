// input 받은 파일명으로 python 실행
function runPython() {
  const filename = document.getElementById("filename-input").value;
  const style = document.getElementById("style-input").value;

  const { PythonShell } = require("python-shell");
  const options = {
    mode: "text",
    pythonPath: "py_src/.venv/bin/python3.9",
    pythonOptions: ["-u"],
    scriptPath: "py_src",
    args: [filename, style],
  };

  PythonShell.run("rename.py", options, (err, results) => {
    if (err) throw err;

    const resultText = document.getElementById("result-txt");
    console.log(results[0]);
    resultText.value = results[0];
  });
}
