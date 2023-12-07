/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      task
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      task
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      task
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist(
    $filter: ModelSubscriptionArtistFilterInput
    $owner: String
  ) {
    onCreateArtist(filter: $filter, owner: $owner) {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist(
    $filter: ModelSubscriptionArtistFilterInput
    $owner: String
  ) {
    onUpdateArtist(filter: $filter, owner: $owner) {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist(
    $filter: ModelSubscriptionArtistFilterInput
    $owner: String
  ) {
    onDeleteArtist(filter: $filter, owner: $owner) {
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
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre(
    $filter: ModelSubscriptionGenreFilterInput
    $owner: String
  ) {
    onCreateGenre(filter: $filter, owner: $owner) {
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
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre(
    $filter: ModelSubscriptionGenreFilterInput
    $owner: String
  ) {
    onUpdateGenre(filter: $filter, owner: $owner) {
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
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre(
    $filter: ModelSubscriptionGenreFilterInput
    $owner: String
  ) {
    onDeleteGenre(filter: $filter, owner: $owner) {
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
export const onCreateArtistGenre = /* GraphQL */ `
  subscription OnCreateArtistGenre(
    $filter: ModelSubscriptionArtistGenreFilterInput
    $owner: String
  ) {
    onCreateArtistGenre(filter: $filter, owner: $owner) {
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
export const onUpdateArtistGenre = /* GraphQL */ `
  subscription OnUpdateArtistGenre(
    $filter: ModelSubscriptionArtistGenreFilterInput
    $owner: String
  ) {
    onUpdateArtistGenre(filter: $filter, owner: $owner) {
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
export const onDeleteArtistGenre = /* GraphQL */ `
  subscription OnDeleteArtistGenre(
    $filter: ModelSubscriptionArtistGenreFilterInput
    $owner: String
  ) {
    onDeleteArtistGenre(filter: $filter, owner: $owner) {
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
export const onCreateLabel = /* GraphQL */ `
  subscription OnCreateLabel(
    $filter: ModelSubscriptionLabelFilterInput
    $owner: String
  ) {
    onCreateLabel(filter: $filter, owner: $owner) {
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
export const onUpdateLabel = /* GraphQL */ `
  subscription OnUpdateLabel(
    $filter: ModelSubscriptionLabelFilterInput
    $owner: String
  ) {
    onUpdateLabel(filter: $filter, owner: $owner) {
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
export const onDeleteLabel = /* GraphQL */ `
  subscription OnDeleteLabel(
    $filter: ModelSubscriptionLabelFilterInput
    $owner: String
  ) {
    onDeleteLabel(filter: $filter, owner: $owner) {
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
export const onCreateArtistLabel = /* GraphQL */ `
  subscription OnCreateArtistLabel(
    $filter: ModelSubscriptionArtistLabelFilterInput
    $owner: String
  ) {
    onCreateArtistLabel(filter: $filter, owner: $owner) {
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
export const onUpdateArtistLabel = /* GraphQL */ `
  subscription OnUpdateArtistLabel(
    $filter: ModelSubscriptionArtistLabelFilterInput
    $owner: String
  ) {
    onUpdateArtistLabel(filter: $filter, owner: $owner) {
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
export const onDeleteArtistLabel = /* GraphQL */ `
  subscription OnDeleteArtistLabel(
    $filter: ModelSubscriptionArtistLabelFilterInput
    $owner: String
  ) {
    onDeleteArtistLabel(filter: $filter, owner: $owner) {
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
