/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#25E422 icon="\uf1fc"
namespace Malovani {
    let stateBeforeArrive = false
    let y = 0
    let x = 0
    let showCursor = false
    showCursor = true
    x = 2
    y = 2
    stateBeforeArrive = led.point(x, y)

    /**
        * Překreslí aktuální bod
        */
    //% block="Prekreslit"

    export function Prekreslit(): void {
        stateBeforeArrive = !(stateBeforeArrive)
    }

    /**
    * Vymaže plochu
    */
    //% block="Vymazat kresbu"

    export function Vymazat(): void {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        stateBeforeArrive = false
    }

    /**
    * Zapne/Vypne Kurzor
    */
    //% block="Přepnout kurzor"

    export function PrepnoutKurzor(): void {
        showCursor = !(showCursor)
        if (stateBeforeArrive) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }

    /**
    * Blikání kurzor
    */
    //% block="Blikat kurzorem"

    export function BlikaniKurzoru(): void {
        if (showCursor) {
            led.toggle(x, y)
            basic.pause(100)
        }
    }

    /**
    * Pohne kurzorem dolů
    */
    //% block="Posunout kurzor dolu"

    export function PohybDolu(): void {
        Pohyb(x, y + 1);
    }

    /**
    * Pohne kurzorem nahoru
    */
    //% block="Posunout kurzor nahoru"

    export function PohybNahoru(): void {
        Pohyb(x, y - 1);
    }

    /**
    * Pohne kurzorem doprava
    */
    //% block="Posunout kurzor doprava"

    export function PohybDoprava(): void {
        Pohyb(x + 1, y);
    }

    /**
    * Pohne kurzorem doleva
    */
    //% block="Posunout kurzor doleva"

    export function PohybDoleva(): void {
        Pohyb(x - 1, y);
    }

    
    function Pohyb(newX: number, newY: number): void {
        if (showCursor) {
            if (stateBeforeArrive) {
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
            stateBeforeArrive = led.point(x, y)
        }
    }

}