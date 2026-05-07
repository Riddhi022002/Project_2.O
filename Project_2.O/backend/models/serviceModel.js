const db = require("../config/db");
const supabase = require("../config/supabaseClient");

const FetchAdminDefinedServices = async () => {
  const { data, error } = await supabase.from("service").select(`
    serviceid,
    servicename,
    icon
  `);

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }

  const rows = data.map((service) => ({
    id: service.serviceid,
    name: service.servicename,
    serviceicon: service.icon,
  }));

  return rows;
};

const createVendorService = async (payload) => {
  const { vendor_id, service } = payload;

  const { data, error } = await supabase
    .from("vendor_service")
    .insert([
      {
        vendorid: vendor_id,
        serviceid: service.service_id,
        price: service.price,
      },
    ])
    .select();

  if (error) {
    console.error("Error adding vendor service:", error);
    throw error;
  }

  return data[0].vendorserviceid;
};

const FetchServicesByVendorId = async (vendorId) => {
  const { data, error } = await supabase
    .from("vendor_service")
    .select(
      `
    vendorserviceid,
    price,
    service (
      servicename,
      servicedescription
    )
  `,
    )
    .eq("vendorid", vendorId);

  if (error) {
    console.error("Error fetching vendor services:", error);
    return [];
  }

  const rows = data.map((item) => ({
    id: item.vendorserviceid,
    service_name: item.service?.servicename,
    price: item.price,
    description: item.service?.servicedescription,
  }));

  return rows;
};

module.exports = {
  createVendorService,
  FetchAdminDefinedServices,
  FetchServicesByVendorId,
};
