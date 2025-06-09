/**
 *  Extract a property from an object and convert it to a specific type.
 */
export function extractPropAs<T>(input: { [key: string]: any }, prop: string, converter: (value: any) => T) : T {

    if (!(prop in input)) throw new Error(`Property ${prop} not found in input`);
    return converter(input[prop]);
}