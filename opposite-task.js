process.stdin.resume()
process.stdin.setEncoding('utf-8')

let currentLine = 0
let inputString = ''

process.stdin.on('data', raw_data => {
    inputString += raw_data
})

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(line => {
        return line.trim();
    })
    main();
})

function readLine() {
    return inputString[currentLine++]
}

function main() {
    const N = parseInt(readLine());
    let temp;
    for (let i = 0; i < N; i++) {
        let A = parseInt(readLine());
        if (A <= 10) console.log(0, A);
        else console.log(A - 10, 10);
    }
}