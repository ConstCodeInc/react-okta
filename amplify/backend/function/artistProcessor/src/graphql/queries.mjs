export const getGenresByName = `
  query GetGenresByName(
    $genreNames: [String]!
    $limit: Int
    $nextToken: String
  ) {
    getGenresByName(
      genreNames: $genreNames
      limit: $limit
      nextToken: $nextToken
    ) {
      getGenresByName {
        id
      }
      nextToken
    }
  }
`;
export const getLabelsByName = `
  query GetLabelsByName(
    $labelNames: [String]!
    $limit: Int
    $nextToken: String
  ) {
    getLabelsByName(
      labelNames: $labelNames
      limit: $limit
      nextToken: $nextToken
    ) {
      getLabelsByName {
        id
      }
      nextToken
    }
  }
`;
export const getArtistIdsByGenre = `
  query GetArtistIdsByGenre($ids: [String]!, $limit: Int, $nextToken: String) {
    getArtistIdsByGenre(ids: $ids, limit: $limit, nextToken: $nextToken) {
      getArtistIdsByGenre {
        artist_id
        genre_id
      }
      nextToken
    }
  }
`;
export const getArtistIdsByLabel = `
  query GetArtistIdsByLabel($ids: [String]!, $limit: Int, $nextToken: String) {
    getArtistIdsByLabel(ids: $ids, limit: $limit, nextToken: $nextToken) {
      getArtistIdsByLabel {
        artist_id
        label_id
      }
      nextToken
    }
  }
`;
export const getArtistsByIds = `
  query GetArtistsByIds($ids: [String]!, $limit: Int, $nextToken: String) {
    getArtistsByIds(ids: $ids, limit: $limit, nextToken: $nextToken) {
      getArtistsByIds {
        id
        first_name
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
