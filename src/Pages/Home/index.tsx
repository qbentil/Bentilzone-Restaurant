import { Cart, FruitsSection, MenuSection, ShowcaseBanner, } from "../../components"

const Home = () => {
  return (
    <div className='flex w-full h-auto flex-col items-center justify-center'>
      <ShowcaseBanner />
      <FruitsSection />
      <MenuSection />
      <Cart />
    </div>

  )
}

export default Home