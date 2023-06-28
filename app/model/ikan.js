import mongoose from "mongoose";

const IkanDetailSchema = new mongoose.Schema({
  daerahPenyebaran: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  habitatAlami: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
    unique: true,
  },
  ukuran: {
    type: String,
    required: true,
  },
  urlToImage: {
    type: String,
    required: true,
  },
});

// memilih database "mikomi"
const mikomiDB = mongoose.connection.useDb("mikomi");

// model koleksi ikanDetail
const IkanDetail = mikomiDB.model("ikanDetail", IkanDetailSchema);
export default IkanDetail;
