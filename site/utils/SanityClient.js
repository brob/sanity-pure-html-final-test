const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: "nx939dxh",
  dataset: "production",
  useCdn: true 
})

module.exports = client;