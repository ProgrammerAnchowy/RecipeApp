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
          scannedCount
          count
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
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
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
        scannedCount
        count
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
        userId
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
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      nextToken
      scannedCount
      count
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
        userId
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
          scannedCount
          count
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
          userId
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
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
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
          scannedCount
          count
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
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
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
          scannedCount
          count
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
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
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
        scannedCount
        count
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
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      nextToken
      scannedCount
      count
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
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
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
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
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
      scannedCount
      count
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
        userId
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
          scannedCount
          count
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
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
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
          userId
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
      scannedCount
      count
    }
  }
`;
export const getRecipesByUserId = /* GraphQL */ `
  query GetRecipesByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getRecipesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        userId
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
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      nextToken
      scannedCount
      count
    }
  }
`;
export const getFollowingsByUserId = /* GraphQL */ `
  query GetFollowingsByUserId(
    $followerId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFollowingsByUserId(
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      scannedCount
      count
    }
  }
`;
export const getIsFollowing = /* GraphQL */ `
  query GetIsFollowing(
    $followingId: ID
    $followerId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getIsFollowing(
      followingId: $followingId
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      scannedCount
      count
    }
  }
`;
export const getFollowersByUserId = /* GraphQL */ `
  query GetFollowersByUserId(
    $followingId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFollowersByUserId(
      followingId: $followingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      scannedCount
      count
    }
  }
`;
export const likesByUserId = /* GraphQL */ `
  query LikesByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        recipeId
        recipe {
          id
          title
          description
          image
          userId
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
      scannedCount
      count
    }
  }
`;
