export default function({ store, redirect }) {
  // Si l'utilisateur n'est pas authentifié
  if (store.state.islogged === true) {
    return redirect('/home')
  } else {
    return redirect('/')
  }
}
