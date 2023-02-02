# Konteh

## Pokretanje aplikacije

U okviru root foldera Angular aplikacije potrebno je pokrenuti komande:

> npm install //samo prilikom prvog pokretanja
> ng serve

Push na master granu automatski radi deploy na AWS - [konteh.org](konteh.org), tako da za sav rad treba da se napravi posebna grana.

## Aktuelne verzije

Angular - v15
Node - 18.13.0
NPM - 8.19.3

## Stvari koje je neophodno promeniti na godišnjem nivou

- Sve podatke u contentfulu
- Slike koordinatora bi trebale biti kockaste - 1:1
- Po mogućnosti obrisati stare slike koordinatora i logoa kompanija radi očuvanja prostora
- Postaviti / skloniti glavne kompanije sa landing page component (css)
- Pokrenuti update na najnovije verzije angulara i node paketa: [https://update.angular.io/](https://update.angular.io/)
- Promeniti po potrebi mejl na kontakt stranici i policy strani
- Promeniti PROD varijable na false, da se ne prikazuju kompanije dok barem ekskluzivni nije postavljen u bazi, i da se ne prikazuju oglasi za posao dok ih nema barem nekoliko
- Obrisati stare oglase na kraju kalendarske godine
