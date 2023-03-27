import { useQuery, gql } from 'urql';
import Image from 'next/image';

const GET_SINGLE_TYPE = `
  query HomePage {
    homePage {
      data {
        id
        attributes {
          title
          Slide {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
            buttons {
              label
              url
            }
          }
        }
      }
    }
  }
`;

export default function Hero() {
  const [result, reexecuteQuery] = useQuery({
    query: GET_SINGLE_TYPE,
  });

  const { data, fetching, error } = result;

  console.log(data);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <div></div>;
}
