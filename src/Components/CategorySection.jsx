
import ManCategory from '../assets/images/Man.jpg'
import WomenCategory from '../assets/images/women.jpg'
import kidsCategory from '../assets/images/kids.jpg'


const Categories = [
  {
    title: 'Men',
    imageUrl: ManCategory,
  },
  {
    title: 'women',
    imageUrl: WomenCategory,
  },
  {
    title: 'kids',
    imageUrl: kidsCategory,
  }
];


const CategorySection = () => {
  return (

    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {Categories.map((category,index) => (
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
          <div className='absolute top-20 left-12'>
            <p className='text-xl font-bold text-white'>{category.title}</p>
            <p className='text-white'>View All</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
