
function boldenText() {
    const inputText = document.getElementById('input').value;
    const output = document.getElementById('output');
    const boldenedText = inputText.split('\n').map((line) => {
        return line.split(' ').map((word) => {
            if (word.length > 6) {
                return \`<b>\${word.slice(0, 4)}</b>\${word.slice(4)}\`;
            } else {
                return \`<b>\${word.slice(0, 3)}</b>\${word.slice(3)}\`;
            }
        }).join(' ');
    }).join('\n');

    output.innerHTML = boldenedText;
}
