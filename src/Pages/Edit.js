import TransactionEditForm from "../Components/TransactionEditForm";
// import { useSpring, animated } from 'react-spring'

function Edit() {
  return (
    <div className="New Edit">
      <h2>Edit Page</h2>
      <TransactionEditForm />
    </div>
  );
}


// function ChainExample() {
//   const styles = useSpring({
//     loop: true,
//     to: [
//       { opacity: 1, color: '#ffaaee' },
//       { opacity: 0, color: 'rgb(14,26,19)' },
//     ],
//     from: { opacity: 0, color: 'red' },
//   })
//   // ...
//   return <animated.div style={styles}>I will fade in and out</animated.div>
// }

export default Edit;




