<template>
<div id='catelogy'>
  <article id="githubinfo"  v-for="item in items">
    <dl class="user-data">
      <dt>Avatar:</dt>
      <dd class="user-avatar">
        <img src="https://avatars3.githubusercontent.com/u/7686174?v=3">
      </dd>
      <!--dt>Fullname:</dt>
      <dd class="user-name">chengxiang</dd> -->
      <dt>Account:</dt>
      <a class="user-github-url"><dd class="user-account">ZjuCx</dd></a>
    </dl>
    <dl class="user-stats">
      <dt>Repos</dt>
      <a class="user-repos-url"><dd class="user-repos" data-stats="repos">40</dd></a>

      <dt>Followers</dt>
      <a class="user-followers-url"><dd class="user-followers" data-stats="followers">20</dd></a>
    </dl>
  </article>
  <article id="githubinfo">
    <dl class="user-data">
      <dt>Avatar:</dt>
      <dd class="user-avatar">
        <img src="../assets/add.png">
      </dd>
      <!--dt>Fullname:</dt>
      <dd class="user-name">chengxiang</dd> -->
      <dt>Account:</dt>
      <a class="user-github-url"><dd class="user-account">Add a Catelogy</dd></a>
    </dl>
    <dl class="user-stats">
      <dt>Repos</dt>
      <a class="user-repos-url"><dd class="user-repos" data-stats="repos">0</dd></a>

      <dt>Followers</dt>
      <a class="user-followers-url"><dd class="user-followers" data-stats="followers">0</dd></a>
    </dl>
  </article>
</div>
</template>

<script>
export default {
  name: 'catelogy',
  data () {
    return {
      items: [{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"}],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
#catelogy {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: space-between;
  padding:20px 20px 20px 95px;
  min-height:500px;
  // overflow-y:auto;
  max-height:700px;
  // overflow:scroll;

  #githubinfo {
    font-family: "Helvetica", Arial, sans-serif;
    display: inline-block;
    width: 200px;
    height: 280px;
    overflow: hidden;
    border: 1px solid #D5D5D5;
    border-radius: 6px;
    position: relative;
    // background-color: rgba(0, 0, 0, 0.1);
    background: #f7f7f7 no-repeat 5px 5px;
    text-align: center;
    color: #fff;
    font-weight: 100;
    transition: background 1000ms ease-out;
    // margin:25px;
    margin:0 20px 30px 0px;
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    dl,
    dd {
      margin: 0;
      .user-avatar {
        display: inline-block;
        margin: 20px 0 10px;
      }

      .user-name,
      .user-account {
        margin: 5px 0;
      }
    }

    dt {
      display: none;
    }

    .user-data {
      // background: #fff url('webcomponent/github.png') no-repeat 5px 5px;
      // background: #2a2a2a  no-repeat 5px 5px;
      background-size: 25px;
      height: 85px;
    }

    .user-avatar img {
      border-radius: 100%;
      height: 120px;
      width: 120px;
      border: 3px solid #fff;
      vertical-align: middle;
      background-color: #fff;
    }

    .user-name {
      font-size: 24px;
    }

    .user-account {
      font-size: 16px;
      color: #999;
      margin: 5px 0;
    }

    .user-stats {
      border-top: 1px groove #999;
      position: relative;
      top: 125px;
    }

    .user-stats {
      dd {
        padding: 10px 20px;
      }
    }

    .user-repos,
    .user-following,
    .user-followers {
      display: inline-block;
      font-size: 22px;
      color: #999;
    }

    .user-repos:after,
    .user-following:after,
    .user-followers:after {
      content: attr(data-stats);
      text-transform: uppercase;
      display: block;
      font-size: 11px;
      color: #666;
      font-weight: normal;
      line-height: 1.7em;
    }
  }
}
</style>
