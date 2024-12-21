import { useEffect, useState } from 'react';
import { onSnapshot, query, orderBy, Timestamp, collection } from 'firebase/firestore';
import { useAppSelector } from '../app/hooks';
import { db } from '../firebase';

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

const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]); //set関数を使用しているので、documentsに格納される
  const channelId = useAppSelector((state) => state.channel.channelID);

  useEffect(() => {
    const collectionRef = collection(db, collectionName, String(channelId), subCollectionName);
    const collectionRefOrderBy = query(collectionRef, orderBy('timestamp', 'asc'));

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      const results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results); //更新したものを管理
    });
  }, [channelId, collectionName, subCollectionName]);
  return { subDocuments };
};

export default useSubCollection;
