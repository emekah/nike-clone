const NavLinks = () => {
  const links = [
    { id: 1, url: "/newandfeatured", name: "New & Featured" },
    { id: 2, url: "./men", name: "Men" },
    { id: 3, url: "./women", name: "Women" },
    { id: 4, url: "./kids", name: "Kids" },
    { id: 5, url: "./sale", name: "Sale" },
  ];
  return (
    <>
      {links.map((link) => (
        <li key={link.id} className="font-bold">
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
