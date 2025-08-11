import React from "react";
import Container from "@/Components/Common/Container";
import AboutUsTab from "@/Components/Common/AboutUsTab";

const Page = () => {
  return (
    <>
      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <AboutUsTab />

            {/* Right */}
            <div className="grow">
              <h3 className="text-secondary-black text-xl font-semibold mb-1">
                How it works
              </h3>
              <p className="text-secondary-black text-lg leading-[160%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam aliquid dignissimos corporis nihil nostrum quia a,
                fugiat illum laboriosam, numquam quas omnis expedita explicabo
                eaque, eum nam molestias dolorum sint quisquam iure mollitia.
                Neque alias consectetur debitis quod dignissimos earum id
                accusantium reprehenderit vel iusto officia quidem, asperiores
                magni harum rerum aliquid voluptas, laudantium sint veniam
                nihil. Nam quo, molestiae enim molestias tempore quisquam,
                delectus pariatur aliquid vel incidunt aspernatur tempora
                distinctio minima iusto odio accusantium autem? Esse quam
                laudantium fugit reiciendis commodi exercitationem, optio
                explicabo! Corporis sequi maxime, animi dolorum totam optio odit
                ipsum, tenetur minus, praesentium hic a possimus at impedit.
                Sunt, expedita aliquam quibusdam quasi sint eaque, nisi quaerat
                voluptates aut enim ipsa dolore possimus voluptatem quod
                laudantium accusantium tenetur cum ipsam earum officia pariatur
                assumenda? Eos tenetur aspernatur doloribus veritatis dolorem
                ipsum deleniti explicabo! Numquam ad sapiente reiciendis.
                Explicabo reiciendis minus quae sit enim vero natus architecto
                repudiandae! Quis, aliquam veritatis, nesciunt voluptas
                voluptatum quas excepturi sapiente debitis non ab unde
                temporibus dolor quibusdam id officia dolorem? Illum ad quia
                sint totam vero eveniet nam molestias perspiciatis commodi. Quod
                nesciunt optio eveniet error placeat quaerat voluptatem,
                perferendis deserunt dolorem sequi deleniti adipisci, reiciendis
                soluta quibusdam omnis veritatis ex similique esse cumque
                aliquam provident! Ut praesentium animi error explicabo eius
                cumque, reiciendis ducimus vero accusantium perferendis quis eum
                illum culpa ipsa. Quo at tempore dignissimos eum nemo quia,
                laboriosam ex unde eius repudiandae, earum animi odit nesciunt
                vitae commodi, facere aperiam asperiores consequatur ratione
                illo cum tempora? Aspernatur labore nesciunt officiis cum
                nostrum! Ab, hic repellat tenetur ut ducimus quisquam
                consequuntur facilis nesciunt aperiam aut inventore porro
                cupiditate veritatis odio sequi quas ullam ipsum? Iste vero,
                atque exercitationem nihil perferendis earum, quas et
                voluptatibus dolore minus ad. Saepe, similique autem recusandae
                facilis aut laborum voluptate aliquam repudiandae?
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
