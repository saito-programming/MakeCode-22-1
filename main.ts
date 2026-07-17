input.onButtonPressed(Button.A, function () {
    時間をはかるのを始める = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(今の秒数)
})
let 時間をはかるのを始める = 0
let 今の秒数 = 0
今の秒数 = 0
時間をはかるのを始める = 0
basic.forever(function () {
    if (時間をはかるのを始める == 1) {
        basic.pause(1000)
        今の秒数 += 1
    }
})
