import { gql } from '@apollo/client';

//user mutations

export const ADD_USER = gql`
    mutation addUser($input: UserInput!) {
        createUser(input: $input) {
            user {
                username
                email
                password
            }
        }
    }    
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

//book mutations

export const ADD_BOOK = gql`
    mutation addBook($input: UserInput) {
        addBook(input: $input) {
            authors
            description
            bookId
            image
            link
            title
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation removeBook($input: UserInput) {
        deleteBook(input: $input) {
            bookId
        }
    }
`