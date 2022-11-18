export const getAllProducts = `
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

export const getCategories = `
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
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
