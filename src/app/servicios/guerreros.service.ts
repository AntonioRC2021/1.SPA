
import { Injectable } from '@angular/core';

@Injectable()
export class GuerrerosService {

  private guerreros:Guerrero[] = [
    {
      nombre: "Vegeta",
      bio: "Vegeta, también conocido como Príncipe Vegeta o Príncipe de todos los Saiyans, es uno de los personajes principales de las sagas de Dragon Ball Z, Dragon Ball Z Kai, Dragon Ball GT y deuteragonista de Dragon Ball Super. Es el hijo mayor del Rey Vegeta, así como el príncipe superviviente del Planeta Vegeta, destruido a manos de Freezer, es el eterno rival de Son Goku, hermano mayor de Tarble, el esposo de Bulma, padre de Trunks y Bra y ancestro de Vegeta Jr.",
      img: "assets/img/Vegeta.png",
      aparicion: " Episodio 2 de Dragon Ball Z",
      afiliacion:"Heroe"
    },
    {
      nombre: "Son Gohan",
      bio: "Son Gohan es uno de los personajes principales de las sagas de Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es un mestizo entre Saiyan y humano terrícola. Es el primer hijo de Son Goku y Chi-Chi, hermano mayor de Son Goten, esposo de Videl y padre de Pan.",
      img: "assets/img/Gohan.png",
      aparicion: "Episodio 1 (Dragon Ball Z)",
      afiliacion:"Heroe"
    },
    {
      nombre: "Razuri (Androide No.18)",
      bio: "Razuri, conocida como Androide Numero 18, es la hermana gemela del Androide Número 17 y una Androide creada a partir de una base humana por el Dr. Gero con el único fin de destruir a Goku. Esta androide se une posteriormente a los Guerreros Z y más tarde termina siendo la esposa de Krilin y la madre de Marron. A pesar de no participar en las batallas contra Majin Boo, lucha contra Super Número 17 en Dragon Ball GT con ayuda de Goku.",
      img: "assets/img/18.png",
      aparicion: "Anime: Episodio 132 de Dragon Ball Z",
      afiliacion:"Heroe"
    },
    {
      nombre: "Piccolo",
      bio: "Piccolo o Piccolo Jr, conocido también como Ma Junior, es uno de los personajes principales que aparece en el manga y anime de Dragon Ball y sus correspondientes secuelas.",
      img: "assets/img/Piccolo.png",
      aparicion: "Episodio 123 de Dragon Ball",
      afiliacion:"Heroe"
    },
    {
      nombre: "Son Goku",
      bio: "Son Goku, es el protagonista principal del manga y anime de Dragon Ball creado por Akira Toriyama. Su nombre de nacimiento es Kakarot y es uno de los pocos Saiyan que lograron sobrevivir a la destrucción total del Planeta Vegeta. Es el segundo hijo de Bardock y Gine, hermano menor de Raditz, nieto adoptivo de Son Gohan, esposo de Chi-Chi, padre de Son Gohan y Son Goten, a su vez también es el abuelo de Pan y ancestro de Son Goku Jr.",
      img: "assets/img/goku.png",
      aparicion: "Episodio 1 (Dragon Ball)",
      afiliacion:"Heroe"
    },
    {
      nombre: "Rapisu (Androide No.17)",
      bio: "Rapisu conocido como Androide Número 17, es el hermano gemelo de la Androide Número 18, quien al igual que ella antes de ser Androide era un humano normal hasta que fueron secuestrados por el Dr. Gero, y es por eso que lo odian. Tras su cambio de humano a Androide, le insertaron un chip con el objetivo de destruir a Son Goku, quien en su juventud extermino al Ejército Red Ribbon. Al considerarse defectuoso porque no quería ser 'esclavo de nadie', el Dr. Gero les había colocado a ambos hermanos, un dispositivo de apagado para detenerlos en cualquier momento de desobediencia, pero cuando el científico los despierta, el rencor y rebeldía de 17 eran tal que se encargó de destruir el control que lo volvería a encerrar y acto seguido mató sin piedad a su propio creador. Su situación se le iría en contra, ya que Cell tenía como misión absorber a 17 y 18 para completar su desarrollo y convertirse en Cell Perfecto.",
      img: "assets/img/17.png",
      aparicion: " Episodio 133 (Dragon Ball Z)",
      afiliacion:"Heroe"
    },
    {
      nombre: "Muten Roshi",
      bio: "Kame-Sen'nin o Muten Roshi, conocido como Maestro Roshi, fue en su momento el Terrícola más fuerte de la Tierra, y mucha gente lo recuerda como el 'Dios de las Artes Marciales', pero antes de poder ostentar dicho título tuvo que trabajar y estudiar las artes marciales con su maestro Mutaito y su eterno rival Tsuru Sen'nin. Es el maestro y fundador del Estilo Tortuga, siendo el primer maestro tanto de Son Goku como de Krilin.",
      img: "assets/img/Maestro-roshi.png",
      aparicion: "Episodio 3 (Dragon Ball)",
      afiliacion:"Heroe"
    },
    {
      nombre: "Freezer",
      bio: "Freezer es un alienígena líder de una Organización Interplanetaria de Comercio junto a su hermano mayor, Cooler, y en secreto, su padre el Rey Cold, es el responsable de la muerte de los padres de Son Goku, y del padre de Vegeta, y de la mayor parte de su raza, los Saiyan. Por todo ello y mucho más, es considerado como el villano insignia de Dragon Ball, el archienemigo de Goku y rival de su antiguo aliado, el príncipe Vegeta.",
      img: "assets/img/Freezer.png",
      aparicion: "Episodio 44 de Dragon Ball Z",
      afiliacion:"Villano"
    },
    {
      nombre: "Kuririn",
      bio: "Kuririn, es un personaje del Manga y Anime de Dragon Ball. Es uno de los principales discípulos de Kame-Sen'nin, Guerrero Z, y el mejor amigo de Son Goku. Es junto a Bulma es uno de los personajes de apoyo principales de Dragon Ball, Dragon Ball Z, Dragon Ball Super. Aparece en Dragon Ball GT como personaje secundario. En la Saga de Majin Boo, se retira de las artes marciales, optando por formar una familia, como el esposo de la Androide Número 18 y el padre de Marron. En Dragon Ball Super se convierte en Policía de Ciudad Satán y recupera su espíritu de lucha, regresando ocasionalmente a su vida de guerrero.",
      img: "assets/img/kuririn.png",
      aparicion: "Episodio 14 (Dragon Ball)",
      afiliacion:"Heroe"
    },
    {
      nombre: "Tenshinhan",
      bio: "Tenshinhan, conocido originalmente en Latinoamérica como Shinto[15], es un personaje que aparece en el manga y en el anime de Dragon Ball, Dragon Ball Z, Dragon Ball GT y posteriormente en Dragon Ball Super. Tenshinhan es un luchador humano de artes marciales descendiente de un clan alienígena, que tras realizar un largo entrenamiento mental, obtuvo un tercer ojo. Es considerado uno de los individuos más poderosos provenientes de la Tierra dentro del Universo de Dragon Ball.",
      img: "assets/img/Tenshinhan.png",
      aparicion: "Episodio 82 (Dragon Ball)",
      afiliacion:"Heroe"
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
  afiliacion: string;
};
