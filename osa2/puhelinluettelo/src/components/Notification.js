const Notification = ({ message }) => {
  //   const style = '.' + msgStyle;
  console.log(message);

  if (message === null) {
    console.log('HERE I AM');

    return null;
  }

  return (
    <div className='notification'>
      {message}
      <div>{console.log('not here')}</div>
    </div>
  );
};

export default Notification;
