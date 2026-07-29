--- 
title: changesets
hide_title: false
hide_table_of_contents: false
keywords:
  - changesets
  - finspace_data
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

Creates, updates, deletes, gets or lists a <code>changesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="changesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.changesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_changeset"
    values={[
        { label: 'get_changeset', value: 'get_changeset' },
        { label: 'list_changesets', value: 'list_changesets' }
    ]}
>
<TabItem value="get_changeset">

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
    <td><CopyableCode code="active_from_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="active_until_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="change_type" /></td>
    <td><code>string</code></td>
    <td>Indicates how the given change will be applied to the dataset. (REPLACE, APPEND, MODIFY)</td>
</tr>
<tr>
    <td><CopyableCode code="changeset_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the Changeset.</td>
</tr>
<tr>
    <td><CopyableCode code="changeset_id" /></td>
    <td><code>string</code></td>
    <td>ID used to identify a Changeset</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>ID for a given Dataset</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>The structure with error messages.</td>
</tr>
<tr>
    <td><CopyableCode code="format_params" /></td>
    <td><code>object</code></td>
    <td>Structure of the source file(s).</td>
</tr>
<tr>
    <td><CopyableCode code="source_params" /></td>
    <td><code>object</code></td>
    <td>Options that define the location of the data being ingested.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of Changeset creation operation. (PENDING, FAILED, SUCCESS, RUNNING, STOP_REQUESTED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by_changeset_id" /></td>
    <td><code>string</code></td>
    <td>ID used to identify a Changeset</td>
</tr>
<tr>
    <td><CopyableCode code="updates_changeset_id" /></td>
    <td><code>string</code></td>
    <td>ID used to identify a Changeset</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_changesets">

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
    <td><CopyableCode code="active_from_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Beginning time from which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="active_until_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time until which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="change_type" /></td>
    <td><code>string</code></td>
    <td>Indicates how the given change will be applied to the dataset. (REPLACE, APPEND, MODIFY)</td>
</tr>
<tr>
    <td><CopyableCode code="changeset_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the Changeset.</td>
</tr>
<tr>
    <td><CopyableCode code="changeset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a Changeset.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp at which the Changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>ID for a given Dataset</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>The structure with error messages.</td>
</tr>
<tr>
    <td><CopyableCode code="format_params" /></td>
    <td><code>object</code></td>
    <td>Options that define the structure of the source file(s).</td>
</tr>
<tr>
    <td><CopyableCode code="source_params" /></td>
    <td><code>object</code></td>
    <td>Options that define the location of the data being ingested.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Changeset ingestion. PENDING – Changeset is pending creation. FAILED – Changeset creation has failed. SUCCESS – Changeset creation has succeeded. RUNNING – Changeset creation is running. STOP_REQUESTED – User requested Changeset creation to stop. (PENDING, FAILED, SUCCESS, RUNNING, STOP_REQUESTED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by_changeset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the updated Changeset.</td>
</tr>
<tr>
    <td><CopyableCode code="updates_changeset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Changeset that is updated.</td>
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
    <td><a href="#get_changeset"><CopyableCode code="get_changeset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-changeset_id"><code>changeset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about a Changeset.</td>
</tr>
<tr>
    <td><a href="#list_changesets"><CopyableCode code="list_changesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the FinSpace Changesets for a Dataset.</td>
</tr>
<tr>
    <td><a href="#create_changeset"><CopyableCode code="create_changeset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-changeType"><code>changeType</code></a>, <a href="#parameter-sourceParams"><code>sourceParams</code></a>, <a href="#parameter-formatParams"><code>formatParams</code></a></td>
    <td></td>
    <td>Creates a new Changeset in a FinSpace Dataset.</td>
</tr>
<tr>
    <td><a href="#update_changeset"><CopyableCode code="update_changeset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-changeset_id"><code>changeset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceParams"><code>sourceParams</code></a>, <a href="#parameter-formatParams"><code>formatParams</code></a></td>
    <td></td>
    <td>Updates a FinSpace Changeset.</td>
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
<tr id="parameter-changeset_id">
    <td><CopyableCode code="changeset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Changeset to update.</td>
</tr>
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the FinSpace Dataset in which the Changeset is created.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_changeset"
    values={[
        { label: 'get_changeset', value: 'get_changeset' },
        { label: 'list_changesets', value: 'list_changesets' }
    ]}
>
<TabItem value="get_changeset">

Get information about a Changeset.

```sql
SELECT
active_from_timestamp,
active_until_timestamp,
change_type,
changeset_arn,
changeset_id,
create_time,
dataset_id,
error_info,
format_params,
source_params,
status,
updated_by_changeset_id,
updates_changeset_id
FROM aws.finspace_data.changesets
WHERE dataset_id = '{{ dataset_id }}' -- required
AND changeset_id = '{{ changeset_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_changesets">

Lists the FinSpace Changesets for a Dataset.

```sql
SELECT
active_from_timestamp,
active_until_timestamp,
change_type,
changeset_arn,
changeset_id,
create_time,
dataset_id,
error_info,
format_params,
source_params,
status,
updated_by_changeset_id,
updates_changeset_id
FROM aws.finspace_data.changesets
WHERE dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_changeset"
    values={[
        { label: 'create_changeset', value: 'create_changeset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_changeset">

Creates a new Changeset in a FinSpace Dataset.

```sql
INSERT INTO aws.finspace_data.changesets (
clientToken,
changeType,
sourceParams,
formatParams,
dataset_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ changeType }}' /* required */,
'{{ sourceParams }}' /* required */,
'{{ formatParams }}' /* required */,
'{{ dataset_id }}',
'{{ region }}'
RETURNING
changeset_id,
dataset_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: changesets
  props:
    - name: dataset_id
      value: "{{ dataset_id }}"
      description: Required parameter for the changesets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the changesets resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotence Token for API operations
    - name: changeType
      value: "{{ changeType }}"
      description: |
        Indicates how the given change will be applied to the dataset.
      valid_values: ['REPLACE', 'APPEND', 'MODIFY']
    - name: sourceParams
      value: "{{ sourceParams }}"
      description: |
        Source Parameters of a Changeset
    - name: formatParams
      value: "{{ formatParams }}"
      description: |
        Format Parameters of a Changeset
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_changeset"
    values={[
        { label: 'update_changeset', value: 'update_changeset' }
    ]}
>
<TabItem value="update_changeset">

Updates a FinSpace Changeset.

```sql
UPDATE aws.finspace_data.changesets
SET 
clientToken = '{{ clientToken }}',
sourceParams = '{{ sourceParams }}',
formatParams = '{{ formatParams }}'
WHERE 
dataset_id = '{{ dataset_id }}' --required
AND changeset_id = '{{ changeset_id }}' --required
AND region = '{{ region }}' --required
AND sourceParams = '{{ sourceParams }}' --required
AND formatParams = '{{ formatParams }}' --required
RETURNING
changeset_id,
dataset_id;
```
</TabItem>
</Tabs>
