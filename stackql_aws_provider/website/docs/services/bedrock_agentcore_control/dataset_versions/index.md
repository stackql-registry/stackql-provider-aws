--- 
title: dataset_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_versions
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

Creates, updates, deletes, gets or lists a <code>dataset_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.dataset_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dataset_versions"
    values={[
        { label: 'list_dataset_versions', value: 'list_dataset_versions' }
    ]}
>
<TabItem value="list_dataset_versions">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this version was published.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_version" /></td>
    <td><code>string</code></td>
    <td>The version number of this published snapshot. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="example_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of examples in this version.</td>
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
    <td><a href="#list_dataset_versions"><CopyableCode code="list_dataset_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all published versions of a dataset, sorted by version number descending (newest first). Does not include the DRAFT working copy.</td>
</tr>
<tr>
    <td><a href="#create_dataset_version"><CopyableCode code="create_dataset_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Publishes the current DRAFT as a new numbered version. The DRAFT is preserved and remains editable after publishing. Returns immediately with status UPDATING. Poll GetDataset until status transitions to ACTIVE or UPDATE_FAILED.</td>
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
    <td>The unique identifier of the dataset to publish a version for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of versions to return per page.</td>
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
    defaultValue="list_dataset_versions"
    values={[
        { label: 'list_dataset_versions', value: 'list_dataset_versions' }
    ]}
>
<TabItem value="list_dataset_versions">

Lists all published versions of a dataset, sorted by version number descending (newest first). Does not include the DRAFT working copy.

```sql
SELECT
created_at,
dataset_version,
example_count
FROM aws.bedrock_agentcore_control.dataset_versions
WHERE dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset_version"
    values={[
        { label: 'create_dataset_version', value: 'create_dataset_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset_version">

Publishes the current DRAFT as a new numbered version. The DRAFT is preserved and remains editable after publishing. Returns immediately with status UPDATING. Poll GetDataset until status transitions to ACTIVE or UPDATE_FAILED.

```sql
INSERT INTO aws.bedrock_agentcore_control.dataset_versions (
clientToken,
dataset_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ dataset_id }}',
'{{ region }}'
RETURNING
created_at,
dataset_arn,
dataset_id,
dataset_version,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_versions
  props:
    - name: dataset_id
      value: "{{ dataset_id }}"
      description: Required parameter for the dataset_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataset_versions resource.
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
