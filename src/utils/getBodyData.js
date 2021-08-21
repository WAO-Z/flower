function getBodyData(req) {
  return new Promise((resolve, reject) => {
    let postData = "";

    req.on("data", (content) => {
      postData += content.toString();
    })

    req.on("end", () => {
      if (postData) {
        resolve(JSON.parse(postData));
      } else {
        resolve({});
      }
    })
  })
}

module.exports = getBodyData;