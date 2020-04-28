<template>
  <div class="about-page">
    <div class="container bs-width-limit">
      <div class="introduce">
        <p>
          I am a product designer who sits at the intersection of design and engineering, with a background in user-centered design. I have a particular passion for design systems, design tools and design processes and how we use those things to build for the web.
        </p>
        <p>
          Right now, I'm working on the design platforms team at Squarespace, building a design system to support our multi-product ecosystem. Prior to that, I designed newsroom editorial tools and and design systems for The Wall Street Journal and WeWork's first consumer-facing design system.
        </p>
      </div>
      <div class="experience">
        <div class="divide-block">
          <div class="title">
            Experience
          </div>
          <div>
            <div class="step">
              <p class="label">Squarespace</p>
              <p>August 2019 – Present</p>
              <p>Product Designer, Design Systems</p>
            </div>
            <div class="step">
              <p class="label">The Wall Street Journal</p>
              <p>July 2018 – July 2019</p>
              <p>Product Designer</p>
            </div>
            <div class="step">
              <p class="label">WeWork</p>
              <p>July 2018 – July 2019</p>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
        <div class="divide-block">
          <div class="title">
            Education
          </div>
          <div>
            <div class="step">
              <p class="label">The University of Sydney</p>
              <p>2010 – 2012</p>
              <p>Product Designer, Design Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.about-page {
  //   background: #fff;
  .introduce {
    padding: 120px 30px 30px;
    font-weight: bold;
    font-size: 20px;
    p {
      margin-bottom: 10px;
    }
  }
  .experience {
    // margin-top: 100px;
    padding: 120px 30px 30px;
    .divide-block {
      display: flex;
      margin-bottom: 20px;
      .title {
        flex: 0 1 280px;
        font-size: 30px;
        font-weight: bold;
      }
      .step {
        width: 100%;
        margin-bottom: 60px;
        .label {
          font-size: 22px;
          font-weight: bold;
        }
      }
    }
  }
  //   .container {
  //     display: flex;
  //     flex-direction: row;
  //   }
}
@media screen and (max-width: 1204px) {
  .about-page {
    .experience {
      // margin-top: 100px;
      padding: 120px 30px 30px;
      .divide-block {
        display: block;
        margin-bottom: 20px;
        .title {
          flex: 100%;
          width: 100%;
          font-size: 30px;
          font-weight: bold;
        }
        .step {
          width: 100%;
          margin-bottom: 60px;
          .label {
            font-size: 22px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
