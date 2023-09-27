// Initialize CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default", // You can change the theme
});

// Get the "Run" button and output div
const runButton = document.getElementById("run-button");
const outputDiv = document.getElementById("output");

// Add an event listener to the "Run" button
runButton.addEventListener("click", () => {
    // Get the code from the editor
    const code = editor.getValue();

    // Clear the output
    outputDiv.innerHTML = "";

    try {
        // Execute the JavaScript code
        const result = eval(code);
        
        // Display the result in the output div
        outputDiv.innerHTML = `<pre>${result}</pre>`;
    } catch (error) {
        // Display any errors in the output div
        outputDiv.innerHTML = `<pre style="color: red;">${error}</pre>`;
    }
});
