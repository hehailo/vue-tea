<template>
  <div class="Category">
    <div class="header"><NavBar title="分类"></NavBar></div>
    <div class="main">
      <div class="left">
        <van-sidebar v-model="activeKey" @change="cahngeMenu">
          <van-sidebar-item
            :title="item.name"
            v-for="item in leftArr"
            :key="item.id"
          />
        </van-sidebar>
      </div>

      <div class="right" ref="right">
        <div>
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
    };
  },
  created() {
    this.getData();
  },
  methods: {
    cahngeMenu() {
      console.log(this.activeKey);
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
    height: 15vw;
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
      .card {
        .van-cell {
          // padding: 10px;
          .van-cell__value--alone {
            font-size: 28px;
            text-align: center;
          }
        }
      }
    }
  }
  .footer {
    height: 13vw;
  }
}
</style>