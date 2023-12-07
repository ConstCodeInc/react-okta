import fetch, { Request } from "node-fetch";

export const executeQuery = async (endpoint, qName, queryBody, opt, key) => {
  let hasNextToken = true;
  let aggregatedResults = [];
  while (hasNextToken) {
    const options = {
      ...opt,
      body: JSON.stringify(queryBody),
    };
    const response = await fetch(new Request(endpoint, options));
    const { data } = await response.json();

    aggregatedResults = [...aggregatedResults, ...data?.[qName]?.[qName]];
    console.log("data =====", data, qName, data?.[qName]?.[qName]);
    queryBody.variables.nextToken = data?.[qName]?.nextToken;
    if (!data?.[qName]?.nextToken) {
      hasNextToken = false;
    }
  }
  return aggregatedResults.map((item) => item?.[key] || "undefined");
};

export const getArtistsQuery = async (
  endpoint,
  qName,
  queryBody,
  opt,
  nextToken = null
) => {
  const options = {
    ...opt,
    body: JSON.stringify(queryBody),
  };
  if (nextToken) queryBody.variables.nextToken = nextToken;
  console.log("queryBody.variables ====", queryBody.variables);
  const response = await fetch(new Request(endpoint, options));
  const { data } = await response.json();

  console.log("data =====", data);
  const aggregatedResults = [...data?.[qName]?.[qName]];
  const responsePayload = {
    // getArtistsByGenresAndLabels: {
    getArtistsByGenresAndLabels: aggregatedResults,
    nextToken: data?.[qName]?.nextToken,
    // },
  };
  return responsePayload;
};

export const getIntersection = (array1, array2) => {
  // Use filter to get elements that are present in both arrays
  const intersection = array1.filter((id) => array2.includes(id));
  return intersection;
};
