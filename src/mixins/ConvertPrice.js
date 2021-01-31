export const convertPrice = {
    data() {
        return {
          longueur: 0,
          
        }
      },
      methods: {
        convertPrice: function(produitPrix) {
          this.longueur = produitPrix.toString().split("").length  
         return ` ${produitPrix.toString().split("").splice(" " ,this.longueur - 2).join("")}.${produitPrix.toString().split("").splice(this.longueur - 2, this.longueur - 1).join("")} €`
          
        },
    }
}