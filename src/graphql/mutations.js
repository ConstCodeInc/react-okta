/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      task
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      task
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      task
      createdAt
      updatedAt
    }
  }
`;
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createGenre = /* GraphQL */ `
  mutation CreateGenre(
    $input: CreateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    createGenre(input: $input, condition: $condition) {
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
export const updateGenre = /* GraphQL */ `
  mutation UpdateGenre(
    $input: UpdateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    updateGenre(input: $input, condition: $condition) {
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
export const deleteGenre = /* GraphQL */ `
  mutation DeleteGenre(
    $input: DeleteGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    deleteGenre(input: $input, condition: $condition) {
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
export const createArtistGenre = /* GraphQL */ `
  mutation CreateArtistGenre(
    $input: CreateArtistGenreInput!
    $condition: ModelArtistGenreConditionInput
  ) {
    createArtistGenre(input: $input, condition: $condition) {
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
export const updateArtistGenre = /* GraphQL */ `
  mutation UpdateArtistGenre(
    $input: UpdateArtistGenreInput!
    $condition: ModelArtistGenreConditionInput
  ) {
    updateArtistGenre(input: $input, condition: $condition) {
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
export const deleteArtistGenre = /* GraphQL */ `
  mutation DeleteArtistGenre(
    $input: DeleteArtistGenreInput!
    $condition: ModelArtistGenreConditionInput
  ) {
    deleteArtistGenre(input: $input, condition: $condition) {
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
export const createLabel = /* GraphQL */ `
  mutation CreateLabel(
    $input: CreateLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    createLabel(input: $input, condition: $condition) {
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
export const updateLabel = /* GraphQL */ `
  mutation UpdateLabel(
    $input: UpdateLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    updateLabel(input: $input, condition: $condition) {
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
export const deleteLabel = /* GraphQL */ `
  mutation DeleteLabel(
    $input: DeleteLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    deleteLabel(input: $input, condition: $condition) {
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
export const createArtistLabel = /* GraphQL */ `
  mutation CreateArtistLabel(
    $input: CreateArtistLabelInput!
    $condition: ModelArtistLabelConditionInput
  ) {
    createArtistLabel(input: $input, condition: $condition) {
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
export const updateArtistLabel = /* GraphQL */ `
  mutation UpdateArtistLabel(
    $input: UpdateArtistLabelInput!
    $condition: ModelArtistLabelConditionInput
  ) {
    updateArtistLabel(input: $input, condition: $condition) {
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
export const deleteArtistLabel = /* GraphQL */ `
  mutation DeleteArtistLabel(
    $input: DeleteArtistLabelInput!
    $condition: ModelArtistLabelConditionInput
  ) {
    deleteArtistLabel(input: $input, condition: $condition) {
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
