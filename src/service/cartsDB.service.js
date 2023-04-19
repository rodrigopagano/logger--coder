class CartService {
    constructor (dao){
        this.dao = dao
    }
    getcartsID = (id) => this.dao.getId(id);
    createCart = (carts) => this.dao.create(carts);
    updatetocart =(cid,cart) => this.dao.update({_id:cid},cart)
}

module.exports = CartService