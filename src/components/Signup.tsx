import React, { Fragment, useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { signupUser, clearState, userSelector } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { RootState } from '../redux/store';

const Signup = () => {
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
};

useEffect(() => {
  if (isSuccess) {
    dispatchEvent(clearState());
    redirect('/');
  }
});
