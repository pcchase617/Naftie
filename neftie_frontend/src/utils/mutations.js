import { gql } from "@apollo/client";


export const LOGIN = gql`
  mutation login($email: String!,
               $password: String!) {
    login(email: $email,
         password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost(
    $title: String!
    $message: String!
    $comment: String!
  ) {
    addPost(
      creator: $creator
      message: $message
    ) {
      _id
      message
      creator 
      tags
      createdAt
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;
//  typedef
    // _id: ID
    // message: String
    // creator: String
    // tags: [String]
    // selectedFile: String
    // likeCount: Int
    // createdAt: Date
    // comments: [Comment]!
//post needs to be design better on the backend
// export const REMOVE_POST = gql`
//   mutation removePost($postId: ID!) {
//     removePost(postId: $postId) {
//       _id
//       messa

export const ADD_COMMENT = gql`
  mutation addComment(
    $userId: ID!
    $comment: String!
    $postId: ID!
  ) {
    addComment(
      userId: $userId
      comment: $comment
      postId: $postId
    ) {
      _id
      comment
      createdAt
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment(
    $commentId: ID!
    $postId: ID!
  ) {
    removeComment(
      commentId: $commentId
      postId: $postId
    ) {
      _id
      comment
      createdAt
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;















// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;
