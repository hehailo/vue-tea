<template>
  <div class="Category">
    <div class="header"><NavBar title="分类"></NavBar></div>
    <div class="main">
      <!-- 左侧菜单 -->
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="item.name"
            v-for="item in leftArr"
            :key="item.id"
            @click="changeMenu"
          />
        </van-sidebar>
      </div>
      <!-- 右侧内容 -->
      <div class="right" ref="right">
        <div>
          <div class="headImg">
            <van-image
              width="100%"
              fit="cover"
              height="120"
              src="/img/bg/bg08.png"
            />
          </div>
          <div class="card" v-for="item in rightArr" :key="item.level2Id">
            <van-cell :value="item.name" />
            <van-grid :column-num="3" clickable :border="false">
              <van-grid-item
                v-for="cate in item.list"
                :key="cate.level3Id"
                :text="cate.name"
              >
                <template #icon>
                  <van-image
                    width="60px"
                    height="60px"
                    fit="cover"
                    :src="cate.imgUrl"
                  />
                </template>
              </van-grid-item>
            </van-grid>
          </div>

          <div class="empty"></div>
        </div>
      </div>
    </div>

    <div class="footer">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import NavBar from "@/components/common/NavBar.vue";
import { searcCateLlist } from "@/api/index";
import BetterScroll from "better-scroll";
export default {
  name: "Category",
  components: { Tabbar, NavBar },
  data() {
    return {
      activeKey: 0,
      leftArr: [],
      rightArr: [],
      rightScroll: null,
      allHeight: [],
      scrollY: 0, //滚动的距离
    };
  },
  created() {
    this.getData();
  },
  computed: {
    currentIndex() {
      let res = this.allHeight.findIndex((item, index) => {
        // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。
        // 若没有找到对应元素则返回-1。
        return this.scrollY >= item && this.scrollY < this.allHeight[index + 1];
      });
      return res;
    },
  },
  watch: {
    currentIndex(nwVal) {
      this.activeKey = nwVal;
    },
  },
  methods: {
    changeMenu(index) {
      console.log("changeMenu", index);
      this.rightScroll.scrollTo(0, -this.allHeight[index], 300);
    },
    async getData() {
      let result = await searcCateLlist();
      let { catelist } = result.data;
      let leftArr = [];
      let rightArr = [];
      catelist.forEach((item) => {
        leftArr.push({
          id: item.level1Id,
          name: item.name,
        });
        rightArr.push(item.list);
      });
      this.rightArr = rightArr;
      this.leftArr = leftArr;
      this.setBetterScroll();
    },
    setBetterScroll() {
      this.$nextTick(() => {
        if (this.rightScroll) {
          this.rightScroll.refresh();
        } else {
          this.rightScroll = new BetterScroll(this.$refs.right, {
            movable: true,
            zoom: true,
            mouseWheel: true, //开启鼠标滚轮
            disableMouse: false, // 启用鼠标拖动
            disableTouch: false, //
            click: true,
            probeType: 3,
          });
        }

        let cards = this.$refs.right.getElementsByClassName("card");
        let height = 130;
        this.allHeight.push(0);
        Array.from(cards).forEach((card) => {
          height += card.clientHeight;
          this.allHeight.push(height);
        });
        this.rightScroll.off("scroll");
        this.rightScroll.on("scroll", (pos) => {
          // {x: 0, y: -108.404}
          // 设置滚动距离
          this.scrollY = Math.abs(pos.y);
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.Category {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  .header {
    height: 13vw;
  }
  .main {
    flex: 1;
    overflow: hidden;
    display: flex;
    .right {
      height: 100%;
      width: 100%;
      flex: 1;
      overflow: hidden;
      .headImg {
        padding: 10px 10px 0 10px;
      }
      .card {
        .van-cell {
          // padding: 10px;
          .van-cell__value--alone {
            font-size: 28px;
            text-align: center;
          }
        }
      }
      .empty{
        height: 1000px;
      }
    }
  }
  .footer {
    height: 13vw;
  }
}
</style>