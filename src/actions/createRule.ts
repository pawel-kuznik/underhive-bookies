import type { Rule } from "../types/rule";

export function createRule(title: string) : Rule {
    return {
        id: crypto.randomUUID(),
        title,
        description: "",
        reference: "",
    }
}