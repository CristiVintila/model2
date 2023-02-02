#Subiect 3
#Tematica: REST

# Avand urmatoa aplicatie dezvoltata in NodeJS, sa se completeze metoda de tip `POST` de pe calea `/products` :

- Daca nu exista body pentru cererea http, trebuie sa returnati un JSON cu urmatorul format: `{message: "Body is missing"}`. Codul de raspuns trebuie sa fie: `500`;
- Daca body-ul nu respecta formatul unui produs, trebuie sa returnati un JSON cu urmatorul format: `{message: "Invlid body format"}`. Codul de raspuns trebuie sa fie: `500`;
- Pretul unui produs trebuie sa fie mai mare ca 0.In caz contrar trebuie sa returnati un JSON cu urmatorul format: `{message: "Price should be a positive number"}`. Codul de raspuns trebuie sa fie: `500`; 
- Daca produsul exista deja in vector, trebuie sa returnati un JSON cu urmatorul format: `{message: "Product already exists"}`.Codul de raspuns trebuie: `500`. Unicitatea se face in functie de nume;
- Daca body-ul are formatul corespunzator, produsul trebuie adaugat in vector si sa returnati un JSON cu urmatorul format: `{message: "Created"}`. Codul de raspuns trebuie sa fie: `201`;