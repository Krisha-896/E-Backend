const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

// create a new coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.status(200).json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

//get all coupons
const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    res.status(200).json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});

//update a coupon
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const coupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

//delete a coupon
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const coupon = await Coupon.findByIdAndDelete(id);
    res.status(200).json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

//get a coupon
const getCouponById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const coupon = await Coupon.findById(id);
    res.status(200).json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

//export all functions
module.exports = {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  getCouponById,
};
