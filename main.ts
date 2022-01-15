let n = 0
input.onButtonPressed(Button.A, function () {
    n = 0
    while (n < 10) {
        led.toggle(0, 0)
        basic.pause(1000)
        n = n + 1
    }
})
basic.forever(function () {
	
})
