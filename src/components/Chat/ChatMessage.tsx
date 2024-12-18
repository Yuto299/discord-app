import './ChatMessage.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = () => {
  return (
    <div className='message'>
      <AccountCircleIcon />
      <div className='messageInfo'>
        <h4>
          spinode
          <span className='messageTimeStamp'>2024/12/20</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
