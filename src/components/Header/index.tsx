import format from 'date-fns/format';

const Header = () => {
  const today = format(new Date(), 'EEEEEE, d MMMM');

  return (
    <section className="flex justify-between items-center h-full px-12">
      <h1>Random Sheldon</h1>
      <span>{today}</span>
    </section>
  );
};

export default Header;