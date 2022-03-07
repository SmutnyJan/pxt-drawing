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
//% weight=100 color=#25E422 icon="\uf1fc" block="Malování"
namespace Malovani {
    let predchoziStav = false
    let y = 0
    let x = 0
    let jeVidetKurzor = false
    jeVidetKurzor = true
    x = 2
    y = 2
    predchoziStav = led.point(x, y)

    /**
    * Překreslí aktuální bod
    */
    //% block="Překreslit bod"

    export function prekreslit(): void {
        predchoziStav = !(predchoziStav)
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
        predchoziStav = false
    }

    /**
    * Zapne/vypne kurzor
    */
    //% block="Přepnout kurzor"

    export function prepnoutKurzor(): void {
        jeVidetKurzor = !(jeVidetKurzor)
        if (predchoziStav) {
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
        if (jeVidetKurzor) {
            led.toggle(x, y)
            basic.pause(100)
        }
    }

    /**
    * Pohne kurzorem do daného směru
    * @smer Směr, do kterého se má kurzor pohnout
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
    
    function pohyb(noveX: number, noveY: number): void {
        if (jeVidetKurzor) {
            if (predchoziStav) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            x = noveX
            y = noveY
            if (noveX > 4) {
                x = 0
            } else if (noveX < 0) {
                x = 4
            }
            if (noveY > 4) {
                y = 0
            } else if (noveY < 0) {
                y = 4
            }
            predchoziStav = led.point(x, y)
        }
    }

}