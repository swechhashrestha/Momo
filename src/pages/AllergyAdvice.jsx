import React from "react";
import IngredientCard from "../components/IngredientCard";
import chef from "../assets/images/chef.png";
import Qr from "../assets/images/Qr.png";

const AllergyAdvice = () => {
  return (
    <div className="py-10 px-4">
      <div className="mt-10 mx-30">
        <section className="px-14 py-10 flex items-center justify-between gap-20">
          <div>
            <p className="text-teal-600 text-4xl mb-10 font-serif italic">
              Allergy Advices
            </p>

            <h2 className="text-lg text-gray-400 mb-4">AT OUR RESTAURANT</h2>

            <p className="text-gray-700 text-xl font-bold max-w-lg">
              We use only the freshest and highest quality ingredients in all
              our dishes,{" "}
              <span className="text-orange-500 font-bold">
                and offer transparency in our ingredient labeling.
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <img src={chef} alt="chef" className="w-96" />
          </div>
        </section>

        <div className="text-center mb-8">
          <h3 className="text-orange-500 font-bold text-3xl">
            Ingredient's <span className="text-black">Used </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-15 mx-50 mb-10">
          <IngredientCard
            title="For the Dough"
            items={[
              "120 gms refined flour",
              "1/4 tsp baking powder",
              "1/2 tsp salt water (for kneading)",
            ]}
          />

          <IngredientCard
            title="For the Chicken Filling"
            items={[
              "1 cup chicken (minced)",
              "1/2 cup onions finely chopped",
              "1/4 tsp black pepper",
              "1 tbsp oil",
              "1/2 tsp garlic paste",
              "1/2 tsp soy sauce",
              "Salt",
              "1/4 tsp vinegar",
            ]}
          />

          <IngredientCard
            title="For the Vegetarian Filling"
            items={[
              "1 cup cabbage and carrots",
              "2 tbsp onions",
              "1/2 tsp garlic",
              "1 tbsp oil",
              "1/4 tsp vinegar",
              "1/2 tsp soy sauce",
              "Salt & pepper",
              "1 tbsp cornflour",
            ]}
          />

          <IngredientCard
            title="For Chilli Sauce"
            items={[
              "25 gm garlic",
              "6 whole red chillies",
              "3 tbsp vinegar",
              "1 tbsp oil",
              "Salt",
              "Sugar",
            ]}
          />
        </div>

        <div className="text-center mb-10">
          <h3 className="text-orange-500 text-3xl font-bold mb-4">
            Allergy <span className="text-black">Advice</span>
          </h3>
          <div className="text-gray-600 text-sm max-w-4xl mx-auto">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            consectetur temporibus cumque, nobis magnam aperiam et nisi illum
            doloremque, quod veritatis consequatur atque quia perferendis cum
            quos repellendus perspiciatis. Necessitatibus optio hic voluptatem
            ea sit est molestias repellendus architecto quas aspernatur
            officiis, ab aut alias voluptate accusamus tenetur amet facere
            quidem? Enim, ex maxime. Modi voluptas fuga unde! Odio mollitia
            quisquam rerum veritatis praesentium omnis quidem tempora porro sunt
            ducimus, doloribus eum, nobis atque minus nulla voluptate ratione
            similique sit dolore fugiat earum esse fugit ex eveniet! Sapiente
            voluptatibus recusandae sint alias. Molestias, explicabo in? Sint,
            necessitatibus nulla harum saepe impedit esse distinctio nam.
            </p>
            <p>
            provident vel cumque praesentium tenetur ut eveniet, deserunt illum
            quaerat maxime debitis? Quis porro nesciunt assumenda quas illum
            minus? Provident harum corporis ducimus ea aliquam aspernatur iste
            fugit explicabo voluptatibus eum saepe quibusdam, nisi error labore
            necessitatibus sint blanditiis tempore quisquam ut nihil quasi sed
            reiciendis dicta voluptas. Accusantium autem fuga, doloribus, quasi
            soluta recusandae repellat voluptates tempora asperiores deserunt
            debitis nisi cumque vero! Laborum vitae porro omnis. Ipsum repellat
            ab officia consequuntur ex placeat aliquid iusto minus. Consequuntur
            perspiciatis incidunt numquam tempore! Tempora laboriosam tenetur
            officia accusamus dolore modi impedit quaerat tempore, iste quod,
            aspernatur officiis voluptates voluptatibus. At, repellat quisquam.
            </p>
            <p>
            A voluptas nemo facere vitae. Ducimus iusto itaque est eveniet
            voluptatem libero impedit harum nemo. Praesentium, blanditiis
            eveniet. Incidunt animi porro impedit velit alias, reprehenderit
            perspiciatis odit dicta aspernatur qui consequatur, voluptatem
            molestias sunt dolore? Quae, repellat dolor dignissimos voluptate
            vitae officiis. Iste consequatur quasi sunt optio rem nihil ab.
            Blanditiis eaque modi eligendi aperiam non ex maxime placeat sed eos
            distinctio delectus alias ab, nesciunt ea! Perspiciatis, ex maxime
            explicabo maiores laborum quibusdam corporis accusantium id
            provident? Nostrum vero repellendus corrupti unde quo expedita enim
            facere excepturi tempore at obcaecati beatae qui, aut vitae
            pariatur, deleniti quibusdam cum recusandae est sed? Quod numquam
            deleniti laudantium vel corrupti dicta. Tempore veritatis maiores
            fuga nesciunt! Est officia minima non facere doloremque eius dolorum
            aut totam natus suscipit ut delectus ipsum nobis magni veritatis
            dolores fuga cumque labore inventore, quas dignissimos ex quod?
            Minima perspiciatis accusantium ipsum iste cum, molestias enim.
            </p>
            <p>
            Fuga, sint molestiae. Ad odit vel ut animi incidunt? Officia,
            eligendi! Voluptatum animi at ducimus? Assumenda sunt beatae sint
            corrupti fugiat nostrum eveniet debitis quos ipsum commodi amet
            asperiores quam ipsa, earum ad necessitatibus magni velit, minima
            non fuga perferendis molestiae nobis dignissimos inventore? Nostrum
            accusamus quibusdam atque porro nesciunt doloribus ipsa eum
            repellendus, fuga, rerum quia beatae assumenda sed laboriosam
            sapiente necessitatibus, voluptas libero? Eius, alias! Voluptates
            quod, consequuntur, asperiores accusamus enim dolorem, odit tempore
            iusto maxime vel rerum dicta? Voluptates odit itaque, distinctio non
            omnis placeat reprehenderit provident dolor asperiores libero
            adipisci facilis eaque tenetur natus numquam iste saepe, repellendus
            expedita ad! Illum tenetur nesciunt id consectetur, hic a culpa
            accusantium quia rem non ipsa nulla aut eos, harum ad vero
            exercitationem cumque odio pariatur magni aliquid. Exercitationem
            vitae expedita placeat nam, a cupiditate ratione ex, accusamus
            officiis modi dignissimos odio, facere aut.
          </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg py-10 text-center">
          <h4 className="text-teal-600 font-semibold mb-2">Scan the QR code</h4>

          <p className="text-gray-600 mb-4">
            You can also check the allergy advices using your phone
          </p>

          <img src={Qr} alt="qr" className="mx-auto w-24 mb-2" />

          <p className="text-orange-500 font-bold">SCAN ME!</p>
        </div>
      </div>
    </div>
  );
};

export default AllergyAdvice;
