import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function AboutUsPage() {
  const router = useRouter();
  const id = router.query.id;
  const detail = details.find((item) => item.id === parseInt(id));

  if (!detail) {
    return <p>Developer doesn't exist</p>;
  }

  return (
    <div>
      <h1>{detail.name}</h1>
      <p>{detail.role}</p>
    </div>
  );
}
export default AboutUsPage;
