const exercisePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});


exercisePromise.then(result => console.log(result));