import { useQuery, gql } from 'urql';
import Image from 'next/image';
import Link from 'next/link';

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

  const { homePage } = data;

  const { Slide } = homePage.data.attributes;

  return (
    <div>
      {Slide.title}
      {Slide.image.data.map((slide) => (
        <Image src={slide.attributes.url} width={1920} height={1080} />
      ))}
      {Slide.buttons.map((button) => (
        <Link href={button.url}>{button.label}</Link>
      ))}
    </div>
  );
}
