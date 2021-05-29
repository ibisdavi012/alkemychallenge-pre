import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {useState} from 'react';

export default function AlertDismissibleExample({title, message}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
  }
  return <></>
}

