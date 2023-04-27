var screen = document.querySelector('#screen');
document.querySelector('#cleaner')
    .addEventListener('click', function(){
        screen.value = '';
    })
document.querySelector('#delete')
    .addEventListener('click', function(){
        screen.value = screen.value.substring(0, (screen.value.length -1));
    })
    
function addToScreen(value){
    const operationSigns = ['*','+','-','/','.'];
    if (value === '!') {
        screen.value += value;
    } else {
        screen.value += value;
        if (operationSigns.includes(value)){
            var valorAnterior = screen.value.length - 2;
            if (operationSigns.includes(screen.value[valorAnterior])){
                screen.value = screen.value.substring(0, (screen.value.length - 2));
                screen.value = screen.value + value;
            }
        }
        switch (screen.value[0]){
            case '*':
                screen.value = '';
            case '/':
                screen.value = '';
            case '.':
                screen.value = '';
        }
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function reFac() {
    if (screen.value.includes('!')) {
        var n = parseInt(screen.value.slice(0, -1));
        screen.value = factorial(n);
    } else {
        screen.value = eval(screen.value);
    }
}

function result() {
    if (screen.value.includes('!')) {
        reFac();
    } else {
        screen.value = eval(screen.value);
    }
}
