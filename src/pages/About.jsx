import React from 'react'
import bgabout from "../assets/images/bgabout.png";

const About = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-7xl m-auto px-14 py-10 flex flex-col-2 gap-45 items-center">
        <div>
          <p className="text-teal-600 text-4xl mb-10 font-serif italic">
            About Us
          </p>
          <p className="text-lg text-gray-400 mb-4">WE PRIDE OURSELF ON</p>
          <h2 className="text-3xl font-bold text-orange-500">
            Our authentic momo recipes <br />
            <span className="text-black">passed down through generations</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <img src="src/assets/images/chef1.png" alt="chef1" className="w-90" />
        </div>
      </section>

      <section
        className="relative bg-center bg-cover bg-no-repeat py-28 mb-20"
        style={{ backgroundImage: `url(${bgabout})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40"></div>

        <div className="relative z-10 w-7xl flex items-end px-14">
          <div className="p-8 rounded-xl text-white mt-10">
            <h3 className="text-3xl font-bold mb-3">
              Process behind the making
            </h3>
            <p className="max-w-xl mb-6 text-gray-200">
              See how we make momos that you love from only the best ingredients.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-full font-semibold">
              Watch the Video
            </button>
          </div>
        </div>
      </section>

      <section className="w-7xl m-auto px-20 py-20 space-y-20">
        <div className="flex flex-col-2 gap-50 items-center">
          <div className="max-w-md">
            <h4 className="text-2xl font-bold mb-3">
              Our momos are{" "}
              <span className="text-orange-500">made with love</span>
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              blanditiis tenetur vitae dolorem quisquam, non tempore ex enim
              molestiae maxime sequi molestias temporibus quasi. Eum eligendi a
              modi facilis repellendus.
            </p>
          </div>
          <img src="src/assets/images/momo1.png" alt="Momo"
            className="rounded-lg w-100 shadow-lg"
          />
        </div>

        <div className="flex flex-col-2 gap-50 items-center">
          <img src="src/assets/images/momo2.png" alt="momos"
            className="rounded-lg w-100 shadow-lg"
          />
          <div className="max-w-md">
            <h4 className="text-2xl font-bold mb-3">
              Taste the difference with{" "}
              <span className="text-orange-500"> our handcrafted momos</span>
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              vero adipisci suscipit error corrupti commodi, quae rem magni
              facilis, nesciunt vitae enim quo quidem placeat. Rerum mollitia
              fugit iure quae?
            </p>
          </div>
        </div>

        <div className="flex flex-col-2 gap-50 items-center">
          <div className="max-w-md">
            <h4 className="text-2xl font-bold mb-3">
              Our momos are the perfect{" "}
              <span className="text-orange-500">
                blend of tradition and innovation
              </span>
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              accusamus eum porro voluptatem doloremque amet sit delectus, earum
              cum ducimus alias, dolor odit quod nisi recusandae commodi
              nesciunt quidem perferendis?
            </p>
          </div>
          <img src="src/assets/images/momo3.png" alt=""
            className="rounded-lg w-100 shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
