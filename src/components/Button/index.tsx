import { ButtonProps } from './type';

const Button = ({
  children,
  onClick,
  outline = false,
  className = ''
}: ButtonProps) => {

  const getClassName = () => {
    const defaultClassName = 'border-4 border-purple p-4 rounded-full transition-colors ease-in-out';
    const variationClassName = outline ?
      'bg-white hover:bg-light-purple text-purple font-semibold' :
      'bg-purple hover:bg-dark-purple hover:border-dark-purple text-white font-normal';

    return `${defaultClassName} ${variationClassName} ${className}`;
  };
  
  return (
    <button
      className={getClassName()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;