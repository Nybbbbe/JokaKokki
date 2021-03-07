const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechRecognitionEvent = window.SpeechRecognition || window.webkitSpeechRecognition

class VoiceControl {
    static elementIdsTracked = ["bottomNav1", "bottomNav2", "bottomNav3", "back"];
    static voiceControlActive = false;
    static idToElementMap = new Map();
    static updateViewLoop = null;
    static numbersAvailable = [];

    static recognizer;
    static recognizerGrammerList;
    static grammer = '#JSGF V1.0;'
    static wordToNums = {
        "one": 1,
        "two": 2,
        "three": 3,
        "tree": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9
    }

    static start = () => {
        this.updateViewLoop = setInterval(() => {
            let i = 1;
            this.numbersAvailable = []
            this.elementIdsTracked.forEach(id => {
                const docElement = document.getElementById(id);
                if (docElement !== null) {
                    if (this.isInViewport(docElement)) {
                        this.addCallId(docElement, i);
                        this.numbersAvailable.push(i);
                        i++;
                    } else {
                        this.removeCallId(docElement);
                    }
                }
            });
        }, 1000);
        this.initRecognition();
    }

    static end = () => {
        if (this.updateViewLoop) {
            clearInterval(this.updateViewLoop);
        }
        this.updateViewLoop = null;
        if (this.recognizer) {
            this.recognizer.onend = null;
            this.recognizer.stop();
        }
        this.numbersAvailable.forEach(id => {
            console.log(id);
            const el = this.idToElementMap[id]
            console.log(el);
            if (el) {
                this.removeCallId(el);
            }
        })
    }

    static toggle = () => {
        console.log(this.voiceControlActive);
        if (this.voiceControlActive) {
            this.start();
        } else {
            this.end();
        }
    }

    static isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= -1 &&
            rect.left >= -1 &&
            rect.bottom <= 1+(window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= 1+(window.innerWidth || document.documentElement.clientWidth)
    
        );
    }

    static initRecognition = async () => {
        this.recognizer = new SpeechRecognition();
        // this.recognizerGrammerList = new SpeechGrammarList();
        // this.recognizerGrammerList.addFromString(this.grammer, 1);
        // this.recognizer.grammers = this.recognizerGrammerList;
        this.recognizer.continuous = true;
        this.recognizer.lang = "en-US";

        this.recognizer.onresult = (e) => {
            const last = e.results.length - 1;
            let result = e.results[last][0].transcript;
            result = result.replace(/ /g,'')
            console.log("lenght: " + result.length)
            console.log(result)
            const command = this.wordToNums[result];
            if (command && this.numbersAvailable.includes(command)) {
                console.log(command);
                console.log(this.idToElementMap[command]);
                if (this.idToElementMap[command]) {
                    this.idToElementMap[command].click();
                }
            }
        }

        this.recognizer.onend = () => {
            console.log("ending");
            this.recognizer.onresult = null;
            this.recognizer.onend = null;
            this.initRecognition();
        }

        this.recognizer.start();
    }

    static removeCallId = (el) => {
        el.childNodes.forEach(node => {
            if (node.classList.contains("absolute-text-container")) {
                el.removeChild(node);
            }
        });
    }

    static addCallId = (el, i) => {
        this.idToElementMap[i] = el;
        let addNew = true;
        let child = undefined;
        el.childNodes.forEach(node => {
            if (node.classList.contains("absolute-text-container")) {
                addNew = false;
                child = node;
            }
        });
        if (addNew) {
            el.classList.add("relative");
            const d = document.createElement('div');
            d.classList.add("absolute-text-container");
            const p = document.createElement('p');
            p.innerText = "V" + i;
            p.classList.add("absolute-text");
            d.appendChild(p)
            el.appendChild(d);
        } else {
            const existingP = child.childNodes[0];
            existingP.innerText = "V: " + i;
        }
    }

    static addTrackedElementId = (elementId) => {
        if (!this.elementIdsTracked.includes(elementId)) {
            this.elementIdsTracked.push(elementId);
        }
    }
}

export default VoiceControl;