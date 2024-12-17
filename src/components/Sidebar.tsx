import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='' alt='' />
        </div>
        <div className='serverIcon'>
          <img src='' alt='' />
        </div>
      </div>
      {/* sidebarRight */}
      <div className='sidebarRight'>
        <h3>discord</h3>
      </div>
    </div>
  );
};

export default Sidebar;
