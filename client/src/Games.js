import React, { useEffect } from "react";
import GameCard from "./GameCard";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useGetAllGamesQuery} from "./features/gameSlice";

function Games(){

    const { data, error, isLoading, isSuccess }= useGetAllGamesQuery();
    

    return(
        <>
            <div>
                
                <h3>Games you own</h3>
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