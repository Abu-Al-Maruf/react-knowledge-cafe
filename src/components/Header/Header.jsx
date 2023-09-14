import profile from '../../assets/img/profile.png'

const Header = () => {
  return (
    <header className='max-w-7xl mx-auto flex justify-between items-center py-4 m-4 border-b-2'>
      <h1 className="text-4xl font-bold text-black">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
