const resolvedPromise = Promise.resolve(3)
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise.then(value => console.log("Resolved with:", value));
rejectedPromise.catch(error => console.log("Rejected with:", error));