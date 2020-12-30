let start = 0
let Diff = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    Diff = (input.runningTime() - start) / 1000
    basic.showNumber(Diff)
    basic.pause(1000)
    basic.clearScreen()
    if (Diff <= 1) {
        led.plot(0, 4)
    } else if (Diff > 1 && Diff <= 2) {
        led.plot(0, 3)
    } else if (Diff > 3 && Diff <= 4) {
        led.plot(0, 2)
    } else if (Diff > 4 && Diff <= 5) {
        led.plot(0, 2)
        led.plot(0, 4)
    } else if (Diff > 5 && Diff <= 6) {
        led.plot(0, 2)
        led.plot(0, 3)
    } else if (Diff > 6 && Diff <= 7) {
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
    } else if (Diff > 7 && Diff <= 8) {
        led.plot(0, 1)
    } else if (Diff > 8 && Diff <= 9) {
        led.plot(0, 1)
        led.plot(0, 4)
    } else {
        basic.showString("Mais de 10 s")
    }
    basic.pause(1000)
    basic.clearScreen()
})
