import { useState } from 'react';

function useShowPassword() {
  const [type, setType] = useState('password');

  const toggleShow = () =>
    setType((prev) => (prev === 'password' ? 'text' : 'password'));

  return { type, toggleShow };
}
export default useShowPassword;
