import { defineStore } from 'pinia'
import songsData from '../data/songs.json'
export const useGameStore = defineStore('game', {
    state: () => ({
        //declaracion de variables
        playerName: '',
        score: 0,
        ranking: [],

        //var control partida
        currentQuestions: [],
        currentIndex: 0,
        correctCount: 0,
        totalListeningTime: 0
    }),
    actions: {
        setPlayerName(name) {
            this.playerName = name
        },
        registerHit() {
            this.score += 10
            this.correctCount++
        },
        registerMiss() {
            this.score -= 5
        },
        startGame() {
            this.score = 0;
            this.correctCount = 0;
            this.currentIndex = 0;
            this.totalListeningTime = 0;
            //Copia canciones y desordene, y luego elije 10
            const shuffled = [...songsData].sort(() => Math.random() - 0.5);
            const selectedSongs = shuffled.slice(0, 10);
            this.currentQuestions = selectedSongs.map((song) => {
                const wrongOptions = songsData.filter(s => s.id !== song.id);
                const randomWrong = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 3);
                const options = [...randomWrong, song].sort(() => Math.random() - 0.5);

                return {
                    correctSong: song,
                    options: options
                };
            });
        }

    }
})