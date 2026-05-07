const db = require("../config/db");
const supabase = require("../config/supabaseClient");

const createVendor = async (vendor) => {
  const {
    business_name,
    owner_name,
    phonenumber,
    address,
    city,
    state,
    pincode,
    gst_number,
    password,
  } = vendor;

  const { data, error } = await supabase
    .from("vendor")
    .insert([
      {
        businessname: business_name,
        ownername: owner_name,
        phonenumber: phonenumber,
        addressline: address,
        city: city,
        state: state,
        pincode: pincode,
        gstnumber: gst_number,
        passwordhash: password,
      },
    ])
    .select();

  if (error) {
    console.error("Error creating vendor:", error);
    throw error;
  }

  return data[0].vendorid;
};

const vendorLogin = async (phonenumber) => {
  const { data, error } = await supabase
    .from("vendor")
    .select("*")
    .eq("phonenumber", phonenumber)
    .single();

  if (error) {
    console.error("Error fetching vendor:", error);
    return null;
  }

  return data;
};

const fetchVendors = async () => {
  const { data, error } = await supabase
    .from("vendor")
    .select("*")
    .eq("isverified", true)
    .eq("isactive", true);

  if (error) {
    console.error("Error fetching vendors:", error);
    return [];
  }

  return data;
};

module.exports = { createVendor, vendorLogin, fetchVendors };
