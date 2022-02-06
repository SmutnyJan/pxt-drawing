input.onGesture(Gesture.TiltRight, function () {
    Malovani.PohybDoprava()
})
input.onGesture(Gesture.LogoDown, function () {
    Malovani.PohybNahoru()
})
input.onButtonPressed(Button.A, function () {
    Malovani.PrepnoutKurzor()
})
input.onGesture(Gesture.TiltLeft, function () {
    Malovani.PohybDoleva()
})
input.onGesture(Gesture.LogoUp, function () {
    Malovani.PohybDolu()
})
input.onButtonPressed(Button.B, function () {
    Malovani.Vymazat()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Malovani.Prekreslit()
})
basic.forever(function () {
    Malovani.BlikaniKurzoru()
})
