const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    des: { type: String, required: true },
    SKU: { type: String, required: true },
    category_id: { type: Number, required: true },
    inventory_id: { type: Number, required: true },
    price: { type: Number, required: true },
    discount_id: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null } // Assuming deleted_at can be null if not deleted
});

module.exports = mongoose.model("Product", productSchema);
