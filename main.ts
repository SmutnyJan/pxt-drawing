input.onGesture(Gesture.TiltRight, function () {
    Malovani.pohybDoSmeru(Smer.Doprava)
})
input.onGesture(Gesture.LogoDown, function () {
    Malovani.pohybDoSmeru(Smer.Dolu)
})
input.onButtonPressed(Button.A, function () {
    Malovani.prepnoutKurzor()
})
input.onGesture(Gesture.TiltLeft, function () {
    Malovani.pohybDoSmeru(Smer.Doleva)
})
input.onGesture(Gesture.LogoUp, function () {
    Malovani.pohybDoSmeru(Smer.Nahoru)
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
