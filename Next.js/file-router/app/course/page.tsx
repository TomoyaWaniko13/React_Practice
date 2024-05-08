'use client';

const course_data = [
  { name: 'Next.js', hours: 7 },
  { name: 'React', hours: 4 },
  { name: 'JavaScript', hours: 3 },
];

const course = () => {
  const onSubmit = () => {
    console.log('hello world!');
  };

  return (
    <>
      <h1>All courses</h1>
      {course_data.map((course) => (
        <h2 key={course.name}>{course.name}</h2>
      ))}

      <form onSubmit={onSubmit}>
        <input type='text' name={'name'} className={'border'} />
        <button type={'submit'}>Submit</button>
      </form>
    </>
  );
};

export default course;
