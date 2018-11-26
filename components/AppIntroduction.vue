<template>
  <div class="intro">
    <dl>
        <div class="box" v-for="item in keys" :key="item">
          <dt>:{{item[1]}}</dt><dd>{{post[item[0]] || "- - -" }}</dd>
        </div>
      </dl>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  data() {
    return {
      keys: [ 
      ["title", "Title" ],
      ["pronouns", "Pronouns"],
      ["browser", "Browser"],
      ["location", "Location"],
      ["twitter", "Twitter"],
      ["facebook", "Facebook"],
      ["linkedin", "LinkedIn"],
      ["team", "Team"],
      ["place", "Place"],
      ["book", "Book"],
      ["meal", "Meal"],
      ["petpeeves", "Petpeeves"],
      ["feedback", "Feedback"],
      ["others", "Others"],
     ]
    };
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .intro {
    width: 100%;
  }
  aside.sidebar {
    width: 100%;
    margin: 10px 0;
  }
}

h1 {
  font-size: 45px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

p {
  margin: 10px 0;
}

.top {
  margin: 30px 0 0;
}

dl {
  padding: 0.5em;
}
dt {
  font-size: 1.5em;
  float: left;
  clear: left;
  width: 200px;
  text-align: left;
  font-weight: bold;
  color: #aaa;
}

dd {
  clear: both;
  margin-bottom: 1em;
  font-size: 1.25em;
}
.box {
  float: left;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 1em;
  padding: 0.5em;
}
</style>
