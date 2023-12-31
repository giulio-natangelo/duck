controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, myDuck)
    music.play(music.createSoundEffect(WaveShape.Sine, 2481, 0, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    if (direction == "right") {
        myDuck.setImage(img`
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 b c 5 5 d 4 c . . 
            . b b b b 5 5 5 b f d d 4 4 4 b 
            . b d 5 b 5 5 b c b 4 4 4 4 b . 
            . . b 5 5 b 5 5 5 4 4 4 4 b . . 
            . . b d 5 5 b 5 5 5 5 5 5 b . . 
            . b d b 5 5 5 d 5 5 5 5 5 5 b . 
            b d d c d 5 5 b 5 5 5 5 5 5 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, myDuck, 150, 0)
    } else if (direction == "left") {
        myDuck.setImage(img`
            . . . . b 5 b . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . c 4 d 5 5 c b 5 b b . . . . 
            b 4 4 4 d d f b 5 5 5 b b b b . 
            . b 4 4 4 4 b c b 5 5 b 5 d b . 
            . . b 4 4 4 4 5 5 5 b 5 5 b . . 
            . . b 5 5 5 5 5 5 b 5 5 d b . . 
            . b 5 5 5 5 5 5 d 5 5 5 b d b . 
            . b 5 5 5 5 5 5 b 5 5 d c d d b 
            . b 5 5 5 5 5 5 5 b c c d d d c 
            . b 5 5 5 5 5 5 5 d d d d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, myDuck, -150, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "left"
    setDuckAnimation()
})
function setDuckAnimation () {
    if (direction == "right") {
        animation.runImageAnimation(
        myDuck,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 4 b 
            b d d c d 5 5 b 5 4 4 4 4 4 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    } else if (direction == "left") {
        animation.runImageAnimation(
        myDuck,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b 5 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . b 5 5 5 5 5 5 5 b b b b b . 
            . . b 5 5 5 5 5 5 5 5 b 5 d b . 
            . . f 4 d 5 f 1 d 5 b 5 5 b . . 
            . . c 4 4 5 f f 1 b 5 5 d b . . 
            . b 4 4 4 4 b f d 5 5 5 b d b b 
            b 4 4 4 4 4 4 5 b 5 5 d c d d b 
            . b 5 5 5 5 5 5 5 b c c d d d c 
            . b 5 5 5 5 5 5 5 d d d d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . b 5 5 5 5 5 5 5 b b b b b . 
            . . b 5 5 5 5 5 5 5 5 b 5 d b . 
            . . f 4 d 5 f 1 d 5 b 5 5 b . . 
            . . c 4 4 5 f f 1 b 5 5 d b . . 
            b 4 4 4 4 4 b f d 5 5 5 b d b b 
            . b 4 4 4 4 4 5 b 5 5 d c d d b 
            . b 5 5 5 5 5 5 5 b c c d d d c 
            . b 5 5 5 5 5 5 5 d d d d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . . c b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . f d 5 5 f 1 d 5 b b . . . . 
            . . c 4 d 5 f f 1 5 5 b . . . . 
            . . 4 4 d d b f d 5 5 b . . . . 
            b 4 4 4 4 4 5 5 5 d b b d d d b 
            . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
            . . b 5 5 5 5 5 d 5 5 5 5 c d b 
            . b 5 5 5 5 5 5 b 5 5 d c d d c 
            . b 5 5 5 5 5 5 5 b c c d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . c 4 d 5 f 1 d 5 b b . . . . 
            b 4 4 4 d d f f 1 5 5 b . . . . 
            . b 4 4 4 4 b f d 5 5 b . . . . 
            . . b 4 4 4 4 5 5 5 5 d b . . . 
            . . b 5 5 5 5 5 5 5 5 d d b . . 
            . b 5 5 5 5 5 5 5 5 d d d d b . 
            . b 5 5 5 5 5 5 5 b b b d d d b 
            . b 5 5 5 5 5 5 c d 5 5 b d d c 
            . b 5 5 5 5 5 5 d c d 5 d b b c 
            . b d 5 5 5 5 5 d d c b 5 5 b . 
            . . b b 5 5 5 d d d d c c c b b 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . c 4 d 5 f 1 d 5 b b . . . . 
            b 4 4 4 d d f f 1 5 5 b . . . . 
            . b 4 4 4 4 b f d 5 5 b . . . . 
            . . b 4 4 4 4 5 5 5 5 d b . . . 
            . . b 5 5 5 5 5 5 5 d d d b b . 
            . b 5 5 5 5 5 5 5 b b b d d d b 
            . b 5 5 5 5 5 5 c d 5 5 b d d c 
            . b 5 5 5 5 5 5 d c d 5 d b b c 
            . b 5 5 5 5 5 5 d d c b 5 5 b c 
            . b d 5 5 5 5 5 d d d c c c b b 
            . . b b 5 5 5 d d d c c . . . . 
            . . . b b c c c c c . . . . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . f d 5 5 f 1 d 5 b b . . . . 
            . . c 4 d 5 f f 1 5 5 b . . . . 
            . . 4 4 d d b f d 5 5 b . . . . 
            b 4 4 4 4 4 5 5 5 5 5 d b b b . 
            . b 4 4 4 4 4 5 5 d b b d d d b 
            . . b 5 5 5 5 5 5 b 5 5 5 d b b 
            . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
            . b 5 5 5 5 5 5 b 5 5 d c d b c 
            . b d 5 5 5 5 5 d b c c d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "right"
    setDuckAnimation()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    setDuckAnimation()
})
let projectile: Sprite = null
let direction = ""
let myDuck: Sprite = null
myDuck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
music.play(music.createSong(hex`0078000408040300001c00010a006400f401640000040000000000000000000000000005000004b40000000400012904000800012508000c0001290c001000012510001400012914001800012518001c0001291c002000012520002400012a24002800012528002c00012a2c003000012530003400012934003800012538003c0001293c004000012540004400012c44004800012748004c00012c4c005000012750005400012954005800012558005c0001295c006000012560006400012764006800012468006c0001276c007000012470007400012974007800012506001c00010a006400f401640000040000000000000000000000000000000002540000000400010d08000c00010d10001400011418001c00011420002400011628002c00011630003400011440004400011248004c00011250005400011158005c00011160006400010f68006c00010f70007400010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8007e000000010001000800090001001000110001001400150001001c001d0001002000210001002800290001003000310001003400350001003c003d0001004000410001004800490001005000510001005400550001005c005d0001006000610001006800690001007000710001007400750001007800790001007c007d000100`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(img`
    9999999999999999bbbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777777777777777777777777777777d766999999999
    999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999
    99999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb6777777777777777777777777777777777776667999999999
    9999999999999999999997bbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669999999999
    9999999999999999999999999999999667777777777777777777777777777777766669999999999999999999999999999999999999999996677777777777777777777777777777777666699999999999
    9999999999999999999999999999999766777777777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776666999999999999
    9999999999999999dddd99ddddd9999966677777777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666669999999999999
    9999999999999999d11dddd1d1ddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999
    9999999999999999d111dd11d11ddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999
    999999999dddd9ddd111d111d111dddd1ddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999999999999999
    999999999d11ddddd111d111d1111dd11dddd11d666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999999999999999
    999999999d111dddd1111d1111111d111ddd111dd6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd666666666666666679999999999999999999999
    999999999d1111dddd111d1111111111ddd1111dddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999
    999999999d11111ddd11111111111111dd11111ddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd7779999999999999999999999999999999
    999999999d11111ddd1111111111d11ddd1111ddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd799999999999999999999999999999999
    999999999dd11111ddd1111dd11dddddd11111ddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b66666666679999
    9999999999d111111dd11ddd5ddddddd11111dd7dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb6666666666679
    79999ddd99dd111111ddd5d555dddddd1111ddd7ddddd799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666
    66999d11ddddd111ddddd55555d5dddd111ddddd1111d99999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b666666666666
    66699d1111dddd11d11dd5555555dd11d1ddddd1111dd9999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb66666666666
    666799d1111ddddddd111dd555511111ddddd11111dd9999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b66666666666
    666699dd11111ddddd11111d5d11111dddd111111dd9999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb6666666666
    6666977ddd11111dddd11111d11111ddd11111dddd999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666
    667777777dddd1111ddd11ddddd11dd1111ddddddd9999999999966666666666666666666666666666777777776999999999999999999999999999999999999999999666666666666666666666666666
    7777777111111ddddddddd11111ddddddddd111111d999999999676666666666666666666666666777777777776999999999999966799999999999999999999999996766666666666666666666666667
    77777771111111111dddd1111111dddd11111111177999999999b76666666666666666666666677777777777776799999999996677dd799999999999999ddddd99dddd66666666666666666666666777
    777777777111111dddddddd111dddddddd111117779999999999b676666666666666666666677777777777777776999999996677777d7799999999999ddd1d1dddd11d76666666666666666666677777
    77777777777777dd7d11ddddddddd111dddddd779999999999997b77666666666666666666777777777777777776799999667777777dd7999999ddd99dd11d11dd111d77666666666666666666777777
    777777777ddddd771111d111dddd11111177dddd7799999999999bb77666666666666666677777777777777777776999667777777777d7dddd99d1dddd111d111d111ddd7dddd6666666666667777777
    77777777ddddd7711111d1111ddd711111177dddd7799999999997bb7776666666666666777777777777777777776666777777777777d7d11dd9d11dd1111d111d111ddddd11d6666666666677777777
    7777777ddddd7711111dd11111dd77111111777777999999999999bbb677666666666667777777777777777777776677777777777777d7d111ddd111d1111111d1111dddd111d6666666666777777777
    777777777ddd711111d7dd1111ddd67d11111d99999999999999999bbb6666666666666777777777777777777777777777777777777dd6d1111ddd1111111111d111dddd1111d6666666666777777777
    777777777777d111dd777d11111d7669ddddd9999999999999999999bbbbbb66666666b777777777777777777777777777777777777d76d11111dd11111111111111ddd11111db66666666b777777777
    7777777777777ddd777777d1111d666999999999999999999999999997bbbbbbbbbbbbb777777777777777777777777777777777777766dd1111ddd11d1111111111ddd11111dbbbbbbbbbb777777777
    77777777777777777777777d111d66799999999999999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666dd11111dddddd11dd1111ddd11111ddbbbbbbbbbb677777777
    777777777777777777777777ddd66699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669dd11111ddddddd5ddd11dd111111d97bbbbbbbbb667777777
    7777777777777777777777777666699999999999999999999999999999999999999999966777777777777777777777777777777776dddd9ddd1111dddddd555d5ddd111111dd99ddd999999667777777
    777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776d1111ddddd111dddd5d55555ddddd111ddddd11d999999766777777
    777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666dd1111ddddd1d11dd5555555dd11d11dddd1111d999999966677777
    7777777777777777777766666699999999999999999999999999999999999dddddddddddd666677777777777777777777777666666dd11111ddddd111115555dd111ddddddd1111dddddddddd6666777
    6777777777777777766666667999999999999999999999999999999999dddddddddddddddd666666677777777777777776666666799dd111111dddd11111d5d11111ddddd11111dddddddddddd666666
    66666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999dddd11111ddd11111d11111dddd11111dddddddddddddddd6666
    666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999ddddddd1111dd11ddddd11ddd1111dddd777dddddddddddddd66
    d6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd66666666666666667999999999d111111ddddddddd11111ddddddddd1111117dddddddddddddddd
    ddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd777799999999999999999977111111111dddd1111111dddd11111111117dddddddddddddddd
    dddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd777999999999999999999977711111dddddddd111dddddddd11111177ddddddddddddddddd
    ddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd7999999999999999999999977dddddd111ddddddddd11d7dd77777dddddd77777dddddddd
    ddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b6677dddd77111111dddd111d111177ddddddddddddd7777777dddd
    dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb77dddd771111117ddd1111d1111177ddddddddddddd7777777777
    7777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b677777711111177dd11111dd1111177dddddddddddddd77777777
    7777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b6666d11111d766dd1111dd9d111117dddddddddddddddd779997
    999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb6666ddddd6666d11111d999dd111ddddddddddddddddddd7999
    99999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b6666666666666d1111d999997ddddddddddddddddddd7777999
    9999999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb666666666666d111d999999977777777777777777777779999
    99999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666666ddd7776699999777777777777777779999999
    9999999999999666666666666666666666666666667777777769999999999999999999999999999999999999999996666666666666666666666666666677777777699999999999999999999999999999
    9999999999996766666666666666666666666667777777777769999999999999667999999999999999999999999967666666666666666666666666677777777777699999999999996679999999999999
    999999999999b76666666666666666666666677777777777776799999999996677dd799999999999999999999999b76666666666666666666666677777777777776799999999996677dd799999999999
    999999999999b676666666666666666666677777777777777776999999996677777d779999999999999999999999b676666666666666666666677777777777777776999999996677777d779999999999
    9999999999997b77666666666666666666777777777777777776799999667777777dd799999999999999999999997b77666666666666666666777777777777777776799999667777777dd79999999999
    9999999999999bb77666666666666666677777777777777777776999667777777777d769999999999999999999999bb77666666666666666677777777777777777776999667777777777d76999999999
    99999999999997bb7776666666666666777777777777777777776666777777777777d7699999999999999999999997bb7776666666666666777777777777777777776666777777777777d76999999999
    99999999999999bbb677666666666667777777777777777777776677777777777777d7699999999999999999999999bbb677666666666667777777777777777777776677777777777777d76999999999
    999999999999999bbb6666666666666777777777777777777777777777777777777dd66999999999999999999999999bbb6666666666666777777777777777777777777777777777777dd66999999999
    9999999999999999bbbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777777777777777777777777777777d766999999999
    999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999
    99999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb6777777777777777777777777777777777776667999999999
    9999999999999999999997bbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669999999999
    9999999999999999999999999999999667777777777777777777777777777777766669999999999999999999999999999999999999999996677777777777777777777777777777777666699999999999
    9999999999999999999999999999999766777777777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776666999999999999
    9999999999999999999999999999999966677777777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666669999999999999
    999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999
    999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999
    9999999999999999dddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999999999999999
    99999999999999dddddddddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999999999999999
    9999999999999dddddddddddddddddddddddddddd6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd666666666666666679999999999999999999999
    999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999
    99999999999ddddddddddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd7779999999999999999999999999999999
    99999999999dddddddddddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd799999999999999999999999999999999
    99999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b66666666679999
    99999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb6666666666679
    799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666
    6699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b666666666666
    66699999999977dddddddddddddddddddddd7999999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb66666666666
    6667999999999777ddddddddddddddddd777799999999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b66666666666
    66669999999999777777777777777777777799999999999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb6666666666
    666697777669999977777777777777777999999999999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666
    6677777777699999999999999999999999999999999999999999966666666666666666666666666666777777776999999999999999999999999999999999999999999666666666666666666666666666
    7777777777699999999999996679999999dddd99ddddd9999999676666666666666666666666666777777777776999999999999966799999999999999999999999996766666666666666666666666667
    77777777776799999999996677dd799999d11dddd1d1ddd99999b76666666666666666666666677777777777776799999999996677dd799999999999999999999999b766666666666666666666666777
    777777777776999999996677777d779999d111dd11d11dd99dddb676666666666666666666677777777777777776999999996677777d779999999999999999999999b676666666666666666666677777
    777777777776799999667777777dddd9ddd111d111d111dddd1d7bdddd6666666666666666777777777777777776799999667777777dd799999999999999999999997b77666666666666666666777777
    777777777777699966777777777d11ddddd111d111d1111dd11d9dd11d66666666666666677777777777777777776999667777777777d769999999999999999999999bb7766666666666666667777777
    777777777777666677777777777d111dddd1111d1111111d111ddd111d76666666666666777777777777777777776666777777777777d7699999999999999999999997bb777666666666666677777777
    777777777777667777777777777d1111dddd111d1111111111ddd1111d77666666666667777777777777777777776677777777777777d7699999999999999999999999bbb67766666666666777777777
    777777777777777777777777777d11111ddd11111111111111dd11111d6666666666666777777777777777777777777777777777777dd66999999999999999999999999bbb6666666666666777777777
    777777777777777777777777777d11111ddd1111111111d11ddd1111ddbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777
    777777777777777777777777777dd11111ddd1111dd11dddddd11111ddbbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb777777777
    7777777777777777777777777776d111111dd11ddd5ddddddd11111dd997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb677777777
    77777777777777777777777ddd66dd111111ddd5d555dddddd1111ddd9ddddbbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb667777777
    77777777777777777777777d11ddddd111ddddd55555d5dddd111ddddd1111d9999999966777777777777777777777777777777776666999999999999999999999999999999999999999999667777777
    77777777777777777777777d1111dddd11d11dd5555555dd11d1ddddd1111dd9999999976677777777777777777777777777777766669999999999999999999999999999999999999999999766777777
    777777777777777777777766d1111ddddddd111dd555511111ddddd11111dd99999999996667777777777777777777777777776666699999999999999999999999999999999999999999999966677777
    777777777777777777776666dd11111ddddd11111d5d11111dddd111111dddddddddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd6666777
    6777777777777777766666667ddd11111dddd11111d11111ddd11111dddddddddddddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd666666
    666666666666666666666679777dddd1111ddd11ddddd11dd1111ddddddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd6666
    6666666666666666666679997111111ddddddddd11111ddddddddd111111dddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd66
    d6666666666666666799999971111111111dddd1111111dddd11111111177dddddddddddddddddddd6666666666666666799999999999999999999999999999999999ddddddddddddddddddddddddddd
    ddddd7777999999999999999977111111dddddddd111dddddddd11111777ddddddddddddddddddddddddd77779999999999999999999999999999999999999999999dddddddddddddddddddddddddddd
    dddddd77799999999999999999977777dd7d11ddddddddd111dddddd77dddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddd
    ddddddd79999999999999999999ddddd771111d111dddd11111177dddd77ddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777dddddddd
    ddddddd799999999999999999bddddd7711111d1111ddd711111177dddd77dddddddd7777777ddddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777dddd
    dddddd7999999999999999999ddddd7711111dd11111dd77111111777777dddddddddd7777777777dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777
    7777d799999999999999999997bddd711111d6dd1111dd997d11111ddddddddddddddddd777777777777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd77777777
    7777799999999999966b7999997b66d111dd666d11111d9999dddddddddddddddddddddddd7799977777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd779997
    999999999999999966666679999bb66ddd666666d1111d99999977dddddddddddddddddddddd7999999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999
    99999999999999966666666b9997b666666666666d111d9999999777ddddddddddddddddd777799999999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd7777999
    9999999999999966666666666b99bb666666666666ddd999999999777777777777777777777799999999999999999966666666666b99bb66666666666666999999999977777777777777777777779999
    99999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b66666666666666977776699999777777777777777779999999
    9999999999999666666666666666666666666666667777777769999999999999999999999999999999999999999996666666666666666666666666666677777777699999999999999999999999999999
    `)
direction = "right"
animation.runImageAnimation(
myDuck,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
game.onUpdate(function () {
    controller.moveSprite(myDuck)
    if (myDuck.x < 0) {
        myDuck.x = 160
    } else if (myDuck.x > 160) {
        myDuck.x = 0
    }
    if (myDuck.y < 0) {
        myDuck.y = 120
    } else if (myDuck.y > 120) {
        myDuck.y = 0
    }
})
