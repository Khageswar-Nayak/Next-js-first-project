import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function AboutUsPage() {
  // const router = useRouter();
  // const id = router.query.id;
  // const detail = details.find((item) => item.id === parseInt(id));

  // if (!detail) {
  //   return <p>Developer doesn't exist</p>;
  // }

  return (
    <>
      {details.map((obj) => {
        return (
          <li key={obj.id}>
            <Link href={`${obj.id}`}>{obj.name}</Link>
          </li>
        );
      })}
    </>
  );
}
export default AboutUsPage;
