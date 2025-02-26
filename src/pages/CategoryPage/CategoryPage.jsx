import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

//Components
import Card from "../../components/Cards/Cards"
import LinearProgress from "../../components/LinearProgress/LinearProgress"

//Firebase
import { collection, query, getDocs} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"

//Styles
import './CategoryPage.css'

import React from 'react'

const CategoryPage = () => {
    const { categoryId } = useParams()
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getGames = async () => {
            const q = query(collection(db, "GamesCatalog"));
            const querySnapshot = await getDocs(q);
            const docs = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((game) => game.cat.includes(categoryId));
            setGames(docs);
            setIsLoading(false);
        };
        getGames()
    }, [categoryId])


    return (
        <div>
            {isLoading ? (
                <LinearProgress />
            ) : (
                <div className="cards_styles">
                    {games.map((game) => (
                        < div key={game.id} className="card_style" >
                            <Card game={game} />
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
}

export default CategoryPage