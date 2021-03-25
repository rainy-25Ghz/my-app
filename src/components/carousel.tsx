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

const Carousel: React.FC<propsForCarousel> = ({
  srcs,
  spacing = 0,
  itemWidth = 300,
  itemHeight = 200,
}) => {
  const [translateX, setTranslateX] = useState(-itemWidth);
  const [mysrcs, setMysrcs] = useState([""]);
  let slide_track = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    let length = srcs.length;
    setMysrcs([srcs[length - 1], ...srcs, srcs[0]]);
  }, [srcs]);
  useEffect(() => {
    let id: NodeJS.Timeout = setInterval(() => {
      setTranslateX((translateX) => {
        let temp = translateX - itemWidth;
        if (temp === -mysrcs.length * itemWidth) {
          temp = -2 * itemWidth;
        }
        if (temp === -mysrcs.length * itemWidth + itemWidth)
          setTimeout(() => {
            if (slide_track.current?.style) {
              slide_track.current.style.transition = "none";
              slide_track.current.style.transform = `translateX(${-itemWidth}px)`;
              setTimeout(() => {
                console.log("immediate");
                if (slide_track.current?.style)
                  slide_track.current.style.transition = "0.3s ease-in-out";
              }, 0);
            }
          }, 400);
        return temp;
      });
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [mysrcs.length, itemWidth]);
  return (
    <div className={styles.container} style={{ width: itemWidth }}>
      <div
        ref={slide_track}
        className={styles.slide_track}
        style={{
          width: itemWidth * mysrcs.length,
          transition: "0.3s ease-in-out",
          transform: `translateX(${translateX}px)`,
        }}
        // style={calculateStyleForSlideTrack(
        //   currentIndex,
        //   itemWidth,
        //   srcs.length
        // )}
      >
        {mysrcs.map((src, index) => {
          return (
            <div className={styles.item_container}>
              <img src={src} alt="img fails to load"></img>
              <h1>{index}</h1>
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
