input.onGesture(Gesture.TiltRight, function () {
    Malovani.pohybDoprava()
})
input.onGesture(Gesture.LogoDown, function () {
    Malovani.pohybNahoru()
})
input.onButtonPressed(Button.A, function () {
    Malovani.prepnoutKurzor()
})
input.onGesture(Gesture.TiltLeft, function () {
    Malovani.pohybDoleva()
})
input.onGesture(Gesture.LogoUp, function () {
    Malovani.pohybDolu()
})
input.onButtonPressed(Button.B, function () {
    Malovani.vymazat()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Malovani.prekreslit()
})
basic.forever(function () {
    Malovani.blikaniKurzoru()
})
