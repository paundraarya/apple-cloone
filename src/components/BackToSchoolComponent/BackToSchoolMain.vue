<template>
  <main>
    <!-- <div class="bg-gray-200">
         exit header navbar container 
        <div class="max-w-5xl py-2 mx-auto">
           nav exit page 
          <nav class="flex gap-2 text-xs divide-x-2 divide-gray-400 border-spacing-1">
            <a href="#">Education Store Home</a>
            <a href="#" class="ps-2">Exit</a>
          </nav>
        </div>
      </div> -->

    <div class="bg-white">
      <!-- header container -->
      <div class="max-w-lg pt-2 mx-auto sm:max-w-2xl md:max-w-5xl lg:max-w-5xl">
        <!-- header content -->
        <div class="max-w-xs mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl">
          <div class="pt-20 space-y-5 text-center">
            <h1 class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Bring on college.
            </h1>
            <h2 class="text-sm sm:text-md md:text-xl lg:text-2xl">
              Save on Mac or iPad with education pricing. Plus get a gift card up to $150,footnote1
              20% off AppleCare+,and more.
            </h2>
            <div>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-header-202306?wid=1688&hei=528&fmt=png-alpha&.v=1685682466790"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <!-- main navbar container -->
      <div class="sticky top-0 w-full bg-gray-200 backdrop-blur-sm bg-opacity-95">
        <div class="max-w-[18rem] mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
          <!-- navbar -->
          <div class="py-2 border-b-2 border-b-gray-300">
            <nav class="flex justify-between text-xs font-medium sm:text-sm md:text-md lg:text-lg">
              <a href="#">Shop Mac</a>
              <a href="#">Shop iPad</a>
              <a href="#">More ways to save</a>
            </nav>
          </div>
        </div>
      </div>

      <!-- mac -->
      <div class="max-w-lg pt-2 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <div class="py-10">
          <!-- mac header -->
          <div class="max-w-[18rem] sm:max-w-xl md:max-w-3xl mx-auto space-y-4 text-center">
            <h4 class="font-semibold lg:text-2xl sm:text-lg md:text-xl text-md">Mac</h4>
            <h3 class="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              Power that's in a class by itself.
            </h3>
            <p class="text-sm sm:text-md md:text-lg lg:text-xl">
              Mac delivers the performance to run multiple apps at once — like Microsoft 365, Adobe
              Illustrator, Autodesk AutoCAD®, and more — without missing a beat. A stunning display
              with loads of room for work or play. And enough battery life to power through an
              all-nighter.
            </p>
          </div>

          <!-- mac gallery -->
          <div class="p-5 md:p-0">
            <!-- row 1 and 2 -->
            <div class="flex flex-col grid-cols-3 gap-2 mt-10 md:grid">
              <!-- first row -->
              <!-- first col -->
              <div class="md:col-span-2">
                <CardShowCase
                  :imgUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mac-mba-hero-202306?wid=1110&hei=720&fmt=png-alpha&.v=1684255812965'"
                  :title="'MacBook Air'"
                  :subTitle="'Big Screen on campus'"
                />
              </div>
              <!-- second col -->
              <a href="#" class="px-10 pt-8 space-y-2 bg-white rounded-lg">
                <CardShowPrice
                  :imgUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mac-mba-product-202306?wid=640&hei=478&fmt=png-alpha&.v=1684255812818'"
                  :title="'MacBook Air'"
                  :desc="'From $899 or $74.91/mo. for 12 mo.'"
                  :subDesc="'includes education discount'"
                  :colorUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mba-swatches-202306?wid=120&hei=28&fmt=png-alpha&.v=1685682466612'"
                />
              </a>

              <!-- second row -->
              <!-- first col -->
              <a href="#" class="px-10 pt-8 space-y-2 bg-white rounded-lg">
                <CardShowPrice
                  :imgUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mac-mbp-product-202306?wid=640&hei=478&fmt=png-alpha&.v=1684255810626'"
                  :title="'MacBook Pro'"
                  :desc="'From $1199 or $99.91/mo. for 12 mo.'"
                  :subDesc="'includes education discount'"
                  :colorUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mbp-swatches-202306?wid=64&hei=28&fmt=png-alpha&.v=1685682466618'"
                />
              </a>
              <!-- second col -->
              <div class="col-span-2">
                <CardShowCase
                  :imgUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mac-mbp-hero-202306?wid=1160&hei=858&fmt=png-alpha&.v=1684255810694'"
                  :title="'MacBook Pro'"
                  :subTitle="'Big Screen on campus'"
                />
              </div>
            </div>
            <!-- row 3 -->
            <div class="flex gap-2 mt-2">
              <!-- third row -->
              <!-- first col -->
              <CardShowPrice
                :imgUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mac-imac-product-202306?wid=640&hei=478&fmt=png-alpha&.v=1684255813003'"
                :title="'iMac'"
                :desc="'From $1249 or $104.08/mo. for 12 mo.'"
                :subDesc="'includes education discount'"
                :colorUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-imac-swatches-202306?wid=232&hei=28&fmt=png-alpha&.v=1685682466599'"
              />
              <!-- second col -->
              <CardShowPrice
                :imgUrl="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-mac-macmini-product-202306?wid=640&hei=478&fmt=png-alpha&.v=1684255807890'"
                :title="'iMac'"
                :desc="'From $1249 or $104.08/mo. for 12 mo.'"
                :subDesc="'includes education discount'"
              />
            </div>

            <!-- compare link -->
            <div class="my-10 text-center">
              <a href="#" class="text-sm text-blue-700 md:text-lg sm:text-md lg:text-xl"
                >Compare Mac Models ></a
              >
            </div>

            <!-- debate -->
            <div class="p-5 bg-white rounded-lg lg:p-16 lg:my-10">
              <div class="flex flex-col items-center justify-between md:flex-row">
                <div class="flex flex-col gap-2">
                  <h4 class="text-lg font-semibold md:text-2xl sm:text-xl lg:text-3xl">
                    Your first college debate:
                  </h4>
                  <p class="text-xs lg:text-lg md:text-md sm:text-sm">
                    Choose a Mac, iPad, or both. There are no wrong answers.
                  </p>
                  <a href="#" class="text-sm text-blue-700 md:text-lg sm:text-md lg:text-xl"
                    >Download the comparison guide (PDF)</a
                  >
                  <a href="#" class="text-sm text-blue-700 md:text-lg sm:text-md lg:text-xl"
                    >Learn more about Apple for college ></a
                  >
                </div>

                <div class="flex justify-end">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-college-debate-202306?wid=686&hei=472&fmt=png-alpha&.v=1685682466809"
                    class="max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CardShowCase from './CardShowCase.vue'
import CardShowPrice from './CardShowPrice.vue'
</script>
