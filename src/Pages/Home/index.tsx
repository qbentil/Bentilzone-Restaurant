import { FruitsSection, ShowcaseBanner } from "../../components"




const Home = () => {
  return (
    <div className='flex w-full h-auto flex-col items-center justify-center'>
      <ShowcaseBanner />
      <FruitsSection />
    </div>

  )
}

export default Home