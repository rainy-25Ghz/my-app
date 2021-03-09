import { useEffect, useState } from 'react';
import styles from './carousel.module.css';
interface propsForCarousel {
    srcs: string[]
}
export default function Carousel(props: propsForCarousel) {
    return (
        <div className={styles.container}>
            {props.srcs.map(item => {
                return <img src={item}></img>
            })}
        </div>
    )
}