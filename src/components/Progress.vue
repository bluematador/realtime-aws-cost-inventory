<template>
	<div v-if="show" class="component">
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					Discovery Progress
				</div>
				<div class="col text-right">
					<span v-if="allDone" class="badge badge-custom mr-2">DONE</span>
					<strong>{{done}} / {{total}}</strong>
				</div>
			</div>
			<div class="progress mt-3 ml-2 mr-2">
				<div class="progress-bar"
						:class="{'progress-bar-striped': !allDone, 'progress-bar-animated': !allDone, 'bg-success': allDone}"
						:style="'width: ' + percentDone + '%'"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CollapsingCard from './CollapsingCard.vue';

@Component({
	components: {
		CollapsingCard,
	},
})
export default class Progress extends Vue {
	get show(): boolean {
		return Object.keys(this.$store.direct.state.progress.all).length > 0;
	}

	get done(): number {
		return this.$store.direct.getters.overallProgress.done;
	}

	get total(): number {
		return this.$store.direct.getters.overallProgress.total;
	}

	get allDone(): boolean {
		return this.done > 0 && this.done === this.total;
	}

	get percentDone(): number {
		return 100 * this.done / this.total;
	}
}
</script>

<style scoped lang="scss">
@import '../variables';

.component {
	color: theme-color('light');
}

.badge-custom {
	background-color: #8AB6CC;
}
</style>
