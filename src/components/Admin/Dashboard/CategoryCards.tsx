import { Categories } from "../../../utils/categories"
const CategoryCards = () => {
    let category = Categories[Math.floor(Math.random() * Categories.length)];
  return (
    <div className="bg-red-500 min-h-[9rem] p-10 rounded-lg">
        {/* Catgory card */}
        
    </div>
  )
}

export default CategoryCards