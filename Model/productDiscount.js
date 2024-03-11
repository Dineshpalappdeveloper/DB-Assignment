const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productDiscountSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    des: { type: String, required: true },
    discount_percent: { type: Number, required: true },
    active: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null } // Assuming deleted_at can be null if not deleted
});

module.exports = mongoose.model("ProductDiscount", productDiscountSchema);
