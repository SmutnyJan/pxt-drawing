
//% weight=100 color=#25E422 icon="\uf1fc" block="Malování"
namespace drawing {
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

    let previousState = false
    let y = 0
    let x = 0
    let isCursorVisible = false
    isCursorVisible = true
    x = 2
    y = 2
    previousState = led.point(x, y)

    /**
    * Překreslí aktuální bod
    */
    //% block="Překreslit bod"

    export function redraw(): void {
        previousState = !(previousState)
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
    * Zapne/vypne kurzor
    */
    //% block="Přepnout kurzor"

    export function toogleCursor(): void {
        isCursorVisible = !(isCursorVisible)
        if (previousState) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }

    /**
    * Blikání kurzoru
    */
    //% block="Blikat kurzorem"

    export function blinkCursor(): void {
        if (isCursorVisible) {
            led.toggle(x, y)
            basic.pause(100)
        }
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
            previousState = led.point(x, y)
        }
    }

}