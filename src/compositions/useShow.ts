import { ref, Ref } from 'vue'

type UseShow = {
  show: Ref<boolean>,
  open: () => void,
  close: () => void,
  toggle: () => void,
}

export function useShow(): UseShow {
  const show = ref(false)

  function open(): void {
    show.value = true
  }

  function close(): void {
    show.value = false
  }

  function toggle(): void {
    show.value = !show.value
  }

  return { show, open, close, toggle }
}