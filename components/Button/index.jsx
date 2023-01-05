import PropTypes from 'prop-types';
import '../../styles/globals.css';


const Button = ({children, backgroundColor, color, primary, ...props }) => {
  const mode = primary ? 'btn-first' : 'btn-second';

  return (
    <button type="button"
    className={['btn', mode].join(' ')}
    style={backgroundColor && {backgroundColor} }
    {...props}
    >
        {children}
    </button>
  );
};



Button.proptypes = {
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
   children: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
};

export default Button;