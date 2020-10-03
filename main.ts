controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . f f 1 f f . . . . . . . 
        . . . f f 1 1 9 f f . . . . . . 
        . . . f 9 9 9 9 9 f f . . . . . 
        . . f f 9 9 9 9 9 9 f . . . . . 
        . . f 8 8 8 9 9 9 9 f . . . . . 
        . . f 8 8 8 8 9 1 9 f . . . . . 
        . . f 8 8 8 8 1 1 8 f . . . . . 
        . . f f 8 8 8 8 8 f f . . . . . 
        . . . f f 8 8 8 f f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `, extinguisher, 50, 0)
   
    pause(500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.startEffect(effects.rings)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    otherSprite.startEffect(effects.ashes, 500)
})
let fire: Sprite = null
let water: Sprite = null
let extinguisher: Sprite = null
extinguisher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . d . . . . . . . 
    . . . f f f f f d d d d . . . . 
    . . . f . . . 2 2 . . . . . . . 
    . . . f . 2 2 2 2 2 2 . . . . . 
    . . . f . 2 2 2 1 1 2 . . . . . 
    . . . f . 2 2 2 2 1 2 . . . . . 
    . . . f . 2 2 2 2 2 2 . . . . . 
    . . f f f 2 2 2 2 2 2 . . . . . 
    . . f f f 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 1 2 2 2 2 . . . . . 
    . . . . . 2 1 1 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
     extinguisher.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(extinguisher)
scene.setBackgroundColor(7)
info.setLife(3)
// Fire
game.onUpdateInterval(500, function () {
    fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 4 4 4 4 2 2 . . . . . 
        . . . 2 4 4 4 4 4 4 4 2 . . . . 
        . . 2 4 4 4 5 5 5 4 4 2 2 . . . 
        . . 2 2 4 4 5 5 5 4 4 4 4 2 . . 
        . . 2 2 4 4 5 5 5 4 4 4 2 2 . . 
        . . 2 4 4 4 5 5 5 5 4 4 4 2 . . 
        . . 2 2 4 5 5 5 5 5 4 4 4 2 . . 
        . . 2 2 4 4 5 5 5 5 4 4 2 2 . . 
        . . 2 4 4 4 5 5 5 5 4 4 2 2 . . 
        . . 2 4 4 4 5 5 5 5 4 4 4 2 . . 
        . . 2 4 4 4 4 5 5 5 4 4 2 2 . . 
        . . 2 2 4 4 4 4 4 4 4 2 2 2 . . 
        . . 2 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        `, SpriteKind.Enemy)
    fire.setPosition(160, randint(0, 120))
    fire.setVelocity(randint(-10, -50), randint(-5, 5))
})
