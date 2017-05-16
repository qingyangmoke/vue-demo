/**
 * Created by song on 2017/4/6.
 */
// export const evenOrOdd = state => {
//   return state.cart.added.map(({id, quantity}) => {
//     const product = state.products.all.find(p => p.id === id)
//     return {
//       title: product.title,
//       price: product.price,
//       quantity
//     }
//   })
// }
export const evenOrOdd = state => {
  return state.cart.count % 2 === 0 ? 'even' : 'odd'
}
