const db = require("../config/db");
const supabase = require("../config/supabaseClient");

const createCar = async (car) => {
  const { customer_id, brand, model, registration_number } = car;

  console.log("Car Data:", {
    customer_id,
    brand,
    model,
    registration_number,
  });

  const { data, error } = await supabase.from("vehicle").insert([
    {
      customerid: customer_id,
      vehiclebrandname: brand,
      vehiclemodelname: model,
      vehicleregistrationnumber: registration_number,
    },
  ]);
};

const getCarsByCustomerId = async (customerid) => {
  const { data, error } = await supabase
    .from("vehicle")
    .select("*")
    .eq("customerid", customerid);

  return data;
};

module.exports = { createCar, getCarsByCustomerId };
