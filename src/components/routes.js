// import des composant racines 
import Accueil from "../components/Accueil/Accueil"
import Produit from "../components/Produit/Produit"
import Panier from "../components/Panier/Panier"
import Confirmation from "../components/Confirmation/Confirmation"
import NotFound from "../components/NotFound/NotFound"

// def des routes et des coposant racines à utiliser
export default [
    {path: "/", component: Accueil},
    {path: "/:categorie/:id", component: Produit},
    {path: "/panier", component: Panier},
    {path: "/confirmation", component: Confirmation},
    {path: "/*", component: NotFound},
]