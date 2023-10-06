import BC_GetWords from "./BC_GetWords"
const nodeFetch = require("node-fetch")

async function BC_GetImages(prompt: string) {
  const response = (await nodeFetch("https://api.sitius.tech/gen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      negative: "",
      model: "runwayml/stable-diffusion-v1-5",
    }),
    //@ts-ignore
  }).then(res => res.json())) as { url: string }

  // console.log(response)

  //@ts-ignore
  const image = (await nodeFetch(response.url).then(res => res.blob())) as Blob
  console.log(image)

  return {
    url: response.url,
    prompt,
  }
}

export default BC_GetImages
