import './ChatHeader.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          Udemy
        </h3>
      </div>

      <div className='chatHeaderRight'>
        <NotificationsIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
