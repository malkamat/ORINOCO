export function panierLocalStorage (store) {
    store.watch(
        (state => {
            localStorage.setItem("panier", JSON.stringify(state.panier))
        })
    )
}