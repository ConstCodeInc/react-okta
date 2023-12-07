/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGenresByName = /* GraphQL */ `
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
        genre
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getLabelsByName = /* GraphQL */ `
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
        label
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistIdsByGenre = /* GraphQL */ `
  query GetArtistIdsByGenre($ids: [String]!, $limit: Int, $nextToken: String) {
    getArtistIdsByGenre(ids: $ids, limit: $limit, nextToken: $nextToken) {
      getArtistIdsByGenre {
        id
        artist_id
        genre_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistIdsByLabel = /* GraphQL */ `
  query GetArtistIdsByLabel($ids: [String]!, $limit: Int, $nextToken: String) {
    getArtistIdsByLabel(ids: $ids, limit: $limit, nextToken: $nextToken) {
      getArtistIdsByLabel {
        id
        artist_id
        label_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistsByIds = /* GraphQL */ `
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
export const getArtistsByGenresAndLabels = /* GraphQL */ `
  query GetArtistsByGenresAndLabels(
    $genreNames: [String]!
    $labelNames: [String]!
    $limit: Int
    $nextToken: String
  ) {
    getArtistsByGenresAndLabels(
      genreNames: $genreNames
      labelNames: $labelNames
      limit: $limit
      nextToken: $nextToken
    ) {
      getArtistsByGenresAndLabels {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      task
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        task
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      first_name
      talent_genre {
        nextToken
      }
      talent_label {
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $id: ID
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listArtists(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
      id
      genre
      talent_genre {
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const listGenres = /* GraphQL */ `
  query ListGenres(
    $id: ID
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGenres(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        genre
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getGenreByGenre = /* GraphQL */ `
  query GetGenreByGenre(
    $genre: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getGenreByGenre(
      genre: $genre
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        genre
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistGenre = /* GraphQL */ `
  query GetArtistGenre($id: ID!) {
    getArtistGenre(id: $id) {
      id
      artist_id
      genre_id
      talent {
        id
        first_name
        createdOn
        updatedOn
        owner
      }
      genre {
        id
        genre
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const listArtistGenres = /* GraphQL */ `
  query ListArtistGenres(
    $id: ID
    $filter: ModelArtistGenreFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listArtistGenres(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        artist_id
        genre_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistGenreByArtistId = /* GraphQL */ `
  query GetArtistGenreByArtistId(
    $artist_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArtistGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getArtistGenreByArtistId(
      artist_id: $artist_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        artist_id
        genre_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistGenreByGenreId = /* GraphQL */ `
  query GetArtistGenreByGenreId(
    $genre_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArtistGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getArtistGenreByGenreId(
      genre_id: $genre_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        artist_id
        genre_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getLabel = /* GraphQL */ `
  query GetLabel($id: ID!) {
    getLabel(id: $id) {
      id
      label
      talent_label {
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const listLabels = /* GraphQL */ `
  query ListLabels(
    $id: ID
    $filter: ModelLabelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLabels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        label
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getLabelByLabel = /* GraphQL */ `
  query GetLabelByLabel(
    $label: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getLabelByLabel(
      label: $label
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        label
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistLabel = /* GraphQL */ `
  query GetArtistLabel($id: ID!) {
    getArtistLabel(id: $id) {
      id
      artist_id
      label_id
      talent {
        id
        first_name
        createdOn
        updatedOn
        owner
      }
      label {
        id
        label
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const listArtistLabels = /* GraphQL */ `
  query ListArtistLabels(
    $id: ID
    $filter: ModelArtistLabelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listArtistLabels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        artist_id
        label_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistLabelByArtistId = /* GraphQL */ `
  query GetArtistLabelByArtistId(
    $artist_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArtistLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getArtistLabelByArtistId(
      artist_id: $artist_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        artist_id
        label_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getArtistLabelByLabelId = /* GraphQL */ `
  query GetArtistLabelByLabelId(
    $label_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArtistLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getArtistLabelByLabelId(
      label_id: $label_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        artist_id
        label_id
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
