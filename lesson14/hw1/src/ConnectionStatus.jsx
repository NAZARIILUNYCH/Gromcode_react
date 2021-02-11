/* eslint-disable class-methods-use-this */
import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setConnectionStatus] = useState('online');

  useEffect(() => {
    window.addEventListener('online', () => setConnectionStatus('online'));
    window.addEventListener('offline', () => setConnectionStatus('offline'));

    return () => {
      window.removeEventListener('online', () => setConnectionStatus('online'));
      window.removeEventListener('offline', () => setConnectionStatus('offline'));
    };
  }, []);

  const className = `status ${status === 'offline' ? 'status_offline' : ''}`;
  return <div className={className}>{status}</div>;
};

export default ConnectionStatus;
