'use client'

import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";


export default function Popular () {

    const popularGames = useGetDataByCategory(endpoints.games, "popular"); 
    return (
        <main className={"main-inner"}>
            {popularGames &&
                <CardsListSection id="popular" title="Популярные" data={popularGames} />
            }
        </main>
    )
}