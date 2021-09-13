import React, { useEffect, useState } from 'react'
import styles from './Posts.module.scss'
import { useDispatch } from 'react-redux'
import {getBooks} from '../../features/books'
import Image from 'next/image'

export default function Posts(){
    const dispatch = useDispatch()
    const [books, setBooks] = useState(null)
    
    useEffect(()=>{
        dispatch(getBooks())
        .unwrap()
        .then((originalPromiseResult)=>setBooks(originalPromiseResult))
    }, [])

    const post = books !== null ? books.results.books.map((book)=>{
        const {title, book_image, description} = book

        return (
            <div className={styles.post}>
                <div>
                    <h1>Minha opinião sobre {title}</h1>
                    <Image 
                        height={500}
                        width={331}
                        src={book_image}
                    />
                    
                    <p>Descrição do livro: {description}</p>
                </div>
                <div className={styles.interations}>
                    <p class={styles.like}>curtir</p>
                    <p>comentários</p>

                </div>
            </div>
        )
    }): ''

    return (
        <div className={styles.postsContainer}>
            {post}
        </div>
    )
}