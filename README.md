
> Otevřít tuto stránku v aplikaci [https://smutnyjan.github.io/pxt-drawing/](https://smutnyjan.github.io/pxt-drawing/)

## Použít jako rozšíření

Toto úložiště lze přidat jako **rozšíření** v aplikaci MakeCode.

* otevřít [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikněte na možnost **Nový projekt**
* klikněte na možnost **Rozšíření** v nabídce s ozubeným kolem
* vyhledat **https://github.com/smutnyjan/pxt-drawing** a importovat

## Upravit tento projekt ![Odznak stavu sestavení](https://github.com/smutnyjan/pxt-drawing/workflows/MakeCode/badge.svg)

Slouží k úpravě tohoto úložiště v aplikaci MakeCode.

* otevřít [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikněte na možnost **Import** a poté na **Import adresy URL**
* vložte **https://github.com/smutnyjan/pxt-drawing** a klikněte na možnost import

## Náhled bloků

Tento obrázek znázorňuje kód z Bloků od posledního potvrzení v hlavní verzi.
Tento obrázek se může aktualizovat až za několik minut.

![Vykreslený náhled bloků](https://github.com/smutnyjan/pxt-drawing/raw/master/.github/makecode/blocks.png)

#### Metadata (slouží k vyhledávání, vykreslování)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## Popis projektu

Tento projekt umožňuje „malovat“ na LED pole. Jedná se o vyhotovení úlohy Malování. Samotné malování funguje následujícím způsobem: v celém projektu jsou čtyři proměnné: stav LED předtím, než na ni bylo vstoupeno (stateBeforeArrive). Stav viditelnosti kurzoru (showCursor) a aktuální souřadnice (x, y). Ve smyčce forever je jednoduché problikávání LED na aktuální pozici (x, y), pokud máme viditelný kurzor. Pokud dojde k posunutí kurzoru (náklok microbitu, viz ovládání), zavolá se metoda pohyb, která dělá veškeré kreslení: pokud nechceme vidět kurzor, tak metoda vůbec nic nedělá => pokud je kurzor skryt, můžeme mačkat co chceme, ale nic se nezmění. Po zmáčknutí tlačítka A (vymazání kresby, viz ovládání) se jednoduše všechny LED zhasnout (x, y se nemění) a stateBeforeArrive se nastaví na false (všechny LED jsou zhasnuté, takže i ta, na které právě jsme). Po zmáčknutí tlačítka B (nastavení kurzoru, viz ovládání) se jednoduše přepne stav showCursor. A nejdůležitější událost: zmáčknutí loga přepne proměnnou stateBeforeArrive, na které je závislý prakticky celý program a která určuje, jakou hodnotu má LED vlastně mít v moment, kdy ji opustíme/přestaneme zobrazovat kurzor.

## Ovládání

* náklok doprava: posune kurzor doprava
* náklok doleva: posune kurzor doleva
* náklok dolů: posune kurzor po Y ose dolů
* náklok nahoru: posune kurzor po Y ose nahoru
* tlačítko A: vymaže kresbu
* tlačítko B: schová kurzor/ukáže kurzor
* logo: změní stav LEDky (pokud svítila, přestane a naopak)
