export const GET_PRODUCTS = `
  query {
    produtos{
      data{
        attributes{
          title
          description
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORIES = `
  query {
    categorias{
      data{
        id
        attributes{
          title
          slug
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;
