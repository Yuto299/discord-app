import { DocumentData } from 'firebase/firestore';
import './SidebarChannel.scss';
import { useAppDispatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
  const { channel, id } = props;
  const dispatch = useAppDispatch();

  return (
    <div
      className='sidebarChannel'
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelID: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
