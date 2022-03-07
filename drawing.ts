/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */

enum Smer {
    Nahoru = 1,
    Dolu = 2,
    Doleva = 3,
    Doprava = 4,
}


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
    //% block="Překreslit bod"

    export function prekreslit(): void {
        stateBeforeArrive = !(stateBeforeArrive)
    }

    /**
    * Vymaže plochu
    */
    //% block="Vymazat kresbu"

    export function vymazat(): void {
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
    * Zapne/vypne kurzor
    */
    //% block="Přepnout kurzor"

    export function prepnoutKurzor(): void {
        showCursor = !(showCursor)
        if (stateBeforeArrive) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }

    /**
    * Blikání kurzoru
    */
    //% block="Blikat kurzorem"

    export function blikaniKurzoru(): void {
        if (showCursor) {
            led.toggle(x, y)
            basic.pause(100)
        }
    }

    /**
    * Pohne kurzorem do daného směru
    */
    //% block="Posunout kurzor smerem %smer"

    export function pohybDoSmeru(smer: Smer): void {
        switch (smer) {
            case Smer.Nahoru:
                pohyb(x, y + 1);
                break;
            case Smer.Dolu:
                pohyb(x, y - 1);
                break;
            case Smer.Doprava:
                pohyb(x + 1, y);
                break;
            case Smer.Doleva:
                pohyb(x - 1, y);
                break;
        }
    }
    
    function pohyb(newX: number, newY: number): void {
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