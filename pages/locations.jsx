import LocationLayout from "@/components/Layout/LocationLayout";

const location = [
  {
    id: "l1",
    country: "Canada",
    office: "Designo Central Office",
    street: "3886 Wellington Street",
    city: "Toronto, Ontario M9C 3J5",
    number: "+1 253-863-8967",
    email: "contact@designo.co",
    img: "/images/map-one.png",
  },
  {
    id: "l2",
    country: "Australia",
    office: "Designo AU Office",
    street: "19 Balonne Street",
    city: "New South Wales 2443",
    number: "(02) 6720 9092",
    email: "contact@designo.au",
    img: "/images/map-two.png",
  },
  {
    id: "l3",
    country: "United Kingdom",
    office: "Designo UK Office",
    street: "13  Colorado Way",
    city: "Rhyd-y-fro SA8 9GA",
    number: "078 3115 1400",
    email: "contact@designo.uk",
    img: "/images/map-three.png",
  },
];

const locations = () => {
  return (
    <>
      {location.map((locations) => (
        <LocationLayout
          key={location.id}
          country={locations.country}
          office={locations.office}
          street={locations.street}
          city={locations.city}
          number={locations.number}
          email={locations.email}
          img={locations.img}
          className={`mt-24 lg:mt-40 ${
            locations.id === "l2" && "lg:flex-row-reverse"
          }`}
        />
      ))}
    </>
  );
};

export default locations;
