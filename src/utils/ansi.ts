// Taken from: https://github.com/travis-ci/travis-web/blob/76af32013bc3ab1e5f540d69da3a97c3fec1e7e9/assets/scripts/vendor/ansiparse.js

const foregroundColors: Record<string, string> = {
  "30": "text-black",
  "31": "text-red-600",
  "32": "text-green-600",
  "33": "text-yellow-400",
  "34": "text-blue-600",
  "35": "text-magenta-600",
  "36": "text-cyan-600",
  "37": "text-white-600",
  "90": "bg-gray-500",
};

const backgroundColors: Record<string, string> = {
  "40": "bg-black",
  "41": "bg-red-900",
  "42": "bg-green-900",
  "43": "bg-yellow-900",
  "44": "bg-blue-900",
  "45": "bg-magenta-900",
  "46": "bg-cyan-900",
  "47": "bg-white",
};

const styles = {
  "1": "bold",
  "3": "italic",
  "4": "underline",
} as const satisfies Record<string, string>;

type StylesText = {
  text?: string;
  foreground?: string;
  background?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

export const parseAnsi = (str: string) => {
  let matchingData = null,
    matchingText = "",
    ansiState: string[] = [],
    state: StylesText = {};
  const result: StylesText[] = [];

  let matchingControl: string | undefined = undefined;
  const eraseChar = () => {
    if (matchingText.length) {
      matchingText = matchingText.substr(0, matchingText.length - 1);
      return;
    }
    if (result.length) {
      const index = result.length - 1;
      const target = result[index];
      const text = target?.text;
      if (!target || !text) return;

      if (text.length === 1) {
        result.pop();
      } else {
        target.text = text.substr(0, text.length - 1);
      }
    }
  };

  for (const char of str) {
    if (matchingControl != null) {
      if (matchingControl == "\x1b" && char == "[") {
        //
        // We've matched full control code. Lets start matching formating data.
        //

        //
        // "emit" matched text with correct state
        //
        if (matchingText) {
          state.text = matchingText;
          result.push(state);
          state = {};
          matchingText = "";
        }

        matchingControl = undefined;
        matchingData = "";
      } else {
        //
        // We failed to match anything - most likely a bad control code. We
        // go back to matching regular strings.
        //
        matchingText += matchingControl + char;
        matchingControl = undefined;
      }
      continue;
    } else if (matchingData != null) {
      if (char == ";") {
        //
        // `;` separates many formatting codes, for example: `\033[33;43m`
        // means that both `33` and `43` should be applied.
        //
        // TODO: this can be simplified by modifying state here.
        //
        ansiState.push(matchingData);
        matchingData = "";
      } else if (char == "m") {
        //
        // `m` finished whole formatting code. We can proceed to matching
        // formatted text.
        //
        ansiState.push(matchingData);
        matchingData = null;
        matchingText = "";

        //
        // Convert matched formatting data into user-friendly state object.
        //
        // TODO: DRY.
        //
        ansiState.forEach(function (ansiCode) {
          if (ansiCode === "" || ansiCode === "0") {
            state = {};
            return;
          }
          const foreground = foregroundColors[ansiCode];
          if (foreground) {
            state.foreground = foreground;
            return;
          }
          const background = backgroundColors[ansiCode];
          if (background) {
            state.background = background;
            return;
          }
          if (ansiCode === "39") {
            delete state.foreground;
            return;
          }
          if (ansiCode === "49") {
            delete state.background;
            return;
          }
          const style = styles[ansiCode as keyof typeof styles];
          if (style) {
            state[style] = true;
            return;
          }
          if (ansiCode === "22") {
            state.bold = false;
            return;
          }
          if (ansiCode === "23") {
            state.italic = false;
            return;
          }
          if (ansiCode === "24") {
            state.underline = false;
            return;
          }
        });
        ansiState = [];
      } else {
        matchingData += char;
      }
      continue;
    }

    if (char == "\x1b") {
      matchingControl = char;
    } else if (char == "\u0008") {
      eraseChar();
    } else {
      matchingText += char;
    }
  }

  if (matchingText) {
    state.text = matchingText + (matchingControl ? matchingControl : "");
    result.push(state);
  }
  return result;
};
