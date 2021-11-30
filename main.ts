input.onButtonPressed(Button.A, function () {
    if (stateBeforeArrive) {
        led.plot(x, y)
    } else {
        led.unplot(x, y)
    }
    x += 1
    x = x % 5
    stateBeforeArrive = led.point(x, y)
})
input.onButtonPressed(Button.B, function () {
    if (stateBeforeArrive) {
        led.plot(x, y)
    } else {
        led.unplot(x, y)
    }
    y += 1
    y = y % 5
    stateBeforeArrive = led.point(x, y)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    stateBeforeArrive = !(stateBeforeArrive)
})
let stateBeforeArrive = false
let y = 0
let x = 0
x = 2
y = 2
stateBeforeArrive = led.point(x, y)
basic.forever(function () {
    led.toggle(x, y)
    basic.pause(100)
})
