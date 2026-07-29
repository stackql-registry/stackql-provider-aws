--- 
title: custom_entity_types
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_entity_types
  - glue
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>custom_entity_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_entity_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.custom_entity_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_custom_entity_types"
    values={[
        { label: 'batch_get_custom_entity_types', value: 'batch_get_custom_entity_types' },
        { label: 'get_custom_entity_type', value: 'get_custom_entity_type' }
    ]}
>
<TabItem value="batch_get_custom_entity_types">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="custom_entity_types" /></td>
    <td><code>array</code></td>
    <td>A list of CustomEntityType objects representing the custom patterns that have been created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_entity_types_not_found" /></td>
    <td><code>array</code></td>
    <td>A list of the names of custom patterns that were not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_custom_entity_type">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="context_words" /></td>
    <td><code>array</code></td>
    <td>A list of context words if specified when you created the custom pattern. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom pattern that you retrieved. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regex_string" /></td>
    <td><code>string</code></td>
    <td>A regular expression string that is used for detecting sensitive data in a custom pattern. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#batch_get_custom_entity_types"><CopyableCode code="batch_get_custom_entity_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details for the custom patterns specified by a list of names.</td>
</tr>
<tr>
    <td><a href="#get_custom_entity_type"><CopyableCode code="get_custom_entity_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a custom pattern by specifying its name.</td>
</tr>
<tr>
    <td><a href="#create_custom_entity_type"><CopyableCode code="create_custom_entity_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegexString"><code>RegexString</code></a></td>
    <td></td>
    <td>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data. Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</td>
</tr>
<tr>
    <td><a href="#delete_custom_entity_type"><CopyableCode code="delete_custom_entity_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom pattern by specifying its name.</td>
</tr>
<tr>
    <td><a href="#list_custom_entity_types"><CopyableCode code="list_custom_entity_types" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the custom patterns that have been created.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_custom_entity_types"
    values={[
        { label: 'batch_get_custom_entity_types', value: 'batch_get_custom_entity_types' },
        { label: 'get_custom_entity_type', value: 'get_custom_entity_type' }
    ]}
>
<TabItem value="batch_get_custom_entity_types">

Retrieves the details for the custom patterns specified by a list of names.

```sql
SELECT
custom_entity_types,
custom_entity_types_not_found
FROM aws.glue.custom_entity_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_custom_entity_type">

Retrieves the details of a custom pattern by specifying its name.

```sql
SELECT
context_words,
name,
regex_string
FROM aws.glue.custom_entity_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_entity_type"
    values={[
        { label: 'create_custom_entity_type', value: 'create_custom_entity_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_entity_type">

Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data. Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.

```sql
INSERT INTO aws.glue.custom_entity_types (
Name,
RegexString,
ContextWords,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ RegexString }}' /* required */,
'{{ ContextWords }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_entity_types
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_entity_types resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the custom pattern that allows it to be retrieved or deleted later. This name must be unique per Amazon Web Services account.
    - name: RegexString
      value: "{{ RegexString }}"
      description: |
        A regular expression string that is used for detecting sensitive data in a custom pattern.
    - name: ContextWords
      value:
        - "{{ ContextWords }}"
      description: |
        A list of context words. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data. If no context words are passed only a regular expression is checked.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A list of tags applied to the custom entity type.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_entity_type"
    values={[
        { label: 'delete_custom_entity_type', value: 'delete_custom_entity_type' }
    ]}
>
<TabItem value="delete_custom_entity_type">

Deletes a custom pattern by specifying its name.

```sql
DELETE FROM aws.glue.custom_entity_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_custom_entity_types"
    values={[
        { label: 'list_custom_entity_types', value: 'list_custom_entity_types' }
    ]}
>
<TabItem value="list_custom_entity_types">

Lists all the custom patterns that have been created.

```sql
EXEC aws.glue.custom_entity_types.list_custom_entity_types 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
