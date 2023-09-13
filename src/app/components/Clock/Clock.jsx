import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const MAX_TIME = 10 * 60;
const SECONDS_PER_MINUTE = 60;

export const Clock = ({ setIsExpired }) => {
  const [remainingTime, setRemainingTime] = useState(MAX_TIME);

  const formatTime = time => {
    const minutes = Math.floor(time / SECONDS_PER_MINUTE);
    const seconds = time % SECONDS_PER_MINUTE;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      setIsExpired(true);
      setRemainingTime(MAX_TIME);
    }
  }, [remainingTime, setIsExpired]);

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem('remainingTime', remainingTime.toString());
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      handleUnload();
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [remainingTime]);

  return (
    <div className='clock-container'>
      <div className='clock'>
        <p>
          <FontAwesomeIcon icon={faClock} />
          &nbsp;
          {formatTime(remainingTime)}
        </p>
      </div>
      <div>
        <p>Tienes 10 minutos para realizar la compra.</p>
      </div>
    </div>
  );
};




// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-regular-svg-icons';

// const MAX_TIME = 10 * 60;
// const SECONDS_PER_MINUTE = 60;

// export const Clock = ({ setIsExpired }) => {
//   const [remainingTime, setRemainingTime] = useState(
//     parseInt(localStorage.getItem('remainingTime')) || MAX_TIME
//   );

//   const formatTime = time => {
//     const minutes = Math.floor(time / SECONDS_PER_MINUTE);
//     const seconds = time % SECONDS_PER_MINUTE;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (remainingTime === 0) {
//       setIsExpired(true);
//       setRemainingTime(MAX_TIME);
//     }
//   }, [remainingTime, setIsExpired]);

//   useEffect(() => {
//     const handleUnload = () => {
//       localStorage.setItem('remainingTime', remainingTime);
//     };

//     window.addEventListener('beforeunload', handleUnload);

//     return () => {
//       handleUnload();
//       window.removeEventListener('beforeunload', handleUnload);
//     };
//   }, [remainingTime]);

//   useEffect(() => {
//     const resetTimeOnPageChange = () => {
//       setRemainingTime(MAX_TIME);
//     };

//     const handlePageChange = () => {
//       resetTimeOnPageChange();
//     };

//     window.addEventListener('popstate', handlePageChange);

//     return () => {
//       handlePageChange();
//       window.removeEventListener('popstate', handlePageChange);
//     };
//   }, []);

//   return (
//     <div className='clock-container'>
//       <div className='clock'>
//         <p>
//           <FontAwesomeIcon icon={faClock} />
//           &nbsp;
//           {formatTime(remainingTime)}
//         </p>
//       </div>
//       <div>
//         <p>Tienes 10 minutos para realizar la compra.</p>
//       </div>
//     </div>
//   );
// };





/* import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const Clock = ({ setIsExpired }) => {
  const [remainingTime, setRemainingTime] = useState(
    localStorage.getItem('remainingTime') || 10 * 60
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      setIsExpired(true);
    }
    localStorage.setItem('remainingTime', remainingTime);
  }, [remainingTime, setIsExpired]);

  const formatTime = time => {
    if (time < 0) {
      return '00:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='clock-container'>
      <div className='clock'>
        <p>
          <FontAwesomeIcon icon={faClock} />
          &nbsp;
          {formatTime(remainingTime)}
        </p>
      </div>
      <div>
        <p>Tienes 10 minutos para realizar la compra.</p>
      </div>
    </div>
  );
}; */

// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-regular-svg-icons';

// export const Clock = ({ setIsExpired }) => {
//   const [remainingTime, setRemainingTime] = useState(10 * 60);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (remainingTime === 0) {
//       setIsExpired(true);
//     }
//   }, [remainingTime, setIsExpired]);

//   const formatTime = time => {
//     if (time < 0) {
//       return '00:00';
//     };
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className='clock-container'>
//       <div className='clock'>
//         <p>
//           <FontAwesomeIcon icon={faClock} />
//           &nbsp;
//           {formatTime(remainingTime)}
//         </p>
//       </div>
//       <div>
//         <p>Tienes 10 minuto para realizar la compra.</p>
//       </div>
//     </div>
//   );
// };