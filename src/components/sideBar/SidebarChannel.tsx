import { DocumentData } from 'firebase/firestore';
import './SidebarChannel.scss';

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
  const { channel } = props;
  console.log(channel);

  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
