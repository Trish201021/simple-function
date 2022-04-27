function function_1 () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(10 - index)
    }
    basic.showString("I Love You")
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    function_1()
})
basic.forever(function () {
	
})
