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
      <span className="font-merriweather text-red text-3xl leading-10">
        {formatter.format(price)}
      </span>
      <div className="flex items-start justify-start mt-6">
        <div className="flex-rows flex justify-between">
          <button
            className=" flex items-center justify-center w-6 h-12 p-2 border"
            onClick={removeQuantity}
          >
            -
          </button>
          <input
            className="w-10 h-12 text-center border"
            type="text"
            id="quantity"
            placeholder={quantity}
          />
          <button
            className=" flex items-center justify-center w-6 h-12 p-2 border"
            onClick={addQuantity}
          >
            +
          </button>
          <button
            onClick={() => {
              addToCart(produto[0].attributes, quantity);
            }}
            className="font-inter bg-red hover:border-2 md:h-12 md:w-28 md:px-3 md:py-2 md:ml-5 md:hover:bg-white md:hover:text-red px-2 ml-5 font-bold text-white duration-300 ease-in-out"
          >
            {t('product.add')}
          </button>
        </div>
      </div>
    </div>
  );
}
