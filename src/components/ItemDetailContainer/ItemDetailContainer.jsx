//react
import { useEffect, useState } from 'react'

//Components
import CardDetail from "../CardDetail/CardDetail"
import GamesDescription from "../GameDescription/GameDescription"
import LinearProgress from "../LinearProgress/LinearProgress"

//Firebase
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"

//styles
import "./ItemDetailContainer.css"

import React from 'react'

const ItemDetailContainer = ({ id }) => {
    const [game, setGame] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getGame = async () => {
            const q = query(collection(db, "GamesCatalog"), where(documentId(), "==", id));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                docs.push({ ...doc.data(), id: doc.id })
            });
            setGame(docs)
            setIsLoading(false)
        };
        getGame()
    }, [id])


    return (
        <div>
            {isLoading ? (
                <LinearProgress />
            ) : (
                <div>
                    {game.map((detailgame) => (
                        <div key={detailgame.id} className="detail_style">
                            <CardDetail game={detailgame} />
                            <GamesDescription desc={detailgame} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ItemDetailContainer