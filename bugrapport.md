# Bugrapport Astrology module

## Kända buggar:

### Ogiltigt datum tilldelas stjärntecken (TC11)
Det finns en bugg i modulen som gör att ett ogiltigt datum (2023-02-30) felaktigt tilldelas stjärntecknet Fiskarna istället för att returnera ett felmeddelande.

**Förväntat beteende:**
Returnera ett felmeddelande då datumet inte kan valideras.

**Faktiskt beteende:**
Stjärntecknet Fiskarna returneras.

**För mer information:**
Se TC11 i 'testApp.js' och 'testrapport.md'.