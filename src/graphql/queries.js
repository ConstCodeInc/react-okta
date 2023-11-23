/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtistsByGenresAndLabels = /* GraphQL */ `
  query GetArtistsByGenresAndLabels(
    $genreNames: [String]!
    $labelNames: [String]!
  ) {
    getArtistsByGenresAndLabels(
      genreNames: $genreNames
      labelNames: $labelNames
    ) {
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
export const getLabel = /* GraphQL */ `
  query GetLabel($label: ID!) {
    getLabel(label: $label) {
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
    $label: ID
    $filter: ModelLabelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLabels(
      label: $label
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
export const getGenre = /* GraphQL */ `
  query GetGenre($genre: ID!) {
    getGenre(genre: $genre) {
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
    $genre: ID
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGenres(
      genre: $genre
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        genre
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
