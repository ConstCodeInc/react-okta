/* Amplify Params - DO NOT EDIT
	API_REACTOKTA_GRAPHQLAPIENDPOINTOUTPUT
	API_REACTOKTA_GRAPHQLAPIIDOUTPUT
	API_REACTOKTA_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import {
  getGenresByName,
  getLabelsByName,
  getArtistIdsByGenre,
  getArtistIdsByLabel,
  getArtistsByIds,
} from "./graphql/queries.mjs";
import { executeQuery, getIntersection, getArtistsQuery } from "./utils.mjs";

const GRAPHQL_ENDPOINT = process.env.API_REACTOKTA_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_REACTOKTA_GRAPHQLAPIKEYOUTPUT;

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const { genreNames, labelNames, nextToken } = event.arguments;
  try {
    let options = {
      method: "POST",
      headers: {
        "x-api-key": GRAPHQL_API_KEY,
      },
    };

    // getting genre ids
    const genreIds = await executeQuery(
      GRAPHQL_ENDPOINT,
      "getGenresByName",
      {
        query: getGenresByName,
        operationName: "GetGenresByName",
        variables: {
          genreNames,
          limit: 2,
        },
      },
      options,
      "id"
    );
    console.log("genreIds ===>", genreIds);

    // getting lable ids
    const labelIds = await executeQuery(
      GRAPHQL_ENDPOINT,
      "getLabelsByName",
      {
        query: getLabelsByName,
        operationName: "GetLabelsByName",
        variables: {
          labelNames,
          limit: 2,
        },
      },
      options,
      "id"
    );
    console.log("labelIds ===>", labelIds);

    // getting artistGenre ids
    const artistGenreIds = await executeQuery(
      GRAPHQL_ENDPOINT,
      "getArtistIdsByGenre",
      {
        query: getArtistIdsByGenre,
        operationName: "GetArtistIdsByGenre",
        variables: {
          ids: genreIds,
          limit: 2,
        },
      },
      options,
      "artist_id"
    );
    console.log("artistGenreIds ===>", artistGenreIds);

    // getting artistLabel ids
    const artistLabelIds = await executeQuery(
      GRAPHQL_ENDPOINT,
      "getArtistIdsByLabel",
      {
        query: getArtistIdsByLabel,
        operationName: "GetArtistIdsByLabel",
        variables: {
          ids: labelIds,
          limit: 2,
        },
      },
      options,
      "artist_id"
    );
    console.log("artistLabelIds ===>", artistLabelIds);
    const intersectedArtistIds = getIntersection(
      artistGenreIds,
      artistLabelIds
    );
    console.log("intersectedArtistIds ===>", intersectedArtistIds);

    // getting artists by ids
    const artists = await getArtistsQuery(
      GRAPHQL_ENDPOINT,
      "getArtistsByIds",
      {
        query: getArtistsByIds,
        operationName: "GetArtistsByIds",
        variables: {
          ids: intersectedArtistIds,
          limit: 1,
        },
      },
      options,
      nextToken
    );
    console.log("artists ======>", artists);
    return artists;
  } catch (e) {
    console.log("Error===>", e);
    return null;
  }
};
