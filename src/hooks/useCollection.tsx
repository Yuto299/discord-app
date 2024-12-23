import { useEffect, useState } from 'react';
import { onSnapshot, collection, query, DocumentData, Query } from 'firebase/firestore';
import { db } from '../firebase';

type Channels = {
  id: string;
  channel: DocumentData;
};

const useCollection = (date: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]); //set関数を使用しているので、documentsに格納される

  useEffect(() => {
    const collectionRef: Query<DocumentData> = query(collection(db, date)); //チャンネル名→？
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, [date]);
  return { documents };
};

export default useCollection;
