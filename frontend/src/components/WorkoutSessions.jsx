import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>TOP WORKOUT SESSION</h1>
        <p>A workout improves physical health, boosts energy, builds strength, enhances mood, and promotes overall well-being and fitness.</p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className='wrapper'>
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Gym bootcamps offer intense, varied workouts in a group setting, enhancing fitness, strength, and camaraderie. Join now!
        </p>
        <div className='bootcamps'>
          <div>
            <h4>TRAINING SESSIONS</h4>
            <p>provide personalized workouts, expert guidance, and motivation to help you achieve your fitness goals efficiently. </p>
          </div>
          <div>
            <h4>STRENGTH AND CONDITIONING SESSION</h4>
            <p> Focus on building muscle and improving overall strength with our Strength and Conditioning sessions.</p>
           </div>
          <div>
            <h4>YOGA AND FLEXIBILITY SESSION</h4>
            <p>Balance your intense workouts with our Yoga and Flexibility sessions.</p>
           </div>
          <div>
            <h4>CARDIO KICKBOXING SESSION</h4>
            <p>Combine the power of martial arts with a high-energy cardio workout in our Cardio Kickboxing sessions.</p>
           </div>
        </div>
      </div>
      
    </section>
  );
}

export default WorkoutSessions;
