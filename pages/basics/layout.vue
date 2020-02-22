<template>
	<uxt-layout1 :title="title">
		<view class="flex flex-col" :style="{height: contentHeight}">
			<uxt-tab align="center" :activeIndex="index" :tabs="tabs" @tab="tab"></uxt-tab>
			<swiper class="flex-sub" @change="swiper" :current="index">
				<swiper-item>
					<scroll-view scroll-y style="height: 100%;">
						<uxt-title-bar classes="margin-top-sm border-bottom" title="固定尺寸" subTitle="父(flex[ flex-col]) 子(basis-xx)"></uxt-title-bar>
						<view class="padding-sm bg-white">
							<view class="flex flex-wrap">
								<view class="basis-xs bg-grey margin-xs padding-sm radius">xs(20%)</view>
								<view class="basis-df"></view>
								<view class="basis-sm bg-grey margin-xs padding-sm radius">sm(40%)</view>
								<view class="basis-df"></view>
								<view class="basis-df bg-grey margin-xs padding-sm radius">df(50%)</view>
								<view class="basis-lg bg-grey margin-xs padding-sm radius">lg(60%)</view>
								<view class="basis-xl bg-grey margin-xs padding-sm radius">xl(80%)</view>
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="比例布局" subTitle="父(flex[ flex-col]) 子(flex-xx)"></uxt-title-bar>
						<view class="padding-sm bg-white">
							<view class="flex border-bottom">
								<view class="flex-sub bg-grey margin-xs padding-sm radius">sub(1)</view>
								<view class="flex-sub bg-grey margin-xs padding-sm radius">sub(1)</view>
							</view>
							<view class="flex border-bottom">
								<view class="flex-sub bg-grey margin-xs padding-sm radius">sub(1)</view>
								<view class="flex-twice bg-grey margin-xs padding-sm radius">twice(2)</view>
							</view>
							<view class="flex">
								<view class="flex-sub bg-grey margin-xs padding-sm radius">sub(1)</view>
								<view class="flex-twice bg-grey margin-xs padding-sm radius">twice(2)</view>
								<view class="flex-treble bg-grey margin-xs padding-sm radius">treble(3)</view>
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="水平对齐" subTitle="父(flex[ flex-col] justify-xx) 默认start"></uxt-title-bar>
						<view class="padding-sm bg-white">
							<view class="flex justify-start border-bottom">
								<view class="bg-grey margin-xs padding-sm radius">start</view>
								<view class="bg-grey margin-xs padding-sm radius">start</view>
							</view>
							<view class="flex justify-end border-bottom">
								<view class="bg-grey margin-xs padding-sm radius">end</view>
								<view class="bg-grey margin-xs padding-sm radius">end</view>
							</view>
							<view class="flex justify-center border-bottom">
								<view class="bg-grey margin-xs padding-sm radius">center</view>
								<view class="bg-grey margin-xs padding-sm radius">center</view>
							</view>
							<view class="flex justify-between border-bottom">
								<view class="bg-grey margin-xs padding-sm radius">between</view>
								<view class="bg-grey margin-xs padding-sm radius">between</view>
							</view>
							<view class="flex justify-around">
								<view class="bg-grey margin-xs padding-sm radius">around</view>
								<view class="bg-grey margin-xs padding-sm radius">around</view>
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="垂直对齐" subTitle="父(flex[ flex-col] align-xx) 默认stretch"></uxt-title-bar>
						<view class="padding-sm bg-white">
							<view class="flex align-start border-bottom">
								<view class="bg-grey margin-xs padding-lg radius">start</view>
								<view class="bg-grey margin-xs padding-sm radius">start</view>
							</view>
							<view class="flex align-end border-bottom">
								<view class="bg-grey margin-xs padding-lg radius">end</view>
								<view class="bg-grey margin-xs padding-sm radius">end</view>
							</view>
							<view class="flex align-center border-bottom">
								<view class="bg-grey margin-xs padding-lg radius">center</view>
								<view class="bg-grey margin-xs padding-sm radius">center</view>
							</view>
							<view class="flex align-stretch">
								<view class="bg-grey margin-xs padding-lg radius">stretch</view>
								<view class="bg-grey margin-xs padding-sm radius">stretch</view>
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="水平垂直居中" subTitle="父(flex justify-center align-center)"></uxt-title-bar>
						<view class="padding-sm bg-white flex justify-center align-center" style="height: 300rpx;">
							<view class="flex justify-center align-center bg-grey radius" style="width: 200rpx; height: 200rpx;">
								center
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="列布局" subTitle="父(flex flex-col)"></uxt-title-bar>
						<view class="padding-sm bg-white flex flex-col">
							<view class="bg-grey margin-xs padding-lg radius">flex-col</view>
							<view class="bg-grey margin-xs padding-lg radius">flex-col</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y style="height: 100%;">
						<uxt-title-bar classes="margin-top-sm border-bottom" title="等分列" subTitle="父(grid col-(1-5)) 子(view,无margin)"></uxt-title-bar>
						<view class="padding-sm bg-white">
							<view class="grid margin-bottom text-center" v-for="(item, index) in 5" :key="index" :class="[`col-${index + 1}`]">
								<view class="padding" :class="indexs % 2 === 0 ? 'bg-cyan' : 'bg-blue'" v-for="(item, indexs) in (index + 1) * 2"
								 :key="indexs">{{indexs + 1}}</view>
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="等高" subTitle="父(grid col-(1-5) grid-square) 子(view,无margin)"></uxt-title-bar>
						<view class="bg-white padding">
							<view class="grid col-4 grid-square">
								<view v-for="(item, index) in 4" :key="index" class="bg-blue"></view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y style="height: 100%;">
						<uxt-title-bar classes="margin-top-sm border-bottom" title="浮动" subTitle="父(cf) 子(fl/fr)"></uxt-title-bar>
						<view class="bg-white padding">
							<view class="cf padding-sm">
								<view class="bg-grey radius fl padding-sm">fl</view>
								<view class="bg-grey radius fr padding-sm">fr</view>
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="外边距"></uxt-title-bar>
						<view class="bg-white">
							<view class="grid col-3">
								<view class="flex flex-col justify-center align-center padding-sm border-right border-bottom">
									<view class="border-green border">
										<view class="bg-grey margin-0 padding-sm"></view>
									</view>
									<view>margin-0</view>
								</view>
								<block v-for="(pos, index) in poses" :key="index">
									<view v-for="(size, index2) in sizes" :key="index2" class="flex flex-col justify-center align-center padding-sm border-right border-bottom">
										<view class="border-green border">
											<view class="bg-grey padding-sm" :class="[`margin${pos + size}`]"></view>
										</view>
										<view>margin{{pos + size}}</view>
									</view>
								</block>
							</view>
						</view>
						<uxt-title-bar classes="margin-top-sm border-bottom" title="内边距"></uxt-title-bar>
						<view class="bg-white">
							<view class="grid col-3">
								<view class="flex flex-col justify-center align-center padding-sm border-right border-bottom">
									<view class="border-green border padding-0">
										<view class="bg-grey padding-sm"></view>
									</view>
									<view>padding-0</view>
								</view>
								<block v-for="(pos, index) in poses" :key="index">
									<view v-for="(size, index2) in sizes" :key="index2" class="flex flex-col justify-center align-center padding-sm border-right border-bottom">
										<view class="border-green border" :class="[`padding${pos + size}`]">
											<view class="bg-grey padding-sm"></view>
										</view>
										<view>padding{{pos + size}}</view>
									</view>
								</block>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTab from '@/uxt/components/uxt-tab.vue';
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';

	export default {
		components: {
			uxtTab,
			uxtTitleBar
		},
		data() {
			return {
				title: '布局',
				contentHeight: `${this.gWindowHeight - this.gStatusBarHeight - this.gNavBarHeight}px`,
				tabs: [{
					text: 'Flex布局'
				}, {
					text: 'Grid布局'
				}, {
					text: '辅助布局'
				}],
				index: 0,
				poses: ['', '-top', '-right', '-bottom', '-left', '-lr', '-tb'],
				sizes: ['-xs', '-sm', '', '-lg', '-xl']
			};
		},
		methods: {
			tab(index) {
				this.index = index;
			},
			swiper(e) {
				this.index = e.detail.current;
			}
		}
	};
</script>

<style>
</style>
