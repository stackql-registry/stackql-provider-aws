--- 
title: builtin_slot_types
hide_title: false
hide_table_of_contents: false
keywords:
  - builtin_slot_types
  - lex_models
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

Creates, updates, deletes, gets or lists a <code>builtin_slot_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="builtin_slot_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.builtin_slot_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_builtin_slot_types"
    values={[
        { label: 'get_builtin_slot_types', value: 'get_builtin_slot_types' }
    ]}
>
<TabItem value="get_builtin_slot_types">

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
    <td><CopyableCode code="signature" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the built-in slot type. To find the signature for a slot type, see Slot Type Reference in the Alexa Skills Kit.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedLocales" /></td>
    <td><code>array</code></td>
    <td>A list of target locales for the slot.</td>
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
    <td><a href="#get_builtin_slot_types"><CopyableCode code="get_builtin_slot_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-locale"><code>locale</code></a>, <a href="#parameter-signatureContains"><code>signatureContains</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.</td>
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
<tr id="parameter-locale">
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>A list of locales that the slot type supports.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of slot types to return in the response. The default is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of slot types, specify the pagination token in the next request.</td>
</tr>
<tr id="parameter-signatureContains">
    <td><CopyableCode code="signatureContains" /></td>
    <td><code>string</code></td>
    <td>Substring to match in built-in slot type signatures. A slot type will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_builtin_slot_types"
    values={[
        { label: 'get_builtin_slot_types', value: 'get_builtin_slot_types' }
    ]}
>
<TabItem value="get_builtin_slot_types">

Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.

```sql
SELECT
signature,
supportedLocales
FROM aws.lex_models.builtin_slot_types
WHERE region = '{{ region }}' -- required
AND locale = '{{ locale }}'
AND signatureContains = '{{ signatureContains }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
