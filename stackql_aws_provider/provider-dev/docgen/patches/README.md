# Local patches pending upstream

## provider-utils: docgen `schema_override` support

`provider-utils-helpers-schema-override.js` is a patched copy of
`@stackql/provider-utils/src/docgen/helpers.js` (applied in-place to
`node_modules` in this repo - re-apply after any `npm install`).

Problem: 778 of this provider's resource pages documented zero fields and
emitted `SELECT *` examples. Those methods reshape the wire response with a
response transform and document the row shape via
`response.schema_override` (a `$ref` to a `*Display` envelope schema) +
`objectKey: $.line_items`. Docgen ignored `schema_override` and resolved
`objectKey` against the operation's declared response schema, where
`line_items` does not exist.

Change (all in `helpers.js`):

1. `getHttpOperationForSqlVerb` also returns
   `schemaOverride: methodObj.response.schema_override || false`.
2. New `resolveSchemaOverride(dereferencedAPI, schemaOverride)` - resolves a
   `#/components/schemas/<name>` ref against the dereferenced doc (inline
   schema objects pass through).
3. `getHttpOperationInfo` takes `schemaOverride` as a trailing optional
   param; when it resolves, fields come from
   `getHttpRespBody(overrideSchema, objectKey)` and the declared response
   content is skipped.
4. The single call site threads the new value through.

Upstream target: stackql/provider-utils (docgen). Behavior is unchanged for
providers without `schema_override`.
