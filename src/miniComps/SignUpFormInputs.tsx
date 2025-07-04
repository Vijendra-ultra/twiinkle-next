import { useStore } from "../store";
const SignUpFormInputs: React.FC = () => {
  const { email, setEmail, name, setName, age, setAge } = useStore();
  const ageSetter = (number: string) => {
    const eVal = number;
    const num = Number(eVal);
    if (!isNaN(num)) {
      if (num <= 100) {
        setAge(num);
      }
    }
  };
  return (
    <>
      <input
        className="input-field"
        type="text"
        required
        value={name}
        onChange={setName}
        placeholder="Your sweet Name"
      />
      <input
        className="input-field"
        value={age === 0 ? "" : age}
        type="text"
        required
        onChange={(e) => ageSetter(e.target.value)}
        placeholder="Your Age"
      />
      <input
        className="input-field"
        value={email}
        onChange={setEmail}
        type="email"
        required
        placeholder="Your Email"
      />
    </>
  );
};

export default SignUpFormInputs;
