<template>
  <div class="team-container">
    <h2 class="team--title">Team</h2>
    <div class="team--cards">
      <Card
        v-for="(tool, index) in tools"
        :key="index"
        v-bind="tool"
        :animation-delay="index * 0.5"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '@/components/Card.vue'

export default {
  name: 'team',
  components: {
    Card
  },
  data() {
    return {
      tools: [
        {
          image: {
            path: require('@/assets/slack.png'),
            altText: 'Slack logo'
          },
          title: 'Slack',
          description: 'Messaging app for all team communication.'
        },
        {
          image: {
            path: require('@/assets/notion.png'),
            altText: 'Notion logo'
          },
          title: 'Notion',
          description: 'Messaging app for all team communication.'
        },
        {
          image: {
            path: require('@/assets/figma.png'),
            altText: 'Figma logo'
          },
          title: 'Figma',
          description: 'Messaging app for all team communication.'
        },
        {
          image: {
            path: require('@/assets/contentful.png'),
            altText: 'Contentful logo'
          },
          title: 'Contentful',
          description: 'Messaging app for all team communication.'
        },
        {
          image: {
            path: require('@/assets/dropbox.png'),
            altText: 'Dropbox logo'
          },
          title: 'Dropbox',
          description: 'Messaging app for all team communication.'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['isDarkMode'])
  }
}
</script>

<style lang="scss" scoped>
.team {
  &-container {
    margin-left: 25px;
  }

  &--title {
    @include heading-2;
  }

  &--cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: space-evenly;
  }
}
</style>
