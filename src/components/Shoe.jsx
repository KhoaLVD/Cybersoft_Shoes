
export default function Shoe(props) {
  const {data, getShoesDetail} = props;
  const handleDetail = () =>{
    getShoesDetail(data);
  }
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={data.image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
          </a>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${data.price}</span>
            <button onClick={handleDetail} data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</button>
            
          </div>
        </div>

      </div>
    </>
  )
}
