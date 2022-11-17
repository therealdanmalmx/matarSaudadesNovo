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
        attributes{
          image{
            data{
              attributes{
                url
              }
            }
          }
          title
        }
      }
    }
  }
`;
