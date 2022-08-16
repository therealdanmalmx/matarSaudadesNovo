const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Product not fetched");
  }
}

export async function getCollections() {
  const query = `{
    collections(first: 10) {
      edges {
        node {
          id
          title
          handle
          image {
            originalSrc
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  const allCollections = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return allCollections;
}
export async function getCollection(handle) {
  const query = `{
    collectionByHandle(handle: "${handle}") {
      id
      title
      handle
      image {
        originalSrc
      }
    }
  }`;

  const response = await ShopifyData(query);
  const singleCollection = response.data.collectionByHandle
    ? response.data.collectionByHandle
    : [];

  return singleCollection;
}

export async function getProductsInCollections(handle) {
  const query = `{
    collectionByHandle(handle: "${handle}") {
      title
      handle
      products(first: 50) {
        edges {
           node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 3) {
              edges {
                node {
                  altText
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  const allProducts = response.data.collectionByHandle
    ? response.data.collectionByHandle
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `{
    products(first: 25) {
      edges {
        node {
          handle
          id
          collections(first:25) {
            edges {
              node {
                handle
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle) {
  const query = `{
    productByHandle(handle: "${handle}") {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 3) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}

export async function createCheckout(id, quantity) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems:[{variantId: "${id}", quantity: "${quantity}"}]
        
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}", 
      quantity: "${item.quantity}",
    }`;
  });

  const query = `
    mutation {
      checkoutLineItemsReplace(lineItems:[], checkoutId: "") {
        checkout{
          id
          webUrl
        }
      }
    }
  `;
  const response = await ShopifyData(query);

  const checkout = response.dcheckoutLineItemsReplace
    ? response.checkoutLineItemsReplace
    : [];

  return checkout;
}
