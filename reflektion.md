# Generella reflektioner

Skriv en kortare reflektion (halv sida 12pt) där du beskriver dina erfarenheter från din egen kodkvalitet. Använd begrepp från boken. 


# Namngivning (kapitel 2)

|   Namn och förklaring             |  Reflektion och regler från Clean Code  |
|--------------------------         |-----------------------------------------|
| **DateManager**<br>Klassnamn på klassen som först tar hand om inmatat datum. |  **Class Names:**<br>Min tanke med namnet var att det är en klass som ska bearbeta inmatat datum. I boken står att man bör undvika namn som t ex Manager, men det står inte någon förklaring kring det så jag har svårt att veta vad/varför det bör undvikas och kommer därmed nog att ha svårt att komma ihåg det inför framtiden. Kanske menas med detta att jag därför har valt ett "dåligt" namn på min klass, och den borde egentligen heta något annat med datum, kanske DateValidator. Mitt namnval följer annars regeln om att det bör vara ett substantiv.<br>**Use Pronouncable Names:**<br>
Namnet på min klass följer denna regel då det är ett väldigt uttalningsbart namn. Det gör att den aspekten gör det lättare att diskutera klassen med andra i och kring projektet. |
| **zodiacSigns**<br>Ett objekt med alla de 12 stjärntecknen | **Use Intention-Revealing Names:**<br> Av detta namn kan vi se att det är en samling med hjälp av -s ändelsen. Samlingen innehåller alla stjärntecknen vilket bör vara ganska tydligt utifrån namnet. Om den istället skulle heta bara z, eller zs är inget jag och många andra skulle uppskatta. För att skilja på denna har jag också en annan som heter zodiacSign, som representerar ett enda stjärntecken.<br>
**Don’t be cute:**<br> Att mena vad man säger och inte skoja eller ”slanga” till det. Det har jag följt här då mitt namn är rakt, tydligt och utan tvetydigheter. Alla vet vad stjärntecken är. Man skulle t ex ha kunnat välja att namnge det bara signs, vilket skulle öppna upp det mycket mer för tolkningar eller använda något typ av skoj- eller slangord.<br> |
| **getElement ()**<br>Hämtar elementet för ett stjärntecken | **Pick one Word per Concept:**<br>För att ta fram det som varje klass ansvarar för att göra har jag för alla publika liknande metoder valt att kalla de getX, som detta exempel, på ett enhetligt sätt. Man bör enligt boken inte ha olika typer av namn för liknande metoder i olika klasser, vilket verkar logiskt. Detta ger en tydlighet och gör det enhetligt, förutsägbart och konsekvent.<br>
**Avoid Disinformation:**<br> Metodnamnet lämnar ingen falsk eller vilseledande information utan är tämligen rakt på sak i vad den gör.<br> | 
| **validatedDate**<br>Det validerade datumet som har gått igenom valideringen och ska användas för att hämta astrologisk data på. | **Use Searchable Names:**<br>
Detta exempel, som de flesta (alla?) av mina namnval är mycket sökbart. Det gör att man enkelt kan hitta alla förekomster av namnet om man önskar. Boken nämner också att ett namns längd bör korrellera med dess omfattning. Detta vet jag inte om jag har följt, utan jag har försökt hitta tydliga namn. Är det inte viktigare att det är tydligt och naturligt? Jag förstår dock grundtanken i kontexten de diskuterar, man kan eventuellt kalla något för en bokstavs namn om det är lokalt och i en liten metod. Då kan det ändå vara tillräckligt tydligt, inte annars.<br>
**Avoid encodings:**<br> Förut var det vanligt att använda t ex ungersk notation, något som inte behövs idag och nu bör undvikas då de bara krånglar till det. Jag har inte använt mig av någon sådan kodning. Hade jag gjort det kunde denna ha hetat t ex sValidatedDate.<br> |
| **#decideModality ()**<br>Intern metod som bestämmer modalitet för stjärntecken | **Method Names:**<br> Metoden följer regeln om att metodnamn bör bestå av verb. Eftersom metoder gör någonting blir detta naturligt och tydligt. Här är metodens ansvar att bestämma modalitet för de 12 stjärntecknen.<br> **Avoid Mental Mapping:**<br>Att man bör välja tydliga namn, utan att mottagaren ska behöva mentalt översätta det. Man är tydlig från början. I den här metoden anser jag att det är tydligt att den bestämmer modaliteten. Eventuellt skulle man kunna lägga till ForSign, men då får vi ett enligt mig onödigt långt namn.<br> |


Jag tycker att många av "reglerna" i boken handlar om tydlighet, att man ska vara tydlig i sin namngivning. Jag har försökt att vara det, och har under arbetets gång ändrat vissa namn för att de ska bli mer tydliga då jag t ex hade dubletter, det var lite rörigt och då mitt ändamål med modulen förändrades lite under arbetets gång. Brister finns det dock säkerligen fortfarande.  
Det har varit bra att lära sig lite mer om vad som är bra att tänka på, t ex att ha sökbara namn. Det är ett bra tips som jag kommer att ha nytta av framåt. Även att få kännedom om hungarian notation då det kanske är något man kommer att stöta på framöver. Jag har från kapitlet fått med mig bra perspektiv som jag kommer att ha med mig i arbetet framåt. Det har också varit roligt att kunna lyfta blicken lite, från att tidigare panikförsöka bara få saker att fungera till att nu börja tänka och diskutera lite mer kring hur man bör göra saker.


# Funktioner (kapitel 3)

