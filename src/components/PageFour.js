// import React, { useState } from 'react';
// const LoadMoreExample = () => {
//     const [itemsToShow, setItemsToShow] = useState(5);
//     const [allItems] = useState([...]);
//     const loadMore = () => {

//         setItemsToShow(prevItemsToShow => prevItemsToShow + 5);
//     };
//     return (
//         <div>
//             { }
//             {allItems.slice(0, itemsToShow).map(item => (
//                 <div key={item.id}>
//                     { }
//                     <p>{item.name}</p>
//                 </div>
//             ))}
//             { }
//             {itemsToShow < allItems.length && (
//                 <button onClick={loadMore}>Load More</button>
//             )}
//         </div>
//     );
// };
// export default LoadMoreExample;


export const PageFour = () =>{
    return <div className=" flex items-center">
        <div className="items-center flex m-auto border-2 p-[20px] rounded-[6px] text-gray-600">
            <p>Load More</p>

        </div>
    </div>
}