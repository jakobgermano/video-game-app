import GameCard from "./GameCard";
import {useGetAllGamesQuery} from "./features/gameSlice";

function Games(){

    const { data, error, isLoading, isSuccess }= useGetAllGamesQuery();
    

    return(
        <>
            <div>
                
                <h1>Games you own</h1>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {data?.map((g) => 
                <GameCard key = {g.id} game = {g} isSuccess = {isSuccess}/>
                )}
            </div>
        </>

    )
}


export default Games;