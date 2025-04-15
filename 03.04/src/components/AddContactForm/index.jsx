import { useActionState } from 'react'
import s from './styles.module.css'

function AddContactForm({ setContacts }) {
  const [, formAction, isPending] = useActionState((p, formData) => {
    const data = { id: Date.now(), ...Object.fromEntries(formData) };
    setContacts(prev => [...prev, data]);
  }, null);

  return (
    <form action={formAction} className={s.form} disabled={isPending}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder='Enter your Name:'
        required disabled={isPending}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder='Enter your Email:'
        required disabled={isPending}
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder='Enter your Phone:'
        required disabled={isPending}
      />
      <button type='submit' disabled={isPending}>Add new Contact</button>
    </form>
  );
};

export default AddContactForm;