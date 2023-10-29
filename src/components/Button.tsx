type Props = {
  onClick?: () => void;
  type?: "button" | "submit";
  label: string
  style?: 'error' | 'success' | 'warning' | 'default' | 'info'
};

const Button = ({ onClick, type, label, style = 'default'}: Props) => {

    const styles = {
        error: 'btn-error',
        success: 'btn-success',
        warning: 'btn-warning',
        default: 'btn-default',
        info: 'btn-info'
    }

  return (
    <button type={type} className={styles[style]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
