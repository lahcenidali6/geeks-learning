import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/user/userAPI';
import { Spinner, Alert, Card } from 'react-bootstrap';

const UserData = () => {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      {userData && (
        <Card className="mt-4 shadow">
          <Card.Header>User Information</Card.Header>
          <Card.Body>
            <Card.Title>{userData.name}</Card.Title>
            <Card.Text><strong>Email:</strong> {userData.email}</Card.Text>
            <Card.Text><strong>Phone:</strong> {userData.phone}</Card.Text>
            <Card.Text><strong>Company:</strong> {userData.company.name}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default UserData;
