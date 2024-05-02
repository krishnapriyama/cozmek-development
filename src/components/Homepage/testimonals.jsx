import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      value: 5,
      text: "This is the first time I have attended a course about Artificial intelligence and the class was very effective and therefore I would definitely be interested in attending other classes also. The teacher was very friendly and provided a lot of information about the course and future aspects of this course. All my questions were answered and the class interaction was verygood. I will be looking into taking more classes through COZMEK in the near future. Overall, I love all the classes.",
      name: "Yadhu Radhakrishnan",
      position: "Dist Angamaly 3rd Year Student",
    },
    {
      id: 2,
      value: 4,
      text: "The offline add-on course for python-AI by the COZMEK team is so good. As a student, I am very happy. The sir who is teaching us is very supportive and he explains very well and gives better examples so that we can understand it very well",
      name: "Henry Augustine",
      position: "Dist Angamaly 2nd Year Student",
    },
    {
      id: 3,
      value: 5,
      text: " The COZMEK addon class is useful for me personally. Python and AI knowledge improves me. Sir cleared our doubts and good teaching. I think this is useful for our future.",
      name: "Sandra Raphel",
      position: "Dist Angamaly 3rd Year Student",
    },
    {
      id: 4,
      value: 5,
      text: "I am really enjoying the Python-Ai add-on course by COZMEK. The course is easy to follow, making it easily understandable for students of all levels. The instructor is approachable, and always willing to clarify doubts and provide additional guidance when needed. The course's pace is a bit slow but allows for a deep dive into the subject matter without feeling rushed. The regular assignments helped to stay on track. Additionally, the course materials, including video classes, also help us to clear any doubts regarding any topics. I am fully satisfied with my Python-Ai add-on course experience till now. It has helped me develop my skills and knowledge in Python, and look forward to completing the course and applying what I have learned in practical projects. I would rate this course provided by COZMEK a 4.8 out of 5 and will recommend this course to anyone interested in mastering Python-Ai.",
      name: "Kishore M",
      position: "Dist Angamaly 2nd Year Student",
    },
    {
      id: 5,
      value: 5,
      text: "The Cozmek python-Ai add-on course was one of the leading courses in this scenario which beginners could build a career using the same.I am so satisfied with the class and teaching method that the faculty used to make us realize what the course was. The description of each and every topic was explained in simple language so that a beginner could grasp the topic easily. And also the faculty was so friendly. We feel free to ask doubtat any time.THANK YOU TEAM COZMEK",
      name: "Vyshnavi Viswambaran",
      position: "Dist Angamaly 2nd Year Student",
    },
    {
      id: 6,
      value: 5,
      text: "I recently completed a 6-month course on Python and Data Science Basics by Cozmek Pvt Ltd, and it was really rewarding. The teachers explained everything really well and made sure we understood. I liked that we got to do hands-on projects and assignments too, which made learning even more interesting. Overall, I'd totally recommend this course to anyone who wants to learn about programming and data science – it's been a great experience!",
      name: "Mohamed yasen",
      position: "Dist Angamaly 2nd Year Student",
    },
    {
      id: 7,
      value: 5,
      text: "It was a wonderful session by Cozmek on the importance of Python and data science. They have been teaching about the major trending concepts in artificial intelligence and also on the topic of data science with machine learning. We will not get bored because they train us through practical sessions on how an employee works in an IT company. To stay on track, they will give us assignments on the topics taught. That's the way to keep us on track. I really liked their sessions. It's a worthwhile class for me.",
      name: "Ajal PP",
      position: "Dist Angamaly 2nd Year Student",
    },
    {
      id: 5,
      value: 5,
      text: "Cozmek Pvt Ltd's teaching method for the Python and Data Science Basic course provides clear instruction and practical exercises. The structured presentation of concepts facilitates understanding, and the inclusion of real-world examples relevant to our industry adds value to the learning experience. While the instructors demonstrate reasonable expertise, injecting a bit more enthusiasm into their delivery could enhance engagement. Overall, the course offers a solid foundation in Python programming and data science basics, with room for further improvement to make it even more impactful.",
      name: "Mathews Paul",
      position: "Dist Angamaly 2nd Year Student",
    },
  ];
  const [showMoreStates, setShowMoreStates] = useState(
    reviews.map(() => false)
  );

  const toggleShowMore = (index) => {
    const updatedShowMoreStates = [...showMoreStates];
    updatedShowMoreStates[index] = !updatedShowMoreStates[index];
    setShowMoreStates(updatedShowMoreStates);
  };

  const toggle = () => {
    setShowMoreStates(reviews.map(() => false));
  };

  return (
    <div className="w-full flex mt-10 flex-col justify-center bg-white">
      <div className="w-full">
        <div className="flex justify-center">
          <button className="bg-[#2F57EF] font-bold uppercase bg-opacity-[13%] text-[#2F57EF] px-5 py-2 rounded-3xl text-[16px]">
            Technology for All
          </button>
        </div>
        <h1 className="text-center font-bold uppercase text-2xl md:text-4xl mt-5">
          Embracing Continuous Learning <br /> and Growth with Cozmek
        </h1>
      </div>

      <div className="w-full mt-10 relative overflow-hidden">
        <Marquee
          speed={40}
          gradient={false}
          direction="left"
          pauseOnHover={true}
          pauseOnClick={true}
        >
          {reviews.map((data, index) => (
            <div
              key={data.id}
              className="w-[20rem] md:w-[32rem] mb-10 p-6 ml-20 flex flex-col gap-3 bg-white rounded-lg shadow-2xl"
              onMouseLeave={toggle}
            >
              <div className="text-amber-500 flex flex-col">
                <Rating
                  name="read-only"
                  value={data.value}
                  readOnly
                  className="flex"
                />
              </div>
              <div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {data.text.length > 100
                    ? showMoreStates[index]
                      ? data.text
                      : data.text.slice(0, 100) + "..."
                    : data.text}
                  {data.text.length > 100 && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => toggleShowMore(index)}
                    >
                      {showMoreStates[index] ? " Show Less" : " Show More"}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex flex-col">
                <h6 className="text-[#3CAEAE] text-xl font-semibold">
                  {data.name}
                </h6>
                <h1 className="text-[#90A3B4] text-sm">{data.position}</h1>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
