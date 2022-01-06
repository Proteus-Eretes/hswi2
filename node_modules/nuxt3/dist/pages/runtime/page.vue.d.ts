declare namespace _default {
    const name: string;
    namespace components {
        export { NuxtLayout };
    }
    namespace props {
        namespace layout {
            export const type: StringConstructor;
            const _default: any;
            export { _default as default };
        }
    }
    function setup(): {
        updatedComponentLayout: any;
        onSuspensePending: (Component: any) => any;
        onSuspenseResolved: (Component: any) => any;
    };
    function setup(): {
        updatedComponentLayout: any;
        onSuspensePending: (Component: any) => any;
        onSuspenseResolved: (Component: any) => any;
    };
}
export default _default;
import NuxtLayout from "./layout";
