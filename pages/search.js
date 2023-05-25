import { useStoreContext } from '../context/NewContext';
import { getOneProduct } from "../../lib/query";
import { useQuery } from "urql";
import { useRouter } from 'next/router';

const PAGE_SIZE = 2;
const prices = [

];

export default Search = (props) => {
    const router = useRouter();

    const {
        query = 'all',
        category = 'all',
        price = 'all',
        brand = 'all',
        rating = 'all',
        sort = 'all',
        pageSize = 1
    } = router.query;
    
    const { products, countProducts, categories, brands, pages} = props;

    const filterSearch = ({
        page,
        category,
        brand,
        sort,
        min,
        max,
        searchQuery,
        price,
        rating,
    }) => {
        const  { query } = router;

        if (page) {
            query.page = page;
        }
        if (category) {
            query.category = category;
        }
        if (brand) {        
            query.brand = brand;
        }
        if (sort) {       
            query.sort = sort;
        }
        if (min) {       
            query.min ? query.min : query.min === 0 ? 0 : min;
        }
        if (max) {       
            query.max ? query.max : query.max === 0 ? 0 : max;
        }
        if (searchQuery) {       
            query.searchQuery = searchQuery;
        }
        if (rating) {       
            query.rating = rating;
        }
        if (price) {       
            query.price = price;
        }

        router.push({
            pathname: router.pathname,
            query: query,
        });
    };
    const categoryHandler = (e) => {
        filterSearch({ category: e.target.value });
    }
    const pageHandler = (e) => {
        filterSearch({ page: e.target.value });
    }
    const brandHandler = (e) => {
        filterSearch({ brand: e.target.value });
    }
    const sortHandler = (e) => {
        filterSearch({ sort: e.target.value });
    }
    const priceHandler = (e) => {
        filterSearch({ price: e.target.value });
    }
    const ratingHandler = (e) => {
        filterSearch({ rating: e.target.value });
    }
    
const product = router.query;
const [results] = useQuery({
    query: getOneProduct,
    variables: { slug: product },
});
  const { data, fetching, error } = results;
    const {addToCart} = useStoreContext();
    const addToCartHandler = (product) => {
        const existItem = addToCart.find((x) => x.id === product.id);
        const quantiy = existItem ? existItem.quantity + 1 : 1;
    }

}
