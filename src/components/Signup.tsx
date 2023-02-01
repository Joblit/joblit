import React, { Fragment, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { signupUser, clearState, userSelector } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { RootState } from '../redux/store';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, errors, handleSubmit } = useForm();

  const { isFetching, isSuccess, isError, errorMessage } =
    useAppSelector(userSelector);

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  
  useEffect(() => {
      if (isSuccess) {
          dispatchEvent(clearState());
          navigate('/')
        }
        if (isError) {
          toast.error(errorMessage);
          dispatch(clearState())
        }
    }, [isSuccess, isError]);

    return (
      <Fragment>
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign Up for your account
            </h2>
          </div>
          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
              <form className='space-y-6'
              onSubmit={handleSubmit(onSubmit)}
              method='POST'>
                {/* FORM COMES HERE */}
              </form>
              <div className='mt-6'>
                <div className='relative'>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-2 bg-white text-gray-500'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
    
};