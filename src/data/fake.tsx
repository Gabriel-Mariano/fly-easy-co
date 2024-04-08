import { Icon } from "@src/components/Icons";
import California from "@src/assets/california.jpeg";
import Londres from "@src/assets/londres.jpg";
import Paris from "@src/assets/paris.jpeg";

export const options = [
    {
        id:"1",
        label:"Voos",
        type:Icon.MaterialCommunityIcons,
        icon:"airplane"
    },
    {
        id:"2",
        label:"Voos",
        type:Icon.FontAwesome5,
        icon:"place-of-worship", 
    },
    {
        id:"3",
        label:"Viagens",
        type:Icon.Fontisto,
        icon:"suitcase-alt"
    }
];

export const offers = [
    {
        id:"1",
        image:California,
        country:"USA", 
        state:"California",
        city:"São Francisco",
        points:"4.8",
    },
    {
        id:"2",
        image:Londres,
        country:"Inglaterra", 
        state:"",
        city:"Londres",
        points:"4.1"
    },
    {
        id:"3",
        image:Paris,
        country:"França", 
        state:"",
        city:"Paris",
        points:"4.5"
    },
]