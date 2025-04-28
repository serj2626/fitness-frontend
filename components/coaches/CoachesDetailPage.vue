<script lang="ts" setup>

</script>
<template>
  <div class="coaches-detail-page">
    <div class="container">
      <div class="coaches-detail-page__content">
        <div class="coaches-detail-page__content-info">
          <!-- <Icon name="icon:star" size="30" /> -->
          <NuxtImg class="coaches-detail-page__content-info-img" src="/coaches/five.webp" />
          <RatingComponent :rating="4.5" :count="5" />
        </div>
        <div class="coaches-detail-page__content-main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cupiditate unde? Qui, aut, id enim, dolore sed consectetur facere cum nisi suscipit dolor magnam placeat praesentium similique alias aperiam autem quibusdam? Dolorem laborum quia nesciunt eligendi nobis reprehenderit! Numquam consectetur hic recusandae sed eaque cupiditate delectus tempora, quam saepe animi asperiores dolor autem perferendis alias obcaecati culpa similique, explicabo ea nobis. Harum aut totam ea nam et suscipit, adipisci vel aliquam eaque ab est. Aspernatur quibusdam, sequi enim voluptate aperiam officiis rem nam odio impedit sunt assumenda in cupiditate iste fuga, expedita perferendis ullam. Esse, fugit reprehenderit! Non delectus, praesentium ullam eos ratione iure in, assumenda repudiandae error excepturi aliquid quasi quas libero, consequuntur temporibus maxime illo? Tenetur, eveniet debitis iure adipisci eius placeat suscipit quae doloremque! Maxime odit vel repellat, soluta eveniet quia. Earum mollitia quibusdam, beatae quo ut eos minima unde quam nihil reprehenderit veniam. Quo, nobis eos illo provident dolor, quia quod dolorem perferendis molestias voluptatum, alias repellendus! Pariatur, officiis modi. Doloribus odit error fuga quibusdam, eveniet, iste eos numquam dolorum ea, inventore suscipit nesciunt cum? Dolorem excepturi error nostrum corporis, quas deserunt, in optio, non blanditiis necessitatibus quae atque! Possimus id at assumenda hic atque alias minus aliquam, commodi blanditiis quas, qui nemo quae totam perspiciatis deleniti omnis voluptate corrupti tenetur non, earum veniam sed consequuntur. Vero, error sit quo eligendi ducimus consequatur harum accusamus beatae voluptate recusandae quas mollitia reiciendis eaque repudiandae, veritatis officia unde! Voluptatum sunt, sint quam odio enim sequi, ducimus quaerat et repellat, mollitia voluptas sit animi reiciendis doloremque nihil quibusdam numquam ab. Laborum, placeat. Vitae officia voluptatem itaque distinctio inventore labore omnis nostrum unde cumque culpa, odit ducimus reiciendis temporibus harum amet deserunt illum repellat sit? Quisquam, eos accusamus! Numquam quia magnam autem a dignissimos eos nam! Magnam illo error id totam fuga provident blanditiis ipsam fugit rerum dolore. Quos inventore laboriosam sapiente harum, rerum veniam vitae illo soluta perferendis excepturi? Suscipit, nemo eum blanditiis est minus debitis animi deleniti. Qui esse accusantium nesciunt reiciendis doloremque aperiam quidem alias unde cumque, dicta ratione reprehenderit illo aliquam repudiandae maxime in minima ipsam accusamus nostrum tempore. Harum enim earum odio! Atque optio quam neque quod a maiores molestias nulla ut cumque hic nihil voluptas magni, fuga rerum. Soluta voluptate at, fugit explicabo doloremque quibusdam harum dolorum perspiciatis, dignissimos, illum nobis necessitatibus dicta consequatur! Id quaerat, necessitatibus voluptatum voluptatibus perferendis earum perspiciatis amet nesciunt, rem enim, explicabo culpa? Consequuntur voluptatibus omnis nulla distinctio quas ullam voluptas enim officiis laboriosam repellat laudantium soluta officia at illo corporis, in itaque accusamus? Cumque, voluptatum minima dolor at quaerat odio reprehenderit veritatis! Quasi reiciendis incidunt quisquam optio laborum ea assumenda repudiandae rerum accusamus quos asperiores similique animi, officia numquam deleniti cumque explicabo minima placeat laboriosam architecto expedita nam beatae distinctio. Ab maiores quae recusandae alias! Iure esse ratione eos sed perspiciatis distinctio incidunt nemo. Ut tempore perspiciatis quidem enim dolores, aperiam fugit ipsum nobis eaque unde dolorum accusamus. Illo pariatur adipisci neque ullam soluta at facere laboriosam inventore, temporibus atque, recusandae ut? Odio nihil non modi ipsum provident sapiente deleniti officia quia quidem debitis. Veniam voluptates repellendus at est quia expedita voluptatibus excepturi cumque, in veritatis quasi. Itaque ex vero impedit quam fugit temporibus alias atque similique, cum obcaecati. Voluptatibus labore obcaecati quidem? abo totam maiores voluptatibus necessitatibus aut facilis mollitia. Facere voluptatibus modi laudantium quo ipsa accusamus quaerat consequuntur asperiores praesentium qui amet ipsam eos saepe aliquam, explicabo illo, quia non?
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.coaches-detail-page{
  padding-block: 100px;

  &__content{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;

    &-info{
      position: sticky;
      top: 100px;
      
      &-img{
        border-radius: 15px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>