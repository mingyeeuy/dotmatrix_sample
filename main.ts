max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
let _88pattern_1 = max7219_matrix.getEmptyMatrix()
for (let index = 0; index <= 7; index++) {
    max7219_matrix.setValueInMatrix(
    _88pattern_1,
    index,
    0,
    1
    )
}
let _88array_1 = max7219_matrix.getCustomCharacterArray(
"B00010000"
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.clockwise,
false
)
basic.forever(function () {
    for (let index = 0; index <= 31; index++) {
        max7219_matrix.displayCustomCharacter(
        _88array_1,
        index,
        true
        )
        basic.pause(100)
        if (index % 8 == 0) {
            music.ringTone(262)
        } else if (index % 8 == 1) {
            music.ringTone(294)
        } else if (index % 8 == 2) {
            music.ringTone(330)
        } else if (index % 8 == 3) {
            music.ringTone(349)
        } else if (index % 8 == 4) {
            music.ringTone(392)
        } else if (index % 8 == 5) {
            music.ringTone(440)
        } else if (index % 8 == 6) {
            music.ringTone(494)
        } else if (index % 8 == 7) {
            music.ringTone(523)
        }
        max7219_matrix.clearAll()
    }
})
