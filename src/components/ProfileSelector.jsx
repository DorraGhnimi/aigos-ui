import {HeartCrack, Heart} from 'lucide-react'

const ProfileSelector = () => {
    return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden bg-white ">
        <div className="relative ">
            <img src="http://localhost:8080/images/69e96be7-17cb-4fec-92ce-7484b5025a6f.jpg"/>
            <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
                <h2 className="text-3xl font-bold ">floki rag ivar</h2>
            </div>
        </div>
        <div className="p-4">
                <h2 className="text-gray-500 mb-5">bio biobio biobio biobio biobio biobio biobio biobio biobio biobio biobio bio</h2>
            </div>
        <div className="p-4 flex justify-between">
            <button className='bg-red-600 rounded-full p-4 hover:bg-red-700 text-white'
                onClick={()=> console.log('left')}
            >
                <HeartCrack size={40}/>
            </button>
            <button  className='bg-green-600 rounded-full p-4 hover:bg-green-700 text-white'
                onClick={()=> console.log('right')}
            >
                <Heart size={40}/>
            </button>
        </div>
    </div>)
}

export default ProfileSelector;


