/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Javascript ha 6 tipi di datatype, detti anche primitivi:
- number
- string
- boolean
- null
- undefined

NUMBER: sono numeri interi o decimali compresi tra un range specifico, molto ampio.

STRING: sequenze di caratteri, compresi gli spazi. la stringa di testo deve essere compresa tra apici "doppi", 'singoli', o backtick.

BOOLEAN: indicano se una condizione, una operazione, un valore, ecc. siano veri o falsi. se veri allora il valore del dato è True, se falsi allora il valore del dato é False.
esempio console.log(37>25) stamperà true.

NULL: indica la non esistenza di un dato. Null indica che la variabile non contiene alcun valore, ma esiste, è determinata e valorizzata.

UNDEFINED: indica l'assenza di un dato. Una variable undefined non ha un valore determinato, attende che noi gliene assegnamo uno, di qualsiasi tipo.

Sono invece structural data i dati costituiti da un insieme di dati primitivi, una sorta di lista di valori:

- ARRAY: sono un insieme di valori, compresi tra parentesi quadre, che possono essere di diverso tipo.
- OBJECt: anche essi una lista dati primitivi costituiti da serie di coppie chiave-valore, separate da "," e racchiuse tra parentesi graffe.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
const X = 12
const Y = 20
let somma = X + Y
console.log(somma)*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12 */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Andrea" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
const y = 4
let sottrazione = y - x
console.log(sottrazione) 
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
let name1 = "john"
let name2 = "John"
console.log(name1 = name2)
console.log(name1.toLowerCase() === name2.toLowerCase()) 
*/
