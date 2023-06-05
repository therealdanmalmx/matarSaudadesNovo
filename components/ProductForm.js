import { formatter } from '../utils/helpers';
import useTranslation from 'next-translate/useTranslation';
import { useStoreContext } from '../context/NewContext';

export default function ProductForm({ produto }) {
  const { quantity, addQuantity, removeQuantity, addToCart } =
    useStoreContext();

  const products = produto.map((product) => {
    return {
      image: product.attributes.image.data.url,
      id: product.id,
      quantity: 1,
      price: product.attributes.price,
    };
  });

  const { title, description, price } = produto[0].attributes;
  let { t } = useTranslation('common');

  return (
    <div className="flex flex-col justify-between h-full">
      <p className="font-merriweather text-2xl font-bold md:text-left md:text-[1.625rem]">
        {title}
      </p>
      <p className="font-noto-sans md:mt-4 md:mb-4 mt-2 leading-6">
        {description}
      </p>
      <span className="font-merriweather text-red text-2xl mt-4 md:text-3xl leading-10">
        {formatter.format(price)}
      </span>
      <div className="flex flex-row items-start justify-between w-8/10 md:w-3/6 mt-6">
          <button
            onClick={() => {
              addToCart(produto[0].attributes, quantity);
            }}
            className="font-inter bg-red hover:border-2 h-12 w-32 md:w-28 md:px-3 md:hover:bg-white md:hover:text-red px-2 ml-0 font-bold text-white duration-300 ease-in-out"
          >
            {t('product.add')}
          </button>
          <div className="flex flex-row">
            <button
              className="flex items-center justify-center w-16 md:w-10 h-12 p-2 border"
              onClick={removeQuantity}
            >
              -
            </button>
            <input
              className="w-12 md:w-10 h-12 text-center border"
              type="text"
              id="quantity"
              placeholder={quantity}
            />
            <button
              className="flex items-center justify-center w-16 md:w-10 h-12 p-2 border"
              onClick={addQuantity}
            >
              +
            </button>
          </div>
      </div>
    </div>
  );
}
