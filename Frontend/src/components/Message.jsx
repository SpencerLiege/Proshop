

// export default function Message() {
//   return (
//     <>
//         <div className="p-10">
//             Yes
//         </div>
//     </>
//   )
// }


// import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ type, children }) => {
  let messageClass;

  switch (type) {
    case 'error':
      messageClass = 'bg-red-100 text-base border border-red-400 text-red-700';
      break;
    case 'success':
      messageClass = 'bg-green-100 text-base border border-green-400 text-green-700';
      break;
    case 'info':
      messageClass = 'bg-blue-100 text-base border border-blue-400 text-blue-700';
      break;
    case 'warning':
      messageClass = 'bg-yellow-100 text-base border border-yellow-400 text-yellow-700';
      break;
    default:
      messageClass = 'bg-gray-100 text-base border border-gray-400 text-gray-700';
      break;
  }

  return (
    <div className={`p-4 mb-4 rounded ${messageClass}`}>
      {children}
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Message.defaultProps = {
  type: 'info',
};

export default Message;
