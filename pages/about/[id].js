import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function DetailsPage() {
  const route = useRouter();
  const id = route.query.id;

  const detail = details.find((obj) => obj.id === parseInt(id));

  if (!detail) {
    return <h2>developer not found</h2>;
  }

  return (
    <h2>
      {detail.name} {detail.role}
    </h2>
  );
}

export default DetailsPage;
