<template>
	<uxt-layout1 :title="title">
		<uxt-button classes="margin-sm" size="block" @click="showModal('center', true)">居中窗口</uxt-button>
		<uxt-button classes="margin-sm" size="block" @click="showModal('center', false)">满屏</uxt-button>
		<uxt-button classes="margin-sm" size="block" @click="showModal('top')">上边弹出</uxt-button>
		<uxt-button classes="margin-sm" size="block" @click="showModal('right')">右边弹出</uxt-button>
		<uxt-button classes="margin-sm" size="block" @click="showModal('bottom')">下边弹出</uxt-button>
		<uxt-button classes="margin-sm" size="block" @click="showModal('left')">左边弹出</uxt-button>
		<view class="grid col-2">
			<view class="padding-sm text-center">
				<text class="margin-right-sm">自动宽高</text>
				<uxt-switch v-model="autoWH" round></uxt-switch>
			</view>
			<view class="padding-sm text-center">
				<text class="margin-right-sm">关闭按钮</text>
				<uxt-switch v-model="close" bgColor="red" round></uxt-switch>
			</view>
		</view>
		<uxt-modal :show="show" :position="pos" @close="show = false" :autoWH="autoWH" :close="close" bg-color="white">
			<view class="padding">内容</view>
		</uxt-modal>
	</uxt-layout1>
</template>

<script>
	import uxtButton from '@/uxt/components/uxt-button.vue';
	import uxtModal from '@/uxt/components/uxt-modal.vue';
	import uxtSwitch from '@/uxt/components/uxt-switch.vue';

	export default {
		components: {
			uxtButton,
			uxtModal,
			uxtSwitch
		},
		data() {
			return {
				title: '模态框',
				show: false,
				pos: 'center',
				autoWH: false,
				close: false
			};
		},
		methods: {
			showModal(pos, autoWH) {
				this.pos = pos;
				this.show = true;
				autoWH !== undefined && (this.autoWH = autoWH);
			}
		}
	};
</script>

<style>
</style>
