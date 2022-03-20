const ReducersProps = (state) => {
    return {
        language: state.languageReducer.language,
        notificationsCount: state.notificationsReducer.count,
        cart: state.cartReducer.cart,
        currency: state.currencyReducer.currency,
        profile: state.profileReducer.profile,
    }
}

export default ReducersProps