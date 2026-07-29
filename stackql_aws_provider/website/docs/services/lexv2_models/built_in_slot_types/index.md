--- 
title: built_in_slot_types
hide_title: false
hide_table_of_contents: false
keywords:
  - built_in_slot_types
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>built_in_slot_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="built_in_slot_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.built_in_slot_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_built_in_slot_types"
    values={[
        { label: 'list_built_in_slot_types', value: 'list_built_in_slot_types' }
    ]}
>
<TabItem value="list_built_in_slot_types">

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
    <td><CopyableCode code="built_in_slot_type_summaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the built-in slot types that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more slot types available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The language and locale of the slot types in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListBuiltInSlotTypes operation. If the nextToken field is present, you send the contents as the nextToken parameter of a LIstBuiltInSlotTypes operation request to get the next page of results.</td>
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
    <td><a href="#list_built_in_slot_types"><CopyableCode code="list_built_in_slot_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of built-in slot types that meet the specified criteria.</td>
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
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see Supported languages.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_built_in_slot_types"
    values={[
        { label: 'list_built_in_slot_types', value: 'list_built_in_slot_types' }
    ]}
>
<TabItem value="list_built_in_slot_types">

Gets a list of built-in slot types that meet the specified criteria.

```sql
SELECT
built_in_slot_type_summaries,
locale_id,
next_token
FROM aws.lexv2_models.built_in_slot_types
WHERE locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
