function parseResponse(raw) {
    return raw;
}
var rawResponse = {
    status: 200,
    data: { id: 1, name: "Alice" },
    message: "Success"
};
var userResponse = parseResponse(rawResponse);
console.log(userResponse.data.name);
