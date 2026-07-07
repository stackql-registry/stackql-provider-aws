--- 
title: field_options
hide_title: false
hide_table_of_contents: false
keywords:
  - field_options
  - connectcases
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

Creates, updates, deletes, gets or lists a <code>field_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="field_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.field_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_field_options"
    values={[
        { label: 'list_field_options', value: 'list_field_options' }
    ]}
>
<TabItem value="list_field_options">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. This is null if there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>A list of FieldOption objects.</td>
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
    <td><a href="#list_field_options"><CopyableCode code="list_field_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-values"><code>values</code></a></td>
    <td>Lists all of the field options for a field identifier in the domain.</td>
</tr>
<tr>
    <td><a href="#batch_put_field_options"><CopyableCode code="batch_put_field_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-options"><code>options</code></a></td>
    <td></td>
    <td>Creates and updates a set of field options for a single select field in a Cases domain.</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cases domain.</td>
</tr>
<tr id="parameter-field_id">
    <td><CopyableCode code="field_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a field.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-values">
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>A list of FieldOption values to filter on for ListFieldOptions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_field_options"
    values={[
        { label: 'list_field_options', value: 'list_field_options' }
    ]}
>
<TabItem value="list_field_options">

Lists all of the field options for a field identifier in the domain.

```sql
SELECT
nextToken,
options
FROM aws.connectcases.field_options
WHERE domain_id = '{{ domain_id }}' -- required
AND field_id = '{{ field_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND values = '{{ values }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_put_field_options"
    values={[
        { label: 'batch_put_field_options', value: 'batch_put_field_options' }
    ]}
>
<TabItem value="batch_put_field_options">

Creates and updates a set of field options for a single select field in a Cases domain.

```sql
EXEC aws.connectcases.field_options.batch_put_field_options 
@domain_id='{{ domain_id }}' --required, 
@field_id='{{ field_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"options": "{{ options }}"
}'
;
```
</TabItem>
</Tabs>
