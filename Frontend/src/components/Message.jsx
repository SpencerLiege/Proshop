
import PropTypes from 'prop-types';

const Message = ({ type = 'info', children }) => {
  const messageClasses = {
    error: 'bg-red-100 border border-red-400 text-red-700',
    success: 'bg-green-100 border border-green-400 text-green-700',
    info: 'bg-blue-100 border border-blue-400 text-blue-700',
    warning: 'bg-yellow-100 border border-yellow-400 text-yellow-700',
    default: 'bg-gray-100 border border-gray-400 text-gray-700',
  };

  const messageClass = messageClasses[type] || messageClasses.default;

  return (
    <div className={`p-4 mb-4 rounded ${messageClass}`}>
      {children}
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(['error', 'success', 'info', 'warning']),
  children: PropTypes.node.isRequired,
};

export default Message;
