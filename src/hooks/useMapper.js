import { computed } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'

const useMapper = (mapper, mapFn) => {
  const store = useStore()

  const storeStateFns = mapFn(mapper)
  const storeState = {}
  Object.keys(storeStateFns).forEach((keyFn) => {
    const fn = storeStateFns[keyFn].bind({ $store: store })
    storeState[keyFn] = computed(fn)
  })

  return storeState
}

export const useState = (mapper) => {
  return useMapper(mapper, mapState)
}

export const useGetters = (mapper) => {
  return useMapper(mapper, mapGetters)
}