//outline the structure of the cards in the database and export a mongoose model calling it cards(self-called) along with cardSchema
import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model("Cards", cardSchema);