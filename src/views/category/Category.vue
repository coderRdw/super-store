<template>
  <div class="wrapper" ref="wrapper">
  <ul class="content">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
    <li>元素6</li>
    <li>元素7</li>
    <li>元素8</li>
    <li>元素9</li>
    <li>元素10</li>
    <li>元素11</li>
    <li>元素12</li>
    <li>元素13</li>
    <li>元素14</li>
    <li>元素15</li>
    <li>元素16</li>
    <li>元素17</li>
    <li>元素18</li>
    <li>元素19</li>
    <li>元素20</li>
    <li>元素21</li>
    <li>元素22</li>
    <li>元素23</li>
    <li>元素24</li>
    <li>元素25</li>
    <li>元素26</li>
    <li>元素27</li>
    <li>元素28</li>
    <li>元素29</li>
    <li>元素30</li>
    <li>元素31</li>
    <li>元素32</li>
    <li>元素33</li>
    <li>元素34</li>
    <li>元素35</li>
    <li>元素36</li>
    <li>元素37</li>
    <li>元素38</li>
    <li>元素39</li>
    <li>元素40</li>
    <li>元素41</li>
    <li>元素42</li>
    <li>元素43</li>
    <li>元素44</li>
    <li>元素45</li>
    <li>元素46</li>
    <li>元素47</li>
    <li>元素48</li>
    <li>元素49</li>
    <li>元素50</li>
  </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    // console.log(document.querySelector('.wrapper'))

    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:3,
      click:true,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
       console.log(position)
    })
    this.scroll.on('pullingUp',()=>{
      console.log("加载")
    })
  }
}
</script>

<style scoped>
.wrapper{
  height: 200px;
  background-color: red;
  /*overflow:hidden;*/
  /*overflow-y: scroll;*/
}
</style>
