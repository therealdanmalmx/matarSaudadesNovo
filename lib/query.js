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
              }
            }
          }
        }
        
      }
    }
  }
`;

// export const getCategory = `

//   query getQuery($slug: String!) {
//     categorias(filters: {slug: {eg: ${slug}}{
//       data{
//         id
//         attributes{
//           title
//           slug
//           image{
//             data{
//               attributes{
//                 url
//                 width
//                 height
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const getAllProducts = `
  query {
    produtos {
      data {
        id
        attributes {
          title
          slug
          price
          description
          categoria {
            data{
              attributes{
                title
                slug
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const getOneProduct = `
  query getProduct($slug: String!) {
    produtos(filters: {slug: {eq: $slug}}) {
      data{
        id
        attributes{
          title
          slug
          price
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

// export const getProductsFromCategory = `
//   query getProductCategory($slug: String!) {
//     produtos(filters: {slug: {eq: $slug}}) {
//       data{
//         id
//         attributes{
//           title
//           slug
//           price
//           description
//           image{
//             data{
//               attributes{
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const getProductsFromCategory = `
//   query {
//     produtos(filters: {slug: {eq: $slug}}) {
//       data {
//         id
//         attributes {
//           title
//           slug
//           price
//           description
//           image {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           categoria {
//             data{
//               attributes{
//                 slug
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
