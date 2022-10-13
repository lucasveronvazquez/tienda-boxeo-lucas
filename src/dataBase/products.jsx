import guantesBlancos from "../assets/winningwhite.jpg";
import guantesNegros from "../assets/winningblack.jpg";
import guantesVerdes from "../assets/winninggreen.jpg";
import guantesAmarillos from "../assets/winningyellow.jpg";
import botasNegras from "../assets/asicshoesblack.jpg";
import botasAmarillas from "../assets/asicshoesyellow.jpg";
import cascoRojo from "../assets/headgearred.jpg";
import cascoAzul from "../assets/headgearblue.jpg";
import protectorRojo from "../assets/bodyprotector.jpg";
import protectorNegro from "../assets/bodyprotectorblack.jpg";
import doblePera from "../assets/doublendbag.jpg";
import peraSimple from "../assets/singlendbag.jpg";
 
export const products = [
    {id:1, title: "winning white laces", category:"guantes", price: "335usd", pictureUrl: guantesBlancos, stock:8, sizes:["10oz","12oz","14oz","16oz"]},
    {id:2, title: "winning black laces",category:"guantes", price: "335usd", pictureUrl: guantesNegros, stock:8, sizes:["10oz","12oz","14oz","16oz"]},
    {id:3, title: "winning green laces", category:"guantes",price: "470usd", pictureUrl: guantesVerdes, stock:4, sizes:["10oz","12oz","14oz","16oz"]},
    {id:4, title: "winning yellow laces", category:"guantes", price: "470usd", pictureUrl: guantesAmarillos, stock:4, sizes:["10oz","12oz","14oz","16oz"]},
    {id:5, title: "asics black shoes", category:"indumentaria", price: "335usd", pictureUrl: botasNegras, stock:6 , sizes:["27cm","27.5cm","28cm","28.5cm","29cm","30cm"]},
    {id:6, title: "asics yellow shoes", category:"indumentaria", price: "335usd", pictureUrl: botasAmarillas, stock:6 , sizes:["27cm","27.5cm","28cm","28.5cm","29cm","30cm"]},
    {id:7, title: "winning headgear red", category:"equipamiento", price: "475usd", pictureUrl: cascoRojo, stock:3 , sizes:["M","L","XL"]},
    {id:8, title: "winning headgear blue", category:"equipamiento", price: "475usd", pictureUrl: cascoAzul, stock:3 , sizes:["M","L","XL"]},
    {id:9, title: "winning body protector red", category:"equipamiento", price: "580usd", pictureUrl: protectorRojo, stock:2},
    {id:10, title: "winning body protector black", category:"equipamiento",price: "490usd", pictureUrl: protectorNegro, stock:2},
    {id:11, title: "winning double end bag", category:"equipamiento", price: "230usd", pictureUrl: doblePera, stock:5},
    {id:12, title: "winning simple bag", category:"equipamiento",price: "190usd", pictureUrl: peraSimple, stock:4},

]