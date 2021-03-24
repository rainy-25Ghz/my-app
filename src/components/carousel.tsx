import { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import * as React from "react";
import { scryptSync } from "crypto";

// function handleTouchStart(ev: React.TouchEvent<HTMLInputElement>): void {
//   const touches: React.TouchList = ev.changedTouches;
//   console.log(touches[0]);
// }
// function handleTouchMove(ev: React.TouchEvent<HTMLInputElement>): void {
//   const touches: React.TouchList = ev.changedTouches;
//   console.log(touches[0]);
// }
interface propsForCarousel {
  srcs: string[];
  spacing?: number;
  itemWidth?: number;
  itemHeight?: number;
}
interface SlideTrackStyle {
  width: number;
  transition: string;
  transform: string;
}
function calculateStyleForSlideTrack(
  currentIndex: number,
  itemWidth: number,
  length: number
): SlideTrackStyle {
  // {
  //   width: itemWidth * srcs.length,
  //   transition: "0.5s ease-in-out",
  //   transform: `translateX(${calculateX(currentIndex,itemWidth,srcs.length)}px)`,
  // }
  console.log(currentIndex);
  if (currentIndex === length)
    return {
      width: itemWidth * length,
      transition: "none",
      transform: `translateX(${0 * itemWidth}px)`,
    };
  return {
    width: itemWidth * length,
    transition: "0.5s ease-in-out",
    transform: `translateX(${-currentIndex * itemWidth}px)`,
  };
}

const Carousel: React.FC<propsForCarousel> = ({
  srcs,
  spacing = 0,
  itemWidth = 300,
  itemHeight = 200,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let id: NodeJS.Timeout = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % (srcs.length + 1));
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className={styles.container} style={{ width: itemWidth }}>
      <div
        className={styles.slide_track}
        style={calculateStyleForSlideTrack(
          currentIndex,
          itemWidth,
          srcs.length
        )}
      >
        {srcs.map((src, index) => {
          let style = {};
          if (currentIndex === srcs.length && index === 0)
            style = { transform: `translateX(${srcs.length * itemWidth}px)` };
          return (
            <div className={styles.item_container} style={style}>
              <img src={src} alt="img fails to load"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// if (
//   index === currentIndex ||
//   index === (currentIndex + 1) % srcs.length
// )
//         return (
//           <div
//             className={`${styles.item_container}\t${styles.animated}`}
//             // onTouchStart={handleTouchStart}
//             // onTouchMove={handleTouchMove}
//             style={{
//               width: `${itemWidth}px`,
//               transform: `translateX(${
//                 index >= currentIndex
//                   ? -itemWidth * (index - currentIndex)
//                   : -itemWidth * (srcs.length + index - currentIndex)
//               }px)`,
//             }}
//           >
//             {index}
//             <img src={item} alt="img failed" />
//           </div>
//         );
//       else
//         return (
//           <div
//             className={styles.item_container}
//             // onTouchStart={handleTouchStart}
//             // onTouchMove={handleTouchMove}
//             style={{
//               width: `${itemWidth}px`,
//               transform: `translateX(${
//                 index >= currentIndex
//                   ? itemWidth * (index - currentIndex)
//                   : itemWidth * (srcs.length + index - currentIndex)
//               }px)`,
//             }}
//           >
//             {index}
//             <img src={item} alt="img failed" />
//           </div>
//         );
//     })}
//   </div>
// );

export default Carousel;
