export const Product_QUERY = `
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
