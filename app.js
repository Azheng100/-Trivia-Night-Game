const url = "https://animechan.vercel.app/"

fetch(url)
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("error", err);
  });

  