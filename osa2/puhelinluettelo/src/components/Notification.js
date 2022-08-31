const Notification = ({ message, msgStyle }) => {
  let style = 'notification';
  if (msgStyle !== null) {
    style = msgStyle;
  }
  if (message === null) {
    return null;
  }

  return <div className={style}>{message}</div>;
};

export default Notification;
