import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminPages from '../pages/AdminPages'
function admin() {
  const { user,isLoading } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate()

  useEffect(() => {
    if(!user['isAdmin'])
    {
      navigate('/');
    }
  }, [user, navigate]);
  return (
    <>
        <AdminPages/>
    </>
  )
}

export default admin