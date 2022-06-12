import { FruitsSection, ShowcaseBanner, MenuSection } from "../../components"




const Home = () => {
  return (
    <div className='flex w-full h-auto flex-col items-center justify-center'>
      <ShowcaseBanner />
      <FruitsSection />
      <MenuSection />
    </div>

  )
}

export default Home