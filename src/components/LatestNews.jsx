import { ArrowRight, CalendarDays, MessageCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    date: "18",
    month: "NOV",
    category: "Food",
    author: "Admin",
    comments: "65 Comments",
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    date: "29",
    month: "JAN",
    category: "Food",
    author: "Admin",
    comments: "65 Comments",
    title:
      "Eget lobortis lorem lacinia. Vivamus pharetra semper, sapien.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    date: "21",
    month: "FEB",
    category: "Food",
    author: "Admin",
    comments: "65 Comments",
    title:
      "Maecenas blandit risus elementum mauris malesuada.",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-white py-25 sm:py-20">
      <div className="mx-auto container px-4 sm:px-6">

        {/* ================= Heading ================= */}

        <div className="mb-15 text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Latest News
          </h2>
        </div>

        {/* ================= News Grid ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* ================= Image ================= */}

              <div className="relative h-[300px] overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Date */}

                <div className="absolute bottom-0 left-3 flex h-12 w-11 flex-col items-center justify-center rounded-t-md bg-white shadow-sm">
                  <span className="text-xl font-semibold leading-none text-gray-900">
                    {item.date}
                  </span>

                  <span className="mt-1 text-[10px] font-medium uppercase text-gray-500">
                    {item.month}
                  </span>
                </div>
              </div>

              {/* ================= Content ================= */}

              <div className="p-3 mt-4">

                {/* Meta */}

                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={13} />
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1">
                    <User size={13} />
                    By {item.author}
                  </span>

                  <span className="flex items-center gap-1">
                    <MessageCircle size={13} />
                    {item.comments}
                  </span>
                </div>

                {/* Title */}

                <h3 className="min-h-[42px] mt-5 text-[16px] font-medium leading-5 text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                  {item.title}
                </h3>

                {/* Read More */}

                <Link
                  to={`/news/${item.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-green-600 transition-all duration-300 hover:gap-2"
                >
                  Read More

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;