import Link from 'next/link';
import Image from 'next/image';

type ServiceCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const ServiceCard = ({ title, description, link, image }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-3">{description}</p>
        <Link href={link} className="inline-block mt-5 text-blue-600 font-semibold hover:underline">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
