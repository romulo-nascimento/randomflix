import format from 'date-fns/format';

const Header = () => {
  const today = format(new Date(), 'EEEEEE, d MMMM');

  return (
    <section className="flex justify-between items-center h-full px-12 border-b">
      <h1>RandomFlix</h1>
      <span>{today}</span>
    </section>
  );
};

export default Header;