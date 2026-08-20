--- 
title: dataset_examples
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_examples
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>dataset_examples</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_examples" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.dataset_examples" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dataset_examples"
    values={[
        { label: 'list_dataset_examples', value: 'list_dataset_examples' }
    ]}
>
<TabItem value="list_dataset_examples">

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
    <td><CopyableCode code="example" /></td>
    <td><code>object</code></td>
    <td>Paginated example content. Each element is a JSON object containing at least an exampleId field plus the schema-specific content fields.</td>
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
    <td><a href="#list_dataset_examples"><CopyableCode code="list_dataset_examples" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-datasetVersion"><code>datasetVersion</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns paginated examples from the dataset. The server embeds the resolved version in the pagination token. Once pagination begins, all subsequent pages are pinned to that version regardless of concurrent mutations.</td>
</tr>
<tr>
    <td><a href="#add_dataset_examples"><CopyableCode code="add_dataset_examples" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>Adds examples to the dataset's DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics).</td>
</tr>
<tr>
    <td><a href="#update_dataset_examples"><CopyableCode code="update_dataset_examples" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-examples"><code>examples</code></a></td>
    <td></td>
    <td>Updates multiple existing examples in-place on DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics).</td>
</tr>
<tr>
    <td><a href="#delete_dataset_examples"><CopyableCode code="delete_dataset_examples" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes specific examples by ID from DRAFT. All example IDs are validated before any deletes occur. If any ID does not exist in DRAFT, the entire batch is rejected (all-or-nothing semantics).</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the dataset.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-datasetVersion">
    <td><CopyableCode code="datasetVersion" /></td>
    <td><code>string</code></td>
    <td>Version to paginate: "DRAFT" or a version number. Defaults to DRAFT if absent. Only used on the first request; for subsequent pages, the version is extracted from the pagination token.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of examples to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_dataset_examples"
    values={[
        { label: 'list_dataset_examples', value: 'list_dataset_examples' }
    ]}
>
<TabItem value="list_dataset_examples">

Returns paginated examples from the dataset. The server embeds the resolved version in the pagination token. Once pagination begins, all subsequent pages are pinned to that version regardless of concurrent mutations.

```sql
SELECT
example
FROM aws.bedrock_agentcore_control.dataset_examples
WHERE dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
AND datasetVersion = '{{ datasetVersion }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_dataset_examples"
    values={[
        { label: 'add_dataset_examples', value: 'add_dataset_examples' },
        { label: 'update_dataset_examples', value: 'update_dataset_examples' }
    ]}
>
<TabItem value="add_dataset_examples">

Adds examples to the dataset's DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics).

```sql
UPDATE aws.bedrock_agentcore_control.dataset_examples
SET 
clientToken = '{{ clientToken }}',
source = '{{ source }}'
WHERE 
dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND source = '{{ source }}' --required
RETURNING
added_count,
dataset_arn,
dataset_id,
example_ids,
status,
updated_at;
```
</TabItem>
<TabItem value="update_dataset_examples">

Updates multiple existing examples in-place on DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics).

```sql
UPDATE aws.bedrock_agentcore_control.dataset_examples
SET 
clientToken = '{{ clientToken }}',
examples = '{{ examples }}'
WHERE 
dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND examples = '{{ examples }}' --required
RETURNING
dataset_arn,
dataset_id,
status,
updated_at,
updated_count;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset_examples"
    values={[
        { label: 'delete_dataset_examples', value: 'delete_dataset_examples' }
    ]}
>
<TabItem value="delete_dataset_examples">

Deletes specific examples by ID from DRAFT. All example IDs are validated before any deletes occur. If any ID does not exist in DRAFT, the entire batch is rejected (all-or-nothing semantics).

```sql
DELETE FROM aws.bedrock_agentcore_control.dataset_examples
WHERE dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
