import './Chat.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebase';

type Messages = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const Chat = () => {
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelID);
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const collectionRef = collection(db, 'channels', String(channelId), 'messages');
    const collectionRefOrderBy = query(collectionRef, orderBy('timestamp', 'desc'));

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      const results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results); //更新したものを管理
    });
  }, [channelId]);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    //channelsコレクションの中にあるmessageコレクションの中にメッセージ情報をいれる
    const collectionRef: CollectionReference<DocumentData> = collection(db, 'channels', String(channelId), 'messages');

    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
    console.log(docRef);
    setInputText('');
  };

  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className='chatMessage'></div>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
      ))}
      {/* chatInput */}
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form>
          <input
            type='text'
            placeholder='#Udemyへメッセージを送信'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            type='submit'
            className='chatInputButton'
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}
          >
            送信
          </button>
        </form>
        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
