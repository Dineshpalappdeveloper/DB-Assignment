const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productInventorySchema = new Schema({
    id: { type: Number, required: true },
    quantity: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null } // Assuming deleted_at can be null if not deleted
});

module.exports = mongoose.model("ProductInventory", productInventorySchema);
