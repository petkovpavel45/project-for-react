import completedImg from './images/completed.png'
import './styles/completed.css'
export const Completed = () => {
  return (
    <section id="completed-order">
      <h2>YOUR ORDER IS COMPLETED</h2>
      <img src={completedImg} alt="completedImg" className="completed-img" />
    </section>
  );
};
