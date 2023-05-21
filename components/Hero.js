import { useQuery, gql } from 'urql';
import Image from 'next/image';
import Link from 'next/link';

const GET_SINGLE_TYPE = gql`
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
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

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
    <div className="hero-banner">
      Banner
      <h1 className="hero-banner__title">{Slide.title}</h1>
      <img
        src={`${process.env.STRAPI_URL || 'http://localhost:1337'}${
          Slide.image.data[0].attributes.url
        }`}
        width={1920}
        height={1080}
      />
      <Link className="hero-banner__url" href={Slide.buttons[0].url}>
        {Slide.buttons[0].label}
      </Link>
    </div>
  );
}
