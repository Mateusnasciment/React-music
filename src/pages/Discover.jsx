import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
// Os Geners irei importar um array com title,categoria e valor

const Discover = () => {
    const genresTitle = 'Pop';
    return(
        <div className="flex flex-col"> 
            <div className="w-full flex justify-between items-center
            sm:flex-row flex-col mt-4 mb-10">
                    <h2 ClassName="font-bold text-3x1 text-white text-left">Discover {genresTitle}</h2>
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
