'use client'


import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";


export default function Runner () {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return (
        <main className={"main-inner"}>
            {runnerGames &&
          <CardsListSection id="runner" title="Ранеры" data={runnerGames} />
       }
        </main>
    )
}