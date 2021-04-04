import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useLoginMutation } from '../../generated/graphql';
import { errorMap } from '../../utils/errorMap';
import InputField from '../includes/inputField';

interface loginTypes {}

const Sigin: FC<loginTypes> = ({}) => {
  const [error, setError] = useState('' as any);
  const [user, setUser] = useState({
    usernameOrEmail: '',
    password: '',
  });
  const [, login] = useLoginMutation();
  const router = useRouter();
  const handleInputChange = (e: any) => {
    error && setError('');
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmission = async (e: any) => {
    e.preventDefault();
    const { data } = await login(user);
    if (data?.login.errors) return setError(errorMap(data?.login.errors));
    return router.replace('/');
  };

  return (
    <form className='form' onSubmit={handleSubmission}>
      <div className='form-header'>
        <h2>Sign In</h2>
        <p>Welcome back!, Login to continue.</p>
      </div>

      <InputField
        label='Username or email'
        error={
          error && error.usernameOrEmail ? error.usernameOrEmail : undefined
        }
        name='usernameOrEmail'
        id='usernameOrEmail'
        value={user.usernameOrEmail}
        onChange={handleInputChange}
        required={true}
      />

      <InputField
        label='Password'
        error={error && error.password ? error.password : undefined}
        name='password'
        id='password'
        type='password'
        value={user.password}
        onChange={handleInputChange}
        required={true}
      />

      <button type='submit' className='btn btn-primary'>
        Login
      </button>
    </form>
  );
};

export default Sigin;
