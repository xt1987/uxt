<template>
	<uxt-layout1 :title="title">
		<view class="bg-white text-right padding-sm border-bottom">
			固定标题宽度 <uxt-switch classes="margin-left-sm" round @change="changeTW"></uxt-switch>
		</view>
		<uxt-input title="邮件" type="text" placeholder="两字短标题+横向排列" :titleWidth="tw"></uxt-input>
		<uxt-input title="输入框" type="text" placeholder="三字标题+纵向排列" direction="col"></uxt-input>
		<uxt-input title="网址" type="text" placeholder="left slot" :titleWidth="tw">
			<template #left>
				https://www.
			</template>
		</uxt-input>
		<uxt-input title="收货地址" type="text" placeholder="right slot" :titleWidth="tw">
			<template #right>
				<uxt-icon type="locationfill" color="orange"></uxt-icon>
			</template>
		</uxt-input>
		<uxt-input title="验证码" type="number" placeholder="6位数字" :maxlength="6" :titleWidth="tw">
			<template #right>
				<uxt-button radius>验证码</uxt-button>
			</template>
		</uxt-input>
		<uxt-input title="手机号码" type="number" placeholder="11位" :maxlength="11" :titleWidth="tw">
			<template #right>
				<uxt-tag capsule="+86" radius>中国大陆</uxt-tag>
			</template>
		</uxt-input>
		<uxt-input title="密码" type="password" placeholder="密码" :titleWidth="tw"></uxt-input>
		<uxt-input title="双向绑定" type="text" placeholder="v-model带清除功能" v-model="inputValue" :titleWidth="tw" clearable></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{inputValue}}</view>
		<uxt-input title="多行输入框" type="textarea" placeholder="多行输入框"></uxt-input>

		<uxt-input classes="margin-top-sm" title="性别" type="selector" :range="selectorRange" rangeKey="text" v-model="selectorValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{selectorValue}}</view>
		<uxt-input title="地区" type="multiSelector" :range="multiSelectorRange" v-model="multiSelectorValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{multiSelectorValue.join()}}</view>
		<uxt-input title="时间" type="time" v-model="timeValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{timeValue}}</view>
		<uxt-input title="时间(限制范围)" type="time" :range="['08:00', '18:00']" v-model="timeValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{timeValue}}</view>
		<uxt-input title="日期" type="date" v-model="dateValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{dateValue}}</view>
		<uxt-input title="日期(限制范围)" type="date" :range="['2000-01-01', '2019-12-31']" v-model="dateValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{dateValue}}</view>
		<uxt-input title="年月" type="date" fields="month" v-model="monthValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{monthValue}}</view>
		<uxt-input title="年" type="date" fields="year" v-model="yearValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{yearValue}}</view>
		<uxt-input title="多选" type="multiCheck" :range="multiCheckRange" v-model="multiCheckValue"></uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{multiCheckValue.join(',')}}</view>

		<uxt-input classes="margin-top-sm" title="开关">
			<template #right>
				<uxt-switch round v-model="switchValue"></uxt-switch>
			</template>
		</uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{switchValue}}</view>
		<uxt-input title="复选框">
			<template #right>
				<uxt-checkbox v-model="checkboxValue"></uxt-checkbox>
			</template>
		</uxt-input>
		<view class="padding-sm bg-white border-bottom text-center">{{checkboxValue}}</view>

		<uxt-input classes="margin-top-sm" title="头像">
			<template #right>
				<uxt-avatar avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" round></uxt-avatar>
			</template>
		</uxt-input>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtInput from '@/uxt/components/uxt-input.vue';
	import uxtSwitch from '@/uxt/components/uxt-switch.vue';
	import uxtCheckbox from '@/uxt/components/uxt-checkbox.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';
	import uxtButton from '@/uxt/components/uxt-button.vue';
	import uxtTag from '@/uxt/components/uxt-tag.vue';
	import uxtAvatar from '@/uxt/components/uxt-avatar.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtInput,
			uxtSwitch,
			uxtCheckbox,
			uxtIcon,
			uxtButton,
			uxtTag,
			uxtAvatar
		},
		data() {
			return {
				title: '表单',
				tw: 0,
				inputValue: '',
				selectorRange: [{
					value: '1',
					text: '男'
				}, {
					value: '2',
					text: '女'
				}, {
					value: '0',
					text: '保密'
				}],
				selectorValue: -1,
				multiSelectorRange: [
					['广东省', '江西省'],
					[
						['广州市', '深圳市'],
						['南昌市', '吉安市']
					],
					[
						[
							['天河区', '番禹区'],
							['福田区', '龙岗区']
						],
						[
							['东湖区', '西湖区'],
							['吉州区', '吉安县']
						]
					]
				],
				multiSelectorValue: [],
				timeValue: null,
				dateValue: null,
				monthValue: null,
				yearValue: null,
				switchValue: false,
				radioValue: '',
				checkboxValue: false,
				multiCheckRange: ['选项一', '选项二', '选项三'],
				multiCheckValue: []
			};
		},
		methods: {
			changeTW(checked) {
				console.log(checked);
				if (checked) {
					this.tw = 160;
				} else {
					this.tw = 0;
				}
			}
		}
	};
</script>

<style>
</style>
