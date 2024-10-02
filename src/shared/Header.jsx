import PropTypes from "prop-types";
import BellPng from '@assets/png/bell.png';

const Header = ({ title }) => {
    return (
        <div className="header-wrapper">
            <span className="header-title">{title}</span>
            <HeaderInfos />
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;

const HeaderInfos = () => {
    const _count = 4;
    return (
        <div className="flex gap-6 items-center justify-center">
            <div className="notification-info">
                <div className="relative w-[26px] h-[26px] notification-icon">
                    <img src={BellPng} className="absolute top-0 w-100 h-100 mt-1" alt="notification-bell-jobins" />
                    <span className="absolute bottom-3 left-3 rounded-[100%] bg-red-400 h-[20px] w-[20px] flex justify-center items-center text-sm text-white">{_count}</span>
                </div>
            </div>
            <div className="relative w-[38px] h-[38px]">
                <div className="absolute w-full h-full rounded-full bg-blue-primary" />
                <div className="absolute bottom-0 right-1 w-2 h-2 bg-green-primary rounded-full border-2 border-white" />
            </div>
        </div>
    );
};
