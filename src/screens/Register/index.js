import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import RegisterComponent from '../../components/RegisterComponent';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import getData from '../../context/actions/warehouse/getData';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
    dataDispatch,
    dataState: {
      getWarehouse: {dataWarehouse, warehouseLoading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getData()(dataDispatch);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.name) {
      setErrors(prev => {
        return {...prev, name: 'Mohon masukkan nama'};
      });
    }
    if (!form.id_number) {
      setErrors(prev => {
        return {...prev, id_number: 'Mohon masukkan no Ktp'};
      });
    }
    if (!form.phone_number) {
      setErrors(prev => {
        return {...prev, phone_number: 'Mohon masukkan no Hp'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Mohon masukkan password'};
      });
    }
    if (!form.password_confirmation) {
      setErrors(prev => {
        return {
          ...prev,
          password_confirmation: 'Mohon masukkan konfirmasi password',
        };
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      dataWarehouse={dataWarehouse}
      warehouseLoading={warehouseLoading}
      loading={loading}
    />
  );
};

export default Register;
