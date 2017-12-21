
import { Injectable } from '@angular/core';

@Injectable()
export class GuerrerosService {

  private guerreros:Guerrero[] = [
    {
      nombre: "Vegeta",
      bio: "Vegeta, también conocido como Príncipe Vegeta o Príncipe de todos los Saiyans, es uno de los personajes principales de las sagas de Dragon Ball Z, Dragon Ball Z Kai, Dragon Ball GT y deuteragonista de Dragon Ball Super. Es el hijo mayor del Rey Vegeta, así como el príncipe superviviente del Planeta Vegeta, destruido a manos de Freezer, es el eterno rival de Son Goku, hermano mayor de Tarble, el esposo de Bulma, padre de Trunks y Bra y ancestro de Vegeta Jr.",
      img: "assets/img/Vegeta.png",
      aparicion: " Episodio 2 de Dragon Ball Z",
      universo:"7"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/Gohan.png",
      aparicion: "1939-05-01",
      universo:"7"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/18.png",
      aparicion: "1964-01-01",
      universo: "7"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/Piccolo.png",
      aparicion: "1962-05-01",
      universo:"7"
    },
    {
      nombre: "Son Goku",
      bio: "Son Goku, es el protagonista principal del manga y anime de Dragon Ball creado por Akira Toriyama. Su nombre de nacimiento es Kakarot y es uno de los pocos Saiyan que lograron sobrevivir a la destrucción total del Planeta Vegeta. Es el segundo hijo de Bardock y Gine, hermano menor de Raditz, nieto adoptivo de Son Gohan, esposo de Chi-Chi, padre de Son Gohan y Son Goten, a su vez también es el abuelo de Pan y ancestro de Son Goku Jr.",
      img: "assets/img/goku.png",
      aparicion: "Episodio 1 (Dragon Ball)",
      universo: "7"
    },
    {
      nombre: "",
      bio: "Freezer es un alienígena líder de una Organización Interplanetaria de Comercio junto a su hermano mayor, Cooler, y en secreto, su padre el Rey Cold, es el responsable de la muerte de los padres de Son Goku, y del padre de Vegeta, y de la mayor parte de su raza, los Saiyan. Por todo ello y mucho más, es considerado como el villano insignia de Dragon Ball, el archienemigo de Goku y rival de su antiguo aliado, el príncipe Vegeta.",
      img: "assets/img/17.png",
      aparicion: "1962-08-01",
      universo: "7"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/Maestro-roshi.png",
      aparicion: "1974-11-01",
      universo: "7"
    },
    {
      nombre: "Freezer",
      bio: "Freezer es un alienígena líder de una Organización Interplanetaria de Comercio junto a su hermano mayor, Cooler, y en secreto, su padre el Rey Cold, es el responsable de la muerte de los padres de Son Goku, y del padre de Vegeta, y de la mayor parte de su raza, los Saiyan. Por todo ello y mucho más, es considerado como el villano insignia de Dragon Ball, el archienemigo de Goku y rival de su antiguo aliado, el príncipe Vegeta.",
      img: "assets/img/Freezer.png",
      aparicion: "Episodio 44 de Dragon Ball Z",
      universo: "7"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/kuririn.png",
      aparicion: "1962-08-01",
      universo: "7"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/Tenshinhan.png",
      aparicion: "1962-08-01",
      universo: "7"
    },
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }

  getGuerreros(){
    return this.guerreros
  }

  getGuerrero( idx: string ){
    return this.guerreros[idx];
  }


}


export interface Guerrero{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  universo: string;
};
