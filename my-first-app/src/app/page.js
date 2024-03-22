'use client'
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";

import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";


export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main">
      <Banner />
      
        {popularGames &&
          <CardsListSection id="popular" title="Популярные" type="slider" data={popularGames} />
        }
      
      
        {newGames &&
          <CardsListSection id="new" title="Новинки" type="slider" data={newGames} />
        }
      
      <Promo />
    </main>
  )
}
