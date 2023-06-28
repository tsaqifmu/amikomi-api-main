import httpStatus from "http-status";

// import models
import Response from "../model/response.js";
import Ikan from "../model/ikan.js";

const detailIkan = async (req, res) => {
  let response = null;
  const signInErrorMessage = "Ikan tidak ditemukan";
  try {
    const namaIkan = req.body;

    const ikan = await Ikan.findOne({ nama: namaIkan.nama });
    if (!ikan) {
      response = new Response.Error(true, signInErrorMessage);
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }
    response = new Response.Success(false, "success", ikan);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    return res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

export { detailIkan };
