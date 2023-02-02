# Subiect 2 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie `function textProcessor(input, tokens)` unde:
- `input` este un string ce poate sa contina tokenuri (Example: "Hello ${user}" or "Hello")
- `tokens` este un vector ce contine obiecte cu numele si valoarea tokenurilor.
- Toate tokenurile sunt idetificate sub urmatorul format: `${tokenName}`

# Completati urmatoarele taskuri:

- `input` trebuie sa fie de tip `string`. Daca alt tip de date este pasat aruncati `Error` cu mesajul `Input should be a string`; (0.5 pts)
- `input` trebuie sa aiba cel putin 6 caractere. Daca lungimea `inputului` este mai mica de 6, aruncati `Error` cu mesajul `Input should have at least 6 characters`; (0.5 pts)
- `tokens` este un vector de elemente cu urmatorul format: `{tokenName: string, tokenValue: string}`. Daca acest format nu este respectat, aruncati `Error` cu urmatorul mesaj `Invalid array format`; (0.5 pts)
- Daca `input-ul` nu contine niciun token trebuie sa returnati valoarea initiala a `inputului`; (0.5 pts)
- Daca `input` contine tokenuri, inlocuiti-le cu valorile specifice si returnati noul `input`; (0.5 pts)