const db = require("../config/db");
const supabase = require("../config/supabaseClient");

const createCustomer = async (customer) => {
  const { name, email, phone, password } = customer;

  const { data, error } = await supabase
    .from("customer")
    .insert([
      {
        fullname: name,
        email: email,
        phonenumber: phone,
        passwordhash: password,
      },
    ])
    .select();

  if (error) {
    console.error("Error creating customer:", error);
    throw error;
  }

  return data[0].customerid;
};

const customerLogin = async (email) => {
  const { data, error } = await supabase
    .from("customer")
    .select("*")
    .eq("email", email)
    .single();

  return data;
};

const getCustomerById = async (customerid) => {
  const { data, error } = await supabase
    .from("customer")
    .select("*")
    .eq("customerid", customerid)
    .single();

  if (error) {
    console.error("Error fetching customer:", error);
    return null;
  }

  return data;
};

module.exports = { createCustomer, customerLogin, getCustomerById };
