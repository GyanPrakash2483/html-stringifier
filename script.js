const inp = document.getElementById('inp');
const str_btn = document.getElementById('str_btn');
const out = document.getElementById('out');
const cpy_btn = document.getElementById('cpy_btn');

function convertToPlain(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    return rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "").trim();
}

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}

function htmlStringify(html) {
    var output = '';
    for(let i = 0; i < html.length; i++) {
        if(html.at(i) === '\"') {
            output += '\\';
        }
        if(html.at(i) !== '\n') {
            output += html.at(i);
        }
    }
    return output;
};

str_btn.onclick = function() {
    inp.innerText = convertToPlain(inp.innerText);
    out.innerText = htmlStringify(inp.innerText);
}

cpy_btn.onclick = function() {
    copy(out.innerHTML);
}
