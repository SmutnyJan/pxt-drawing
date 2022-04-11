enum MoveDirection {
    //% block="Nahoru"
    Up = 1,
    //% block="Dolu"
    Down = 2,
    //% block="Doleva"
    Left = 3,
    //% block="Doprava"
    Right = 4,
}

//% weight=100 color=#25E422 icon="\uf1fc" block="Malování"
namespace drawing {

    let previousState = false
    let y = 0
    let x = 0
    let isCursorVisible = false
    isCursorVisible = true
    x = 2
    y = 2
    previousState = led.point(x, y)

    let privateX = 0
    let privateY = 0

    /**
    * Překreslí aktuální bod
    */
    //% block="Překreslit bod"

    export function redraw(): void {
        if (isCursorVisible) {
            previousState = !(previousState)
        }
    }

    /**
    * Vymaže plochu
    */
    //% block="Vymazat kresbu"

    export function clear(): void {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        previousState = false
    }

    /**
    * Přepne kurzor na zvolené souřadnici
    * @newX Zvolená souřadnice
    * @newY Zvolená souřadnice
    */
    //% block="Přepne kurzor || na [%newX, %newY]"

    export function toogleCursor(newX: number, newY: number): void {
        if (newX == null) {
            newX = privateX
        }
        if (newY == null) {
            newY = privateY
        }
        isCursorVisible = !(isCursorVisible)
        if (previousState) {
            led.plot(newX, newY)
        } else {
            led.unplot(newX, newY)
        }
    }

    /**
    * Blikne kurzorem na zvolené souřadnici
    * @newX Zvolená souřadnice
    * @newY Zvolená souřadnice
    */
    //% block="Blikat kurzorem || na [%newX, %newY]"

    export function blinkCursor(newX: number, newY: number): void {
        if (newX != null) {
            privateX = newX;
        }
        if (newY != null) {
            privateY = newY;
        }
        if (isCursorVisible) {
            led.toggle(newX, newY)
            basic.pause(100)

        }
    }

    /**
    * Pohne kurzorem na zvolené souřadnice
    * @newX Zvolená souřadnice
    * @newY Zvolená souřadnice
    */
    //% block="Pohyb na [%newX, %newY]"
    export function moveAt(newX: number, newY: number): void {
        if (previousState) {
            led.plot(privateX, privateY)
        } else {
            led.unplot(privateX, privateY)
        }
        privateX = newX
        privateY = newY
        previousState = led.point(privateX, privateY)
    }

    /**
    * Pohne kurzorem do daného směru
    * @direction Směr, do kterého se má kurzor pohnout
    */
    //% block="Posunout kurzor smerem %direction"

    export function moveInDirection(direction: MoveDirection): void {
        switch (direction) {
            case MoveDirection.Up:
                move(x, y + 1);
                break;
            case MoveDirection.Down:
                move(x, y - 1);
                break;
            case MoveDirection.Right:
                move(x + 1, y);
                break;
            case MoveDirection.Left:
                move(x - 1, y);
                break;
        }
    }

    function move(newX: number, newY: number): void {
        if (isCursorVisible) {
            if (previousState) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            x = newX
            y = newY
            if (newX > 4) {
                x = 0
            } else if (newX < 0) {
                x = 4
            }
            if (newY > 4) {
                y = 0
            } else if (newY < 0) {
                y = 4
            }
            privateX = x
            privateY = y
            previousState = led.point(x, y)
        }
    }

}