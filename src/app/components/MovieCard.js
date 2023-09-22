import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
const MovieCard = (currElem) => {
   const { id, type, title, synopsis } = currElem.jawSummary;
   return (
      <div className={styles.card}>
         <duv className={styles.card_image}>
            <Image
               src={currElem.jawSummary.backgroundImage.url}
               alt={title}
               width={260}
               height={200}
            />
         </duv>
         <div className={styles.card_data}>
            <h2>{title}</h2>
            <p>{synopsis}</p>
            <Link href={`/gallery/${id}`}>
               {" "}
               <button>Read More</button>
            </Link>
         </div>
      </div>
   );
};

export default MovieCard;
