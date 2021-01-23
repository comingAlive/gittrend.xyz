import { Draft } from "immer";
import { createContext, ReactNode, useContext } from "react";
import { useImmerReducer } from "use-immer";

type Language = {
  name: string;
  id: number;
  selected: boolean;
  show: boolean;
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
        s[a.payload].selected = !s[a.payload].selected;
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
      // case "SELECT":
      //   return s.map((v) => {
      //     if (v.id === a.payload) {
      //       return {...v, selected: !v.selected}
      //     }
      //     return v;
      //   });
      default:
        throw new Error(`Unknown action: ${a.type}`);
    }
  };

  const [state, dispatch] = useImmerReducer(languagesReducer, [
    // const [state, dispatch] = useReducer(languagesReducer, [
    {
      name: "JavaScript",
      id: 0,
      selected: false,
      show: true,
      category: ["all", "web"],
    },
    { name: "Python", id: 1, selected: false, show: true, category: ["all"] },
    { name: "Java", id: 2, selected: false, show: true, category: ["all"] },
    { name: "Go", id: 3, selected: false, show: true, category: ["all"] },
    { name: "C++", id: 4, selected: false, show: true, category: ["all"] },
    { name: "Ruby", id: 5, selected: false, show: true, category: ["all"] },
    {
      name: "TypeScript",
      id: 6,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "PHP", id: 7, selected: false, show: true, category: ["all"] },
    { name: "C#", id: 8, selected: false, show: true, category: ["all"] },
    { name: "C", id: 9, selected: false, show: true, category: ["all"] },
    { name: "Scala", id: 10, selected: false, show: true, category: ["all"] },
    { name: "Shell", id: 11, selected: false, show: true, category: ["all"] },
    { name: "Dart", id: 12, selected: false, show: true, category: ["all"] },
    { name: "Rust", id: 13, selected: false, show: true, category: ["all"] },
    { name: "Kotlin", id: 14, selected: false, show: true, category: ["all"] },
    { name: "Swift", id: 15, selected: false, show: true, category: ["all"] },
    { name: "Groovy", id: 16, selected: false, show: true, category: ["all"] },
    {
      name: "Objective-C",
      id: 17,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Elixir", id: 18, selected: false, show: true, category: ["all"] },
    { name: "DM", id: 19, selected: false, show: true, category: ["all"] },
    { name: "Perl", id: 20, selected: false, show: true, category: ["all"] },
    {
      name: "CoffeeScript",
      id: 21,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Lua", id: 22, selected: false, show: true, category: ["all"] },
    {
      name: "PowerShell",
      id: 23,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Clojure", id: 24, selected: false, show: true, category: ["all"] },
    { name: "TSQL", id: 25, selected: false, show: true, category: ["all"] },
    { name: "OCaml", id: 26, selected: false, show: true, category: ["all"] },
    {
      name: "Vim script",
      id: 27,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Haskell", id: 28, selected: false, show: true, category: ["all"] },
    {
      name: "Emacs Lisp",
      id: 29,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Erlang", id: 30, selected: false, show: true, category: ["all"] },
    { name: "Jsonnet", id: 31, selected: false, show: true, category: ["all"] },
    { name: "R", id: 32, selected: false, show: true, category: ["all"] },
    { name: "Coq", id: 33, selected: false, show: true, category: ["all"] },
    { name: "Julia", id: 34, selected: false, show: true, category: ["all"] },
    { name: "MATLAB", id: 35, selected: false, show: true, category: ["all"] },
    { name: "Roff", id: 36, selected: false, show: true, category: ["all"] },
    {
      name: "PureScript",
      id: 37,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Puppet", id: 38, selected: false, show: true, category: ["all"] },
    {
      name: "WebAssembly",
      id: 39,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Fortran", id: 40, selected: false, show: true, category: ["all"] },
    {
      name: "SystemVerilog",
      id: 41,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "F#", id: 42, selected: false, show: true, category: ["all"] },
    {
      name: "Visual Basic .NET",
      id: 43,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Elm", id: 44, selected: false, show: true, category: ["all"] },
    {
      name: "Objective-C++",
      id: 45,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Vala", id: 46, selected: false, show: true, category: ["all"] },
    { name: "Verilog", id: 47, selected: false, show: true, category: ["all"] },
    {
      name: "Smalltalk",
      id: 48,
      selected: false,
      show: true,
      category: ["all"],
    },
    { name: "Crystal", id: 49, selected: false, show: true, category: ["all"] },
    {
      name: "HTML",
      id: 50,
      selected: false,
      show: true,
      category: ["all", "web"],
    },
    {
      name: "CSS",
      id: 51,
      selected: false,
      show: true,
      category: ["all", "web"],
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
