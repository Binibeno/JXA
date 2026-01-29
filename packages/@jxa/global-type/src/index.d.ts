import {
    Application as JXAApplication,
    ObjectSpecifier as JXAObjectSpecifier,
    Automation as JXAAutomation
} from "@jxa/types";

declare global {
    interface GlobalThis {
        Application: typeof JXAApplication;
        Automation: typeof JXAAutomation;
        ObjectSpecifier: typeof JXAObjectSpecifier;

        Path: (name: string) => object;

        /**
         * Pause for a fixed amount of time
         * @param delay the number of seconds to delay (default is 0)
         *
         */
        delay: (delay?: number) => void;

        ObjC: any;
        $: any;
    }
}
