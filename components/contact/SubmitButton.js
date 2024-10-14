import { useFormStatus } from 'react-dom';

export default function SubmitButton({btnStyle}) {
  
  const data = useFormStatus();
  const pending = data.pending;

  return(
    <button className={btnStyle} dissabled={pending}>
      {pending ? 'Slanje poruke je u toku' : 'Pošalji'} 
    </button>
  );
}