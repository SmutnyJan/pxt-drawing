input.onGesture(Gesture.TiltRight, function () {
    pohyb(x + 1, y)
})
input.onGesture(Gesture.TiltLeft, function () {
    pohyb(x - 1, y)
})
input.onGesture(Gesture.LogoUp, function () {
    pohyb(x, y + 1)
})
input.onGesture(Gesture.LogoDown, function () {
    pohyb(x, y - 1)
})


function pohyb(newX: number, newY: number) {
    if (showCursor) {
        if (stateBeforeArrive) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        x = newX
        y = newY
        if (newX > 4) x = 0
        else if (newX < 0) x = 4

        if (newY > 4) y = 0
        else if (newY < 0) y = 4

        stateBeforeArrive = led.point(x, y)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    stateBeforeArrive = false
})

input.onButtonPressed(Button.B, function () {

    showCursor = !showCursor
    if(stateBeforeArrive) {
        led.plot(x, y)
    }
    else {
        led.unplot(x,y)
    }

})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    stateBeforeArrive = !(stateBeforeArrive)
})
let stateBeforeArrive = false
let showCursor = true
let y = 0
let x = 0
x = 2
y = 2
stateBeforeArrive = led.point(x, y)
basic.forever(function () {
    if (showCursor) {
        led.toggle(x, y)
        basic.pause(100)
    }
})
