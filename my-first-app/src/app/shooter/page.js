'use client'



import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";


export default function New() {

    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
        <main className={"main-inner"}>
            {shooterGames &&
                <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />}
        </main>
    )
}