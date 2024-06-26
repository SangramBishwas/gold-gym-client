import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl font-bold py-4">{heading}</h3>
            <p className="italic mb-2">{subHeading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
};

export default SectionTitle;