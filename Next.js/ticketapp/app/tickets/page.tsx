import prisma from '@/prisma/db';

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();

  console.log(tickets);

  return (
    <>
      <h1>tickets</h1>
    </>
  );
};

export default Tickets;
