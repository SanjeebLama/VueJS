<template>
  <v-container>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Your Request is Sent</span>
      <v-btn dark outline color="success" @click="snackbar=false">Close</v-btn>
    </v-snackbar>

    <!-- Introduction Text -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down">
      <v-layout row wrap justify-space-between>
        <v-flex class="pa-5" xs12 md6>
          <br />
          <br />
          <h1
            align="center"
            justify="center"
            class="display-2 font-weight-medium pa-4"
            data-aos="zoom-in-down"
            data-aos-duration="3000"
          >
            <br />YouStayStrong
          </h1>
          <p
            class="title font-weight-light pa-4"
            align="center"
            justify="center"
            data-aos="slide-right"
            data-aos-duration="3000"
          >
            A progressive web application (pwa) project to
            <b>
              raise awarness
              about mental health and to remind people to be kind to one another.
            </b>
            <br />
          </p>
        </v-flex>

        <v-flex xs12 md6>
          <v-row align="center" justify="center">
            <v-img
              src="index1.svg"
              max-width="450px"
              data-aos="slide-left"
              data-aos-duration="3000"
            ></v-img>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="display-1 font-weight-medium pa-2"
            data-aos="zoom-in-down"
            data-aos-duration="3000"
          >YouStayStrong</h1>
          <p
            class="title font-weight-light pa-4"
            align="center"
            justify="center"
            data-aos="slide-right"
            data-aos-duration="3000"
          >
            A progressive web application (pwa) project to
            <b>
              raise awarness
              about mental health and to remind people to be kind to one another.
            </b>
            <br />
            <br />
          </p>
        </v-flex>

        <v-flex class="pl-5" xs12 md6>
          <v-row align="center" justify="center">
            <v-img
              src="index1.svg"
              max-width="350px"
              data-aos="slide-left"
              data-aos-duration="3000"
            ></v-img>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- mobile -->
    <v-container class="hidden-sm-and-up">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md6>
          <h1 align="center" justify="center" class="headline font-weight-medium">
            <br />YouStayStrong
          </h1>
          <p class="subtitle-1 font-weight-light pa-2" align="center" justify="center">
            A progressive web application (pwa) to
            <b>
              raise awarness
              about mental health and to remind people to be kind to one another.
            </b>
            <br />
          </p>
        </v-flex>

        <v-flex xs12 md6>
          <v-row align="center" justify="center">
            <v-img src="index1.svg" max-width="250px"></v-img>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Quote  -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down">
      <br />
      <br />
      <br />
      <v-card
        dark
        raised
        data-aos="flip-up"
        data-aos-duration="1000"
        class="blue-grey darken-1"
        align="center"
        justify="center"
      >
        <h1 class="pt-4 display-2 font-weight-regular">Did you know?</h1>
        <v-row align="center" justify="center" class="pa-4">
          <h1 class="display-1 font-weight-bold">
            "One person dies every 40 seconds
            from suicide - WHO
          </h1>
        </v-row>
        <p class="title font-weight-light pa-4">
          Suicide was the second leading cause of death among
          young people 15-29 years old globally in 2016.
          One in 10 young people experienced a period of major depression.
          Close to 800,000 people die due to suicide every year.
          <br />
          <br />
        </p>
      </v-card>
    </v-container>

    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up">
      <v-card
        dark
        raised
        data-aos="flip-up"
        data-aos-duration="1000"
        class="blue-grey darken-1"
        align="center"
        justify="center"
      >
        <h1 class="pt-4 headline font-weight-light">Did you know?</h1>
        <v-row align="center" justify="center" class="pa-2">
          <h1 class="subtitle-1 font-weight-light">
            "One person dies every 40 seconds
            from suicide - WHO
          </h1>
        </v-row>
        <p class="body-2 font-weight-light pa-2">
          Suicide was the second leading cause of death among
          young people 15-29 years old globally in 2016.
          One in 10 young people experienced a period of major depression.
          Close to 800,000 people die due to suicide every year.
          <br />
          <br />
        </p>
      </v-card>
    </v-container>

    <!-- mobile -->
    <v-container class="hidden-sm-and-up">
      <v-card
        dark
        raised
        data-aos="flip-up"
        data-aos-duration="1000"
        class="blue-grey darken-1"
        align="center"
        justify="center"
      >
        <h1 class="pt-4 subtitle-1 font-weight-bold">Did you know?</h1>
        <v-row align="center" justify="center">
          <h1 class="pa-4 body-1 font-weight-regular">
            "One person dies every 40 seconds
            from suicide - WHO
          </h1>
        </v-row>
        <p class="caption pa-4">
          Suicide was the second leading cause of death among
          young people 15-29 years old globally in 2016.
          One in 10 young people experienced a period of major depression.
          Close to 800,000 people die due to suicide every year.
          <br />
          <br />
        </p>
      </v-card>
    </v-container>

    <!-- We offer text -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down">
      <h1 class="pt-4 display-3 font-weight-bold" align="center" justify="center">We Offer</h1>
    </v-container>

    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up">
      <v-divider class="ma-5"></v-divider>
      <h1 class="display-3 font-weight-bold" align="center" justify="center">We Offer</h1>
    </v-container>

    <!-- mobile We Offer -->
    <v-container class="hidden-sm-and-up">
      <v-divider class="pa-4"></v-divider>
      <h1
        class="pt-4 display-1 font-weight-bold cyan--text"
        align="center"
        justify="center"
      >We Offer</h1>
    </v-container>

    <!-- Message Part -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/message" style="text-decoration:none">Message</router-link>
      </h1>
      <p class="heading" align="center" justify="center">To let you know that your are not alone</p>
      <v-layout row wrap justify-space-between>
        <v-flex class="pl-5" xs12 md6>
          <router-link to="/message">
            <v-row align="center" justify="center">
              <v-img
                src="message.svg"
                max-width="500px"
                data-aos="slide-left"
                data-aos-duration="3000"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>

        <v-flex class="pa-5" xs12 md6>
          <p
            class="title font-weight-light pa-4"
            align="center"
            justify="center"
            data-aos="slide-right"
            data-aos-duration="3000"
          >
            Some of us are
            <b>mistreated</b>, Some of us are
            <b>misunderstood</b> and
            Some of us are
            <b>abused</b>.
            Our pain maybe different
            but
            <u>we all feel the pain</u>.
            You may not be able to help personally.
            But you can
            <i>send message, regards or your favorite quote</i>
            to people who are having hard time.
            <br />
          </p>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/message" style="text-decoration:none">Message</router-link>
      </h1>
      <p class="caption" align="center" justify="center">To let you know that your are not alone</p>
      <br />
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md6>
          <router-link to="/message">
            <v-row align="center" justify="center">
              <v-img
                src="message.svg"
                max-width="400px"
                data-aos="slide-left"
                data-aos-duration="3000"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>

        <v-flex xs12 md6>
          <p
            class="pa-4 ma-2 subtitle-2 font-weight-light"
            align="center"
            justify="center"
            data-aos="slide-right"
            data-aos-duration="3000"
          >
            Some of us are
            <b>mistreated</b>, Some of us are
            <b>misunderstood</b> and
            Some of us are
            <b>abused</b>.Our pain maybe different
            but
            <u>we all feel the pain</u>.
            You may not be able to help personally.
            But you can
            <i>send message, regards or your favorite quote</i>
            to people who are having hard time.
          </p>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- mobile -->
    <v-container class="hidden-sm-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/message" style="text-decoration:none">Message</router-link>
      </h1>
      <p
        class="overline pa-2"
        align="center"
        justify="center"
      >To let you know that your are not alone</p>
      <v-layout row wrap justify-space-between>
        <v-flex class="pt-5" xs12 md6>
          <router-link to="/message">
            <v-row align="center" justify="center">
              <v-img
                src="message.svg"
                max-width="250px"
                data-aos="slide-left"
                data-aos-duration="3000"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>

        <v-flex xs12 md6>
          <p
            class="caption font-weight-light pa-4"
            align="center"
            justify="center"
            data-aos="slide-right"
            data-aos-duration="3000"
          >
            <br />
            <br />Some of us are
            <b>mistreated</b>, Some of us are
            <b>misunderstood</b> and
            Some of us are
            <b>abused</b>.
            Our pain maybe different
            but
            <u>we all feel the pain</u>.
            You may not be able to help personally.
            But you can
            <i>send message, regards or your favorite quote</i>
            to people who are having hard time.
            <br />
          </p>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Music -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/music" style="text-decoration:none">Music</router-link>
      </h1>
      <p class="heading" align="center" justify="center">To make you feel refreshed</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-4 ma-4 title font-weight-light"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <br />
            <b>Music</b> is a unique medicine which has power to heal and make
            us feel refreshed and relaxed of all the anxiety and stress we face in everyday life.
            It is not just a part of an entertainment, it is a great way of healing our pains,
            making us forget about everything, and
            takes us into the world of melody.
            <br />
          </h1>
        </v-flex>

        <v-flex class="pa-4" xs12 md6>
          <router-link to="/music">
            <v-row align="center" justify="center">
              <v-img
                src="music.svg"
                max-width="450px"
                data-aos="fade-up-right"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/music" style="text-decoration:none">Music</router-link>
      </h1>
      <p class="caption" align="center" justify="center">To make you feel refreshed</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex xs12 md6>
          <router-link to="/music">
            <v-row align="center" justify="center">
              <v-img
                src="music.svg"
                max-width="350px"
                data-aos="fade-up-right"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>

        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-4 ma-4 subtitle-2 font-weight-light"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <br />
            <b>Music</b> is a unique medicine which has power to heal and make
            us feel refreshed and relaxed of all the anxiety and stress we face in everyday life.
            It is not just a part of an entertainment, it is a great way of healing our pains,
            making us forget about everything, and
            takes us into the world of melody.
            <br />
          </h1>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- mobile -->
    <v-container class="hidden-sm-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/music" style="text-decoration:none">Music</router-link>
      </h1>
      <p class="overline" align="center" justify="center">To make you feel refreshed</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex class="pt-4" xs12 md6>
          <router-link to="/music">
            <v-row align="center" justify="center">
              <v-img
                src="music.svg"
                max-width="250px"
                data-aos="fade-up-right"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>
        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-4 caption font-weight-light"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <br />
            <b>Music</b> is a unique medicine which has power to heal and make
            us feel refreshed and relaxed of all the anxiety and stress we face in everyday life.
            It is not just a part of an entertainment, it is a great way of healing our pains,
            making us forget about everything, and
            takes us into the world of melody.
            <br />
          </h1>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-container class="hidden-sm-and-up">
      <v-layout row wrap justify-spacebetween>
        <v-flex class="pa-4" xs12 md6>
          <router-link to="/music">
            <v-row align="center" justify="center">
              <v-img src="music.svg" max-width="400px"></v-img>
            </v-row>
          </router-link>
        </v-flex>
        <v-flex xs12 md6>
          <h1 align="center" justify="center" class="pa-2 subtitle-1 font-weight-light">
            <br />
            <b>Music</b> is a unique medicine which has power to heal and make
            us feel refreshed and relaxed of all the anxiety and stress we face in everyday life.
            It is not just a part of an entertainment, it is a great way of healing our pains,
            making us forget about everything, and
            takes us into the world of melody.
            <br />
          </h1>
        </v-flex>
      </v-layout>
    </v-container>-->

    <!--Resources -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/resources" style="text-decoration:none">Resource</router-link>
      </h1>
      <p class="heading" align="center" justify="center">Wisdom to imporve your daily life</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex class="pa-4" xs12 md6>
          <router-link to="/resources">
            <v-row align="center" justify="center">
              <v-img
                src="resource.svg"
                max-width="400px"
                data-aos="fade-up-right"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>

        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-4 ma-4 title font-weight-light"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <br />
            <br />In a world,
            <u>
              full of information;
              <b>Ignorance</b> is a choice
            </u>.
            You can find lifestyle coach,
            internet personality, story teller, and motivational speaker
            for your personal development
            in
            <router-link to="/resources" style="text-decoration:none">
              <v-icon>mdi-charity</v-icon>
            </router-link>Resources
            <br />
          </h1>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/resources" style="text-decoration:none">Resource</router-link>
      </h1>
      <p class="caption" align="center" justify="center">Wisdom to imporve your daily life</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex xs12 md6>
          <router-link to="/resources">
            <v-row align="center" justify="center">
              <v-img
                src="resource.svg"
                max-width="350px"
                data-aos="fade-up-right"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>

        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-2 subtitle-2 font-weight-light"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <br />
            <br />In a world,
            full of information;
            <b>Ignorance</b> is a choice
            .
            You can find lifestyle coach,
            internet personality, story teller, and motivational speaker
            for your personal development
            in
            <router-link to="/resources" style="text-decoration:none">
              <v-icon>mdi-charity</v-icon>
            </router-link>Resources
            <br />
          </h1>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- mobile -->
    <v-container class="hidden-sm-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <router-link to="/resources" style="text-decoration:none">Resource</router-link>
      </h1>
      <p class="overline" align="center" justify="center">Wisdom to imporve your daily life</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex class="pt-4" xs12 md6>
          <router-link to="/resources">
            <v-row align="center" justify="center">
              <v-img
                src="resource.svg"
                max-width="250px"
                data-aos="fade-up-right"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </router-link>
        </v-flex>

        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-4 caption font-weight-light"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <br />
            <br />In a world,
            full of information.
            <b>Ignorance</b> is a choice
            .
            You can find lifestyle coach,
            internet personality, story teller, and motivational speaker
            for your personal development
            in
            <router-link to="/resources" style="text-decoration:none">
              <v-icon>mdi-charity</v-icon>
            </router-link>Resources
            <br />
          </h1>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-container class="hidden-sm-and-up pa-2">
      <v-card raised dark class="teal lighten-1">
        <v-row align="center" justify="center" class="pa-3">
          <h1 class="subtitle-1 font-weight-medium pa-2">
            You can also find lifestyle coach,
            internet personality, story teller, and motivational speaker
            for your personal development
            in
            <router-link to="/resources" style="text-decoration:none">
              <v-icon>mdi-charity</v-icon>
            </router-link>Resources.
          </h1>
        </v-row>

      </v-card>
      <br />
    </v-container>-->

    <!-- Blog Post -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <a href="https://medium.com/grow-with-me" target="_blank" style="text-decoration:none">Blog</a>
      </h1>
      <p class="heading" align="center" justify="center">To inspire you to take actions</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-6 ma-4 title font-weight-light"
            data-aos="slide-right"
            data-aos-duration="1500"
          >
            <br />
            <br />The internet has solved old economic problem by giving us new psychological problem.
            In a world where Internet has not only open-sourced information.
            It has also
            <i>open-sourced insecurity, self-doubt and shame</i>.
            We provide you the story of
            <b>
              great personalities in the history and how they
              overcome their probelms, self-dobuts and failures
            </b>.
            <br />
          </h1>
        </v-flex>

        <v-flex class="pa-4" xs12 md6>
          <a href="https://medium.com/grow-with-me" target="_blank" style="text-decoration:none">
            <v-row align="center" justify="center">
              <v-img
                src="blog.svg"
                max-width="450px"
                data-aos="slide-left"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </a>
        </v-flex>
      </v-layout>
      <v-divider class="ma-4 dark"></v-divider>
    </v-container>

    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <a href="https://medium.com/grow-with-me" target="_blank" style="text-decoration:none">Blog</a>
      </h1>
      <p class="caption" align="center" justify="center">To inspire you to take actions</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex xs12 md6>
          <v-flex class="pt-1" xs12 md6>
            <a href="https://medium.com/grow-with-me" target="_blank" style="text-decoration:none">
              <v-row align="center" justify="center">
                <v-img
                  src="blog.svg"
                  max-width="350px"
                  data-aos="slide-left"
                  data-aos-duration="1500"
                ></v-img>
              </v-row>
            </a>
          </v-flex>
          <h1
            align="center"
            justify="center"
            class="pa-2 ma-2 subtitle-2 font-weight-light"
            data-aos="slide-right"
            data-aos-duration="1500"
          >
            <br />
            <br />The internet has solved old economic problem by giving us new psychological problem.
            In a world where Internet has not only open-sourced information.
            It has also
            <i>open-sourced insecurity, self-doubt and shame</i>.
            We provide you the story of
            <b>
              great personalities in the history and how they
              overcome their probelms, self-dobuts and failures
            </b>.
            <br />
          </h1>
        </v-flex>
      </v-layout>
      <v-divider class="ma-4 dark"></v-divider>
    </v-container>

    <!-- mobile -->
    <v-container class="hidden-sm-and-up">
      <v-divider class="ma-4"></v-divider>
      <h1 class="display-1" align="center" justify="center">
        <a href="https://medium.com/grow-with-me" target="_blank" style="text-decoration:none">Blog</a>
      </h1>
      <p class="overline" align="center" justify="center">To inspire you to take actions</p>

      <v-layout row wrap justify-spacebetween>
        <v-flex class="pt-4" xs12 md6>
          <a href="https://medium.com/grow-with-me" target="_blank" style="text-decoration:none">
            <v-row align="center" justify="center">
              <v-img
                src="blog.svg"
                max-width="250px"
                data-aos="slide-left"
                data-aos-duration="1500"
              ></v-img>
            </v-row>
          </a>
        </v-flex>
        <v-flex xs12 md6>
          <h1
            align="center"
            justify="center"
            class="pa-4 caption font-weight-light"
            data-aos="slide-right"
            data-aos-duration="1500"
          >
            <br />
            <br />The internet has solved old economic problem by giving us new psychological problem.
            In a world where Internet has not only open-sourced information.
            It has also
            <i>open-sourced insecurity, self-doubt and shame</i>.
            We provide you the story of
            <b>
              great personalities in the history and how they
              overcome their probelms, self-dobuts and failures
            </b>.
            <br />
          </h1>
        </v-flex>
      </v-layout>
      <v-divider class="ma-4 dark"></v-divider>
    </v-container>

    <!-- End + Form -->
    <!-- for large tablet, laptop to desktop and 4k ultra wide wides -->
    <v-container class="hidden-sm-and-down ma-4 pa-4">
      <v-card
        dark
        raised
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="teal darken-1"
      >
        <v-row class="pa-4" align="center" justify="center">
          <p class="title font-weight-regular ma-4" align="center" justify="center">
            <b>
              <u>Always Be kind to one another</u>
            </b>
            <br />In the hustle and bustle of our daily lives, each human being faces some sort of stress factor each day
            Doing a kind act to make a close family, a friend, or a stranger who is sad feel better can also make us feel good, because we feel the same relief they do and because we are putting something right
          </p>
          <MessageForm @messageSent="snackbar= true" />

          <MusicForm @songSent="snackbar=true" />
        </v-row>
      </v-card>
    </v-container>

    <!-- for small to medium tablet -->
    <v-container class="hidden-xs-only hidden-md-and-up pa-4">
      <v-card
        dark
        raised
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="teal darken-1"
      >
        <v-row class="pa-4" align="center" justify="center">
          <p class="subtitle-2 font-weight-regular ma-4" align="center" justify="center">
            <b>
              <u>Always Be kind to one another</u>
            </b>
            <br />In the hustle and bustle of our daily lives, each human being faces some sort of stress factor each day
            Doing a kind act to make a close family, a friend, or a stranger who is sad feel better can also make us feel good, because we feel the same relief they do and because we are putting something right
          </p>
          <MessageForm @messageSent="snackbar= true" />

          <MusicForm @songSent="snackbar=true" />
        </v-row>
      </v-card>
    </v-container>

    <!-- mobile -->
    <v-container class="hidden-sm-and-up">
      <v-card dark raised class="teal darken-1">
        <v-row class="pa-4" align="center" justify="center">
          <p class="caption font-weight-regular" align="center" justify="center">
            <b>
              <u>Always Be kind to one another</u>
            </b>
            <br />
            <br />In the hustle and bustle of our daily lives, each human being faces some sort of stress factor each day
            Doing a kind act to make a close family, a friend, or a stranger who is sad feel better can also make us feel good, because we feel the same relief they do and because we are putting something right
          </p>
          <MessageForm @messageSent="snackbar= true" />

          <MusicForm @songSent="snackbar=true" />
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import MessageForm from "../components/MessageForm.vue";
import MusicForm from "../components/MusicForm.vue";

export default {
  components: { MessageForm, MusicForm },
  data() {
    return {
      snackbar: false
    };
  }
};
</script>

