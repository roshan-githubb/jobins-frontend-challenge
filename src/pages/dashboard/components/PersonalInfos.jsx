import CircleBluePng from "@assets/png/circle-blue.png"; 
import PropTypes from "prop-types";

const PersonalInfos = function PersonalInfos() {
  const _contact_name = "Robert Fox";
  const _contact_email = "robertfox@gmail.com";
  const _contact_number = "(201) 555-0124";
  const _contact_dob = "1 Jan, 1985";
  const _contact_member_since = "3 March, 2023";
  const _total_order = "150";
  const _total_completed = "140";
  const _total_canceled = "10";
  const _shipping_address = "3517 W. Gray St. Utica, Pennsylvania 567867";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 space-y-4">
      <div className="flex flex-wrap items-center gap-4 border-r-0 lg:border-r">
        <img src={CircleBluePng} alt="Circle Blue" /> 
        <div>
          <p className="text-lg font-semibold">{_contact_name}</p>
          <p className="text-[15px] text-secondary truncate w-[80px] sm:w-auto">{_contact_email}</p>
        </div>
      </div>
      <div className="px-0 lg:px-5 border-r-0 lg:border-r">
        <p className="text-[13px] text-secondary uppercase font-medium mb-4">Personal Information</p>
        <tbody className="text-[13px] text-[rgba(35, 39, 46, 1)]">
          <PersonalInfo label="Contact Number" value={_contact_number} />
          <PersonalInfo label="Date of Birth" value={_contact_dob} />
          <PersonalInfo label="Member Since" value={_contact_member_since} />
        </tbody>
      </div>
      <div className="px-0 lg:px-5">
        <p className="text-[13px] text-secondary uppercase font-medium">Shipping address</p>
        <p className="text-[13px] text-primary uppercase font-medium mt-4">{_shipping_address}</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <ShippingInfo count={_total_order} title="Total Order" />
          <ShippingInfo count={_total_completed} title="Completed" />
          <ShippingInfo count={_total_canceled} title="Canceled" />
        </div>
      </div>
    </div>
  );
};

const PersonalInfo = ({ label, value }) => {
  return (
    <tr>
      <td className="py-3">{label}</td>
      <td className="py-3">{value}</td>
    </tr>
  );
};

const ShippingInfo = ({ title, count }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <div>
        <p className="text-lg font-semibold">{count}</p>
        <p className="text-[13px] text-primary font-medium">{title}</p>
      </div>
    </div>
  );
};

ShippingInfo.propTypes = {
  count: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PersonalInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PersonalInfos;
