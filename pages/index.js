import Link from 'next/link'

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className='text-3xl font-bold mt-4'>O novo <span className='italic'>look</span> da Matar Saudades</h1>
      <Link href='/produtos' passHref>
        <button className='
          rounded-full w-1/4 
          mt-6 
          bg-green-600 
          hover:bg-green-500 
          px-6 
          py-3 
          text-white 
          hover:text-smoke 
          font-bold
          '
        >Produtos
        </button>
      </Link >
      <Link href='/categories' passHref>
        <button className='
          rounded-full w-1/4 
          mt-6 
          bg-green-600 
          hover:bg-green-500 
          px-6 
          py-3 
          text-white 
          hover:text-smoke 
          font-bold
          '
        >Categorias
        </button>
      </Link >
    </div>
  )
}

export default Home
