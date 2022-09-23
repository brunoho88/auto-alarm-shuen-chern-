let sun = 0
input.onButtonPressed(Button.A, function () {
    sun = input.lightLevel()
    if (sun < 100) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 120)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (sun < 0) {
        music.stopMelody(MelodyStopOptions.All)
    }
})
