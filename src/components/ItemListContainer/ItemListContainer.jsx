import React, { useEffect, useState } from 'react'

//Components
import Card from "../Cards/Cards"
import LinearProgress from "../LinearProgress/LinearProgress"

//Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"

//Styles
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getGames = async () => {
            setIsLoading(true)
            const q = query(collection(db, "GamesCatalog"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                docs.push({ ...doc.data(), id: doc.id })
            });
            setGames(docs)
            setIsLoading(false);
        };
        getGames()


    }, [])

    return (
        <div>
            {isLoading ? (
                <LinearProgress />
            ) : (
                <div className="cards_styles">
                    {games.map((game) => (
                        <div key={game.id} className="card_style">
                            <Card game={game} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}
export default ItemListContainer