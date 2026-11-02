import { ref } from 'vue';
import { Howl } from 'howler';

export function useAudio() {
    const sound = ref(null)

    return {
        startMusic,
        stopMusic
    }
}