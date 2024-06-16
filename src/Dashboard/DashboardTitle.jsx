import PropTypes from 'prop-types';

const DashboardTitle = ({heading}) => {
    return (
        <div>
            <h2 className='text-center font-bold text-3xl mb-5'>{heading}</h2>
        </div>
    );
};

DashboardTitle.propTypes = {
    heading: PropTypes.string
};

export default DashboardTitle;