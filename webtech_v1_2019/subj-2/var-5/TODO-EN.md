#Subject 3
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `POST` method on path `/products` :

- If no request body is present you should return a json with the following format: `{message: "Body is missing"}`. Response status code should be: `500`;
- If the request body properties are missing you should return a json with the following format: `{message: "Invlid body format"}`. Response status code should be: `500`;
- Product price should be positive, otherwise return a json with the following format: `{message: "Price should be a positive number"}`. Response status code should be: `500`; 
- If the product already exists in the array. Return a json with the following format: `{message: "Product already exists"}`.Response status code should be: `500`;
- If the request body is good, product should be added in the array and return a json with the following format: `{message: "Created"}`.Response status code should be: `201`;