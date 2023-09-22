import React from "react";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
import heroStyles from "@/app/styles/herosection.module.css";
import Image from "next/image";
const page = async () => {
   const url = process.env.RAPID_KEY;

   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
         "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
   };

   const res = await fetch(url, options);
   const data = await res.json();
   const main_data = data.titles;
   console.log(main_data.jawSummary);

   return (
      <section className={styles.movieSection}>
         <div className={styles.container}>
            <h1>Movie Page</h1>
            {main_data.map((currElem) => {
               return <MovieCard key={currElem.id} {...currElem} />;
            })}
         </div>
      </section>
   );
};

export default page;
