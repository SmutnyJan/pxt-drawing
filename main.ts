input.onPinPressed(TouchPin.P0, function () {
    Malovani.PrepnoutKurzor()
})
input.onButtonPressed(Button.A, function () {
    Malovani.PohybDoleva()
})
input.onPinPressed(TouchPin.P2, function () {
    Malovani.PohybDolu()
})
input.onButtonPressed(Button.AB, function () {
    Malovani.Prekreslit()
})
input.onButtonPressed(Button.B, function () {
    Malovani.PohybDoprava()
})
input.onGesture(Gesture.Shake, function () {
    Malovani.Vymazat()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Malovani.PohybNahoru()
})
basic.forever(function () {
    Malovani.BlikaniKurzoru()
})
