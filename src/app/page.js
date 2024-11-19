"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Scoreboard from "./Scoreboard";
import Canvas from "./Canvas";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Ejercicio 1</h1>
      <Scoreboard />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 2</h1>
      <Canvas />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 3</h1>
      

    </div>
  );
}
