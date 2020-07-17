<template>
  <div>
    <a-form id="form1">
      <a-row :gutter="24">
        <a-col :span="3">
          <a-form-item label="当前值：">
            <a-input-number v-model="currentLevel" :min="1" :max="maxLevel" @change="onChange" />
          </a-form-item>
        </a-col>
        <a-col :span="3">
          <a-form-item label="目标值：">
            <a-input-number
              v-model="targetLevel"
              :min="currentLevel"
              :max="maxLevel"
              @change="onChange"
            />
          </a-form-item>
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
        <a-col :span="6">
          <div>答案：{{result}}</div>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

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
      // 计算结果
      result: 0
    };
  },
  methods: {
    onChange(value) {
      console.log("changed", value);
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
</style>