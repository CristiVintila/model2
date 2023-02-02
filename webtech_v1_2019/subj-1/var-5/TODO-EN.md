# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Having the `function textProcessor(input, tokens)` where:
- `input` is a string that could contain tokens (Example: "Hello ${user}" or "Hello")
- `tokens` is an array with token names and values.
- All tokens are identified with the following format: `${tokenName}`

# Complete the following tasks:

- `input` should be a `string`. If other type is passed throw an `Error` with the message `Input should be a string`; (0.5 pts)
- `input` should be at least 6 characters long. If `input` length is less than 6 throw an `Error` with the message `Input should have at least 6 characters`; (0.5 pts)
- `tokens` is an array with elements with the following format: `{tokenName: string, tokenValue: string}`. If this format is not respected throw an `Error` with the following message `Invalid array format`; (0.5 pts)
- If `input` don't contain any token return the initial value of `input`; (0.5 pts)
- If `input` contains tokens, replace them with the specific values and return the new `input`; (0.5 pts)