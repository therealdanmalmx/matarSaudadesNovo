import { getCollections } from '../lib/Shopify'
export const formatter = new Intl.NumberFormat('sfb', {
    style:  'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
}) 

export const getStaticProps = async () => {
    const collections = await getCollections()
    return {
      props: { collections }, // will be passed to the page component as props
    }
  }