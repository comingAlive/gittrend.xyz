import { Draft } from "immer";
import { createContext, ReactNode, useContext } from "react";
import { useImmerReducer } from "use-immer";

type Language = {
  name: string;
  selected: boolean;
  show: boolean;
  color: string;
  category: string[];
};

type State = Language[];
type Action = {
  type: "SELECT" | "SHOW" | "SELECT_ALL" | "UNSELECT_ALL";
  payload?: any;
};
type Dispatch = (a: Action) => void;
type Reducer<S, A> = (s: S, a: A) => S;

const LanguagesStateContext = createContext<State>({} as State);
const LanguagesDispatchContext = createContext<Dispatch>({} as Dispatch);

type Props = { children: ReactNode };

export const LanguagesContextProvider = ({ children }: Props) => {
  const languagesReducer: Reducer<State, Action> = (
    s: Draft<Language[]>,
    a: Action
  ) => {
    switch (a.type) {
      case "SELECT":
        s.forEach((l, i) => {
          if (s[i].name === a.payload) {
            s[i].selected = !s[i].selected;
          }
        });
        return s;
      case "SHOW":
        s.forEach((l, i) => {
          s[i].show = l.category.includes(a.payload);
        });
        return s;
      case "UNSELECT_ALL":
        s.forEach((l, i) => {
          s[i].selected = !l.category.includes(a.payload);
        });
        return s;
      case "SELECT_ALL":
        s.forEach((l, i) => {
          s[i].selected = l.category.includes(a.payload);
        });
        return s;
      default:
        throw new Error(`Unknown action: ${a.type}`);
    }
  };

  const [state, dispatch] = useImmerReducer(languagesReducer, [
    // const [state, dispatch] = useReducer(languagesReducer, [
    {
      name: "JavaScript",
      selected: false,
      show: true,
      color: "bg-amber-300",
      category: [
        "all",
        "front",
        "game",
        "web",
        "iot",
        "data",
        "mobile",
        "desktop",
        "back",
      ],
    },
    {
      name: "Python",
      selected: false,
      show: true,
      color: "bg-cyan-700",
      category: ["all", "back", "web", "data", "desktop", "iot"],
    },
    {
      name: "Go",
      selected: false,
      show: true,
      color: "bg-cyan-500",
      category: ["all", "back", "desktop", "web", "system", "iot"],
    },
    {
      name: "Java",
      selected: false,
      show: true,
      color: "bg-yellow-700",
      category: ["all", "back", "mobile", "iot", "data", "desktop"],
    },

    {
      name: "C++",
      selected: false,
      show: true,
      color: "bg-pink-500",
      category: ["all", "system", "game", "iot", "data", "desktop"],
    },
    {
      name: "TypeScript",
      selected: false,
      show: true,
      color: "bg-cyan-700",
      category: ["all", "game", "web", "desktop", "front", "back", "mobile"],
    },
    {
      name: "C",
      selected: false,
      show: true,
      color: "bg-trueGray-600",
      category: ["all", "iot", "system", "desktop"],
    },
    {
      name: "PHP",
      selected: false,
      show: true,
      color: "bg-blueGray-500",
      category: ["all","back","java", "web", "iot"],
    },
    {
      name: "C#",
      selected: false,
      show: true,
      color: "bg-lime-800",
      category: ["all", "back","system", "game", "iot", "desktop"],
    },
    {
      name: "Shell",
      selected: false,
      show: true,
      color: "bg-lime-400",
      category: ["all", "back", "data"],
    },
    {
      name: "Ruby",
      selected: false,
      show: true,
      color: "bg-red-900",
      category: ["all", "back", "web", "iot"],
    },
    {
      name: "Swift",
      selected: false,
      show: true,
      color: "bg-orange-400",
      category: ["all", "mobile", "iot", "system"],
    },

    {
      name: "HTML",
      selected: false,
      show: true,
      color: "bg-orange-600",
      category: ["all", "front", "mobile", "game", "web"],
    },
    {
      name: "Jupyter Notebook",
      selected: false,
      show: true,
      color: "bg-orange-600",
      category: ["all", "data"],
    },
    {
      name: "Rust",
      selected: false,
      show: true,
      color: "bg-orange-300",
      category: ["all", "desktop", "system", "iot"],
    },
    {
      name: "Objective-C",
      selected: false,
      show: true,
      color: "bg-blue-500",
      category: ["all", "mobile"],
    },
    {
      name: "CSS",
      selected: false,
      show: true,
      color: "bg-blueGray-600",
      category: ["all", "front", "game", "web"],
    },
    {
      name: "Kotlin",
      selected: false,
      show: true,
      color: "bg-orange-400",
      category: ["all", "mobile"],
    },
    {
      name: "Dart",
      selected: false,
      show: true,
      color: "bg-teal-500",
      category: ["all", "mobile"],
    },
    {
      name: "Vue",
      selected: false,
      show: true,
      color: "bg-blueGray-700",
      category: ["all", "web", "front"],
    },
    {
      name: "Vim script",
      selected: false,
      show: true,
      color: "bg-green-600",
      category: ["all"],
    },
    {
      name: "Scala",
      selected: false,
      show: true,
      color: "bg-rose-700",
      category: ["all", "back", "desktop", "data"],
    },

    {
      name: "Lua",
      selected: false,
      show: true,
      color: "bg-blue-900",
      category: ["all", "game", "iot"],
    },
    {
      name: "PowerShell",
      selected: false,
      show: true,
      color: "bg-blueGray-800",
      category: ["all"],
    },
    {
      name: "Emacs Lisp",
      selected: false,
      show: true,
      color: "bg-purple-500",
      category: ["all"],
    },
    {
      name: "Perl",
      selected: false,
      show: true,
      color: "bg-cyan-600",
      category: ["all"],
    },
    {
      name: "CoffeeScript",
      selected: false,
      show: true,
      color: "bg-blue-900",
      category: ["all"],
    },
    {
      name: "Haskell",
      selected: false,
      show: true,
      color: "bg-blueGray-500",
      category: ["all"],
    },
    {
      name: "TeX",
      selected: false,
      show: true,
      color: "bg-lime-800",
      category: ["all"],
    },
    {
      name: "Elixir",
      selected: false,
      show: true,
      color: "bg-gray-500",
      category: ["all"],
    },
    {
      name: "Dockerfile",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Clojure",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "OCaml",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Groovy",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "MATLAB",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Makefile",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "R",
      selected: false,
      show: true,
      color: "bg-lightBlue-500",
      category: ["all", "data", "iot", "desktop"],
    },
    {
      name: "Erlang",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "CMake",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Starlark",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Paskal",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },

    {
      name: "Common Lisp",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Vala",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Assembly",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },

    {
      name: "TSQL",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },

    {
      name: "Jsonnet",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },

    {
      name: "Julia",
      selected: false,
      show: true,
      color: "bg-gray-400",
      category: ["all", "data"],
    },
    {
      name: "F#",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Verilog",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Nim",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Puppet",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "WebAssembly",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Fortran",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "SystemVerilog",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Visual Basic .NET",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Elm",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Objective-C++",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },

    {
      name: "Smalltalk",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Markdown",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
    {
      name: "Crystal",
      selected: false,
      show: true,
      color: "bg-trueGray-400",
      category: ["all"],
    },
  ]);

  return (
    <LanguagesDispatchContext.Provider value={dispatch}>
      <LanguagesStateContext.Provider value={state}>
        {children}
      </LanguagesStateContext.Provider>
    </LanguagesDispatchContext.Provider>
  );
};

export const useLanguages = () => useContext(LanguagesStateContext);
export const useDispatchLanguages = () => useContext(LanguagesDispatchContext);
