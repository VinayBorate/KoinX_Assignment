// Import images from the assets folder
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/preson3.png";

function TeamCard() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl text-[#0F1629] font-semibold">Team</div>
        <div className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <div className="">
          <Card name="John Smith" des="Designation here" image={person1} />
          <Card name="Elina Williams" des="Designation here" image={person2} />
          <Card name="Michael Brown" des="Designation here" image={person3} />
        </div>
      </div>
    </div>
  );
}

function Card({ name, image, des }: any) {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="justify-center flex flex-col items-center">
        <div>
          <img className="rounded-xl w-44 lg:w-96" src={image} alt={name} />
        </div>
        <div className="text-[#0F1629] text-[15px] font-semibold py-1">
          {name}
        </div>
        <div className="text-[#788F9B] text-xs font-medium">{des}</div>
      </div>
      <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
}

export default TeamCard;