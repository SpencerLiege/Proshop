import PropTypes from 'prop-types'
import { ImSpinner6 } from "react-icons/im";


export default function Loader({ type='default' }) {
    const loaders = {
        default: 'animate-spin',
        login: 'animate-spin w-6 h-6 text-sky-600',
        order: 'animate-spin w-6 h-6 text-lime-600',
        product: 'animate-spin w-12 h-12 text-orange-600 mt-72'
    }

    const loader = loaders[type] || loaders.default

  return (
    <div className='flex justify-center items-center animate-bounce'> 
        <ImSpinner6 className={`${loader}`} /> 
    </div>
  )
}

Loader.propTypes = {
    type: PropTypes.oneOf(['default', 'login', 'product', 'order'])
}



