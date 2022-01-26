import format from 'date-fns/format';

const Header = () => {
  const today = format(new Date(), 'EEEEEE, d MMMM');

  return (
    <section className="md:flex justify-between items-center h-full px-12 py-4 border-b">
      <h1>RandomFlix</h1>
      <span className='none'>{today}</span>
    </section>
  );
};

export default Header;