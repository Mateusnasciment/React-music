import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
// Os Geners irei importar um array com title,categoria e valor

const Discover = () => {
    console.log(genres);
    return(
        <div className="flex flex-col"> 
            <div className="w-full flex justify-between items-center
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3x1 text-white">
                    <h2>Discover</h2>
                </div>
                <select
                    onChange={() => {}}
                    value=""
                    ClassName="bg-black text-gray-300"
                />
            </div>
        </div>
        )
    }

export default Discover;
