import { useRouter } from "next/navigation";

const GoToHomeBtn = () => {
  const router = useRouter();
  return (
    <button className="btn btn-link font-normal" onClick={() => router.push("/")}>
      Go to home
    </button>
  );
};

export default GoToHomeBtn;
