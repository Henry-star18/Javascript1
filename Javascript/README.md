# Testovací úkol – JavaScript

## A) Funkce „součet kladných“

- Funkce vrací součet všech čísel větších než 0.
- Nula se nezapočítává.
- Nečíselné hodnoty jsou ignorovány.
- Prázdné pole vrací 0.

### Testy
| Test | Popis | Očekávaný výsledek |
|----|------|-------------------|
| 1 | Prázdné pole | 0 |
| 2 | Jen záporná čísla | 0 |
| 3 | Smíšená čísla | 7 |
| 4 | Velká čísla | 3 000 000 |
| 5 | Delší pole + nečíselné hodnoty | 15 |

---

## B) Odstranění duplicit – porovnání

### Varianty
- **Varianta 1:** ruční kontrola přes `includes`
- **Varianta 2:** použití `Set`

### Naměřené časy (orientační)

| Velikost vstupu | Seznam (includes) | Set |
|-----------------|------------------|-----|
| ~1 000 prvků | pomalejší | rychlejší |
| ~50 000 prvků | výrazně pomalé | výrazně rychlé |

---

## C) Mini-report

U seznamového řešení se výkon výrazně zhoršuje s rostoucí velikostí vstupu, protože každá kontrola `includes` prochází pole. Řešení pomocí `Set` je výrazně efektivnější, protože pracuje s konstantní časovou složitostí.  
V praxi bych proto vždy použil variantu se `Set`, zejména pro větší data.  
U funkce „součet kladných“ jsem doplnil kontrolu typu vstupu a ignorování nečíselných hodnot. Správnost jsem ověřil pomocí pěti testů včetně hraničních případů – všechny testy nyní procházejí jako OK.

---

## Spuštění
- Node.js: `node index.js`
- Prohlížeč: otevřít `index.html` a sledovat konzoli

---
