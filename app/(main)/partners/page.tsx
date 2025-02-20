export default function PartnersPage() {
  return (
    <main className="h-svh pt-32">
      <h2 className="text-center text-2xl font-bold text-white">Partners</h2>

      <div className="mt-8 grid grid-cols-2 gap-4 px-4 sm:gap-8 md:grid-cols-3 lg:px-8 xl:grid-cols-4 2xl:px-16">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="relative flex h-52 w-full flex-col items-center justify-center gap-[1.4rem] bg-[url('/partners/white-card.svg')] bg-contain bg-center bg-no-repeat md:h-[18.875rem] md:gap-12"
          >
            <div className="flex items-center">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-[26.89px] w-[26.89px] rounded-full object-contain"
              />

              <p className="text-[0.6875rem] font-bold md:text-[0.875rem]">
                {partner.name}
              </p>
            </div>

            <img
              src={partner.image}
              alt={partner.name}
              className="h-32 w-32 object-contain"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

const partners = [
  {
    name: "Ethereum Kuala Lumpur",
    image: "/partners/ethkl.png",
  },
  {
    name: "Ethereum Kuala Lumpur1",
    image: "/partners/ethkl.png",
  },
  {
    name: "Ethereum Kuala Lumpur2",
    image: "/partners/ethkl.png",
  },
  {
    name: "Ethereum Kuala Lumpur3",
    image: "/partners/ethkl.png",
  },
  {
    name: "Ethereum Kuala Lumpur4",
    image: "/partners/ethkl.png",
  },
  {
    name: "Ethereum Kuala Lumpur5",
    image: "/partners/ethkl.png",
  },
];
