import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query getSingleUser($userId) {
        user(userId: $userId) {
            id
            username
            email
            password
            savedBooks {
                bookId
                title
                authors{}
                description
                image
                link
            }
        }
    }
`