var tipBox = document.getElementById("J_Tip_Box");

function println(str) {
    tipBox.innerHTML = str ? tipBox.innerHTML + str + "<br>" : tipBox.innerHTML + "<br>";
    tipBox.scrollTop = tipBox.scrollHeight;
}

function print(str) {
    tipBox.innerHTML = str ? tipBox.innerHTML + str : tipBox.innerHTML;
}

function printTips() {
    println("这是一款猜数字的小游戏！");
    println("游戏提示：");
    println("1.系统会随机生成一个数字，按开机键Ctrl+r可生成新的随机数字");
    println("2.在输入框输入答案后可按回车键进行提交答案");
    println();
}

function clearScreen() {
    tipBox.innerHTML = "";
}

function clearAnswer() {
    input.value = "";
}
function random(min, max) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * min + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (max - min + 1) + min, 10);
            break;
        default:
            return 0;
            break;
    }
}

var number;

function newGame() {
    println("正在生成随机数字...");
    setTimeout(function () {
        number = 100;
        println("随机数字已生成，请开始作答！");
    }, 800);
}

printTips();
newGame();


var input = document.getElementById("J_Input");
input.onkeydown = function (event) {
    var e = event || window.event;
    if (e && e.keyCode === 13) {
        var answer = input.value;
        if (!answer) {
            println("请输入答案！！！");
            return;
        }
        if (answer > number) {
            println("回答错误，猜大了！");
            clearAnswer();
        } else if (answer < number) {
            println("回答错误，猜小了！");
            clearAnswer();
        } else {
            println();
            println("回答正确，开始下一轮游戏！");
            clearAnswer();
            newGame();
        }
    }
};
