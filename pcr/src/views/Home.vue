<template>
  <div>
    <a-form id="form1">
      <a-row :gutter="24">
        <a-col :span="3">
          <h2>等级</h2>
        </a-col>
        <a-col :span="4">
          <a-form-item label="需要经验：">
            <div>{{offsetExp}}</div>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="4">
          <a-form-item label="当前等级：">
            <a-input-number v-model="currentLevel" :min="1" :max="maxLevel" />
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="当前经验值：">
            <a-input-number v-model="currentExp" :min="0" :max="9999" />
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="目标等级：">
            <a-input-number v-model="targetLevel" :min="currentLevel" :max="maxLevel" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="3">
          <h2>每日获取经验</h2>
        </a-col>
        <a-col :span="4">
          <a-form-item label="每日获得总经验：">
            <div>{{expPerDay}}</div>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="4">
          <a-form-item label="日回复体力：">
            <a-input-number v-model="natureTP" :min="0" />
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="每日任务（350经验+200体力）">
            <a-input-number v-model="missionExp" :min="0" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="5">
          <a-form-item label="家具体力日产量">{{homeTP}}</a-form-item>
        </a-col>
        <a-col :span="5">
          <a-form-item label="通关地下城数量(N*48)">
            <a-input-number v-model="homeToolsNumber" :min="0" />
          </a-form-item>
        </a-col>
        <a-col :span="5">
          <a-form-item label="N管体力(N*120)">
            <a-input-number v-model="numberTP" :min="0" :max="30" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="6">
          <a-form-item label="所需">{{needDays}}天</a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="6">
          <a-form-item label="Form Layout">
            <a-radio-group default-value="horizontal">
              <a-radio-button value="horizontal">Horizontal</a-radio-button>
              <a-radio-button value="vertical">Vertical</a-radio-button>
              <a-radio-button value="inline">Inline</a-radio-button>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="Field A">
            <a-input placeholder="input placeholder" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="Field B">
            <a-input placeholder="input placeholder" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import levelMap from "@/json/level.json";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      // 目前最大等级
      maxLevel: 98,
      // 当前等级
      currentLevel: 90,
      // 目标等级
      targetLevel: 98,
      // 当前经验值
      currentExp: 0,
      // 自然回体
      natureTP: 240,
      // 每日任务获取经验(TODO:按照有没有买mana和有没有会战,和双倍)
      missionExp: 550,
      // 通关地下城数量
      homeToolsNumber: 3,
      // 多少管体力
      numberTP: 0
    };
  },
  computed: {
    // 还差多少经验
    offsetExp() {
      let currentExp;
      let targetExp;
      levelMap.forEach(item => {
        if (item.level == this.currentLevel) {
          currentExp = item.totalNeed;
        }
        if (item.level == this.targetLevel) {
          targetExp = item.totalNeed;
        }
      });
      return targetExp - currentExp - this.currentExp;
    },
    // 家具体力
    homeTP() {
      return 176 + 48 * this.homeToolsNumber;
    },
    // 每日经验总量
    expPerDay() {
      return (
        this.natureTP + this.missionExp + this.homeTP + this.numberTP * 120
      );
    },
    // 所需天数
    needDays() {
      console.log(this.offsetExp / this.expPerDay);
      if (this.offsetExp / this.expPerDay <= 0) {
        return 0;
      }
      return Math.ceil(this.offsetExp / this.expPerDay);
    }
  }
};
</script>
<style lang="scss">
#form1 .ant-form-item {
  display: flex;
}
#form1 .ant-form-item-control-wrapper {
  flex: 1;
}
h2 {
  text-align: left;
}
</style>