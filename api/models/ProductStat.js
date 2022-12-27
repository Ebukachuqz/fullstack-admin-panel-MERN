const mongoose = require("mongoose");

const ProductStatSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      // required: true,
    },
    yearlySalesTotal: {
      type: Number,
      // required: true,
    },
    yearlyTotalSoldUnits: {
      type: Number,
      // required: true,
    },
    year: {
      type: Number,
      // required: true,
    },
    monthlyData: [
      {
        month: {
          type: String,
          // required: true,
        },
        totalSales: {
          type: Number,
          // required: true,
        },
        totalUnits: {
          type: Number,
          // required: true,
        },
      },
    ],
    dailyData: {
      data: {
        type: String,
        // required: true,
      },
      totalSales: {
        type: Number,
        // required: true,
      },
      totalUnits: {
        type: Number,
        // required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductStat", ProductStatSchema);
