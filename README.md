# Caesarova šifra

## Namespace
```
drawing
```
## Popis
Rozšíření poskytuje metody pro malování na 5×5 LED pole
 
## Metody
#### Překreslit bod
```
function redraw(): void
```
- Překreslí aktuální bod
- Bez parametrů
- Bez návratové hodnoty

#### Vymazat kresbu
```
function clear(): void
```
- Vypne všechny LED (uvedení do výchozího stavu)
- Bez parametrů
- Bez návratové hodnoty

#### Přepnout kurzor || na [%newX, %newY]
```
function toogleCursor(newX?: number, newY?: number): void
```
- Zapne/vypne blikání kurzoru (pokud si bude někdo chtít kresbu prohlédnout, mohl by kurzor překážet)
- Blok je možno rozšířit o dva parametry (x a y), záleží na obtížnosti úlohy
- Parametry:
    - nepovinný parametr nová souřadnice X (číslo)
    - nepovinný parametr nová souřadnice Y (číslo)
- Bez návratové hodnoty
 
#### Blikat kurzorem || na [%newX, %newY]
```
function blinkCursor(newX?: number, newY?: number): void
```
- Problikne kurzorem (umístí se do smyčky „opakuj stále“)
- Blok je možno rozšířit o dva parametry (x a y), záleží na obtížnosti úlohy
- Parametry:
    - nepovinný parametr nová souřadnice X (číslo)
    - nepovinný parametr nová souřadnice Y (číslo)
- Bez návratové hodnoty

#### Posunout kurzor smerem %direction
```
function moveInDirection(direction: MoveDirection): void
```
- Pohne kurzorem na danou stranu
- Parametry:
    - směr (enum)
- Bez návratové hodnoty

#### Pohyb na [%newX, %newY]
```
move(newX: number, newY: number): void
```
- Pohne kurzorem na danou souřadnici
- Parametry:
    - souřadnice X (číslo)
    - souřadnice Y (číslo)
- Bez návratové hodnoty


## Příklady

### Použití metod pro zašifrování a dešifrování textu

#### Bloky
![Řešení metody pro zašifrování](https://github.com/SmutnyJan/pxt-caesar-cipher-extension/blob/master/images/usageexample.png)
#### Kód
```
basic.showString(cipher.encryptText("ahoj", -2))
basic.showString(cipher.decryptText("fmto", 5))
```

### Použití metod pro zašifrování a dešifrování znaku
#### Bloky
![Řešení metody pro zašifrování](https://github.com/SmutnyJan/pxt-caesar-cipher-extension/blob/master/images/usageexample2.png)
![Řešení metody pro zašifrování](https://github.com/SmutnyJan/pxt-caesar-cipher-extension/blob/master/images/encode.png)
![Řešení metody pro zašifrování](https://github.com/SmutnyJan/pxt-caesar-cipher-extension/blob/master/images/decode.png)

#### Kód
```
function Zasifruj (text: string, posun: number) {
    for (let i = 0; i <= text.length - 1; i++) {
        konecnyText = "" + konecnyText + cipher.encryptCharacter(text.charAt(i), posun)
    }
    return konecnyText
}
function Desifruj (text: string, posun: number) {
    for (let j = 0; j <= text.length - 1; j++) {
        konecnyText = "" + konecnyText + cipher.decryptCharacter(text.charAt(j), posun)
    }
    return konecnyText
}
let konecnyText = ""
basic.showString("" + (Zasifruj("microbit", 5)))
```


