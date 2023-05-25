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
                alternativeText
                url
              }
            }
          }
        }
        
      }
    }
  }
`;

export const getAllProducts = `
query getAllProducts($slug: String!) {
  produtos(filters: {categoria: {slug: {eq: $slug}}}) {
  data {
    id
    attributes{
        title
        description
        price
        slug
        image{
          data{
            attributes{
              alternativeText
              url
            }
          }
        }
        categoria {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
      product_quantity
      product_quantity_size
      product_quantity_measure
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
        attributes {
          title
          slug
          price
          description
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;
