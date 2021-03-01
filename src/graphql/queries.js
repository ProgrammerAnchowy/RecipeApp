/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      title
      description
      image
      steps {
        items {
          id
          description
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        title
        image
        recipe {
          nextToken
        }
        createdAt
        updatedAt
      }
      country {
        id
        flag
        name
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          items {
          id
            user {
              id
            }
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStep = /* GraphQL */ `
  query GetStep($id: ID!) {
    getStep(id: $id) {
      id
      description
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      images
      createdAt
      updatedAt
    }
  }
`;
export const listSteps = /* GraphQL */ `
  query ListSteps(
    $filter: ModelStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        recipe {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        images
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      image
      recipe {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        image
        recipe {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      flag
      name
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCountrys = /* GraphQL */ `
  query ListCountrys(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        flag
        name
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          followerId
          followingId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      followerId
      followingId
      follower {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      following {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerId
        followingId
        follower {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        following {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userId
      recipeId
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        recipeId
        recipe {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
