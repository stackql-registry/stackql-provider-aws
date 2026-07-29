--- 
title: data_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sets
  - dataexchange
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

Creates, updates, deletes, gets or lists a <code>data_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dataexchange.data_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_set"
    values={[
        { label: 'get_data_set', value: 'get_data_set' },
        { label: 'list_data_sets', value: 'list_data_sets' }
    ]}
>
<TabItem value="get_data_set">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the data set.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_type" /></td>
    <td><code>string</code></td>
    <td>The type of asset that is added to a data set. (S3_SNAPSHOT, REDSHIFT_DATA_SHARE, API_GATEWAY_API, S3_DATA_ACCESS, LAKE_FORMATION_DATA_PERMISSION)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the data set was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the data set.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data set.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). (OWNED, ENTITLED)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_details" /></td>
    <td><code>object</code></td>
    <td>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags for the data set.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the data set was last updated, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_sets">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the data set.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_type" /></td>
    <td><code>string</code></td>
    <td>The type of asset that is added to a data set. (S3_SNAPSHOT, REDSHIFT_DATA_SHARE, API_GATEWAY_API, S3_DATA_ACCESS, LAKE_FORMATION_DATA_PERMISSION)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the data set was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the data set.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data set.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). (OWNED, ENTITLED)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_details" /></td>
    <td><code>object</code></td>
    <td>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the data set was last updated, in ISO 8601 format.</td>
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
    <td><a href="#get_data_set"><CopyableCode code="get_data_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns information about a data set.</td>
</tr>
<tr>
    <td><a href="#list_data_sets"><CopyableCode code="list_data_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-origin"><code>origin</code></a></td>
    <td>This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order.</td>
</tr>
<tr>
    <td><a href="#create_data_set"><CopyableCode code="create_data_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetType"><code>AssetType</code></a></td>
    <td></td>
    <td>This operation creates a data set.</td>
</tr>
<tr>
    <td><a href="#update_data_set"><CopyableCode code="update_data_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation updates a data set.</td>
</tr>
<tr>
    <td><a href="#delete_data_set"><CopyableCode code="delete_data_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes a data set.</td>
</tr>
<tr>
    <td><a href="#send_data_set_notification"><CopyableCode code="send_data_set_notification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td></td>
    <td>The type of event associated with the data set.</td>
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
<tr id="parameter-data_set_id">
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>Affected data set of the notification.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
<tr id="parameter-origin">
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_set"
    values={[
        { label: 'get_data_set', value: 'get_data_set' },
        { label: 'list_data_sets', value: 'list_data_sets' }
    ]}
>
<TabItem value="get_data_set">

This operation returns information about a data set.

```sql
SELECT
arn,
asset_type,
created_at,
description,
id,
name,
origin,
origin_details,
source_id,
tags,
updated_at
FROM aws.dataexchange.data_sets
WHERE data_set_id = '{{ data_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_sets">

This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order.

```sql
SELECT
arn,
asset_type,
created_at,
description,
id,
name,
origin,
origin_details,
source_id,
updated_at
FROM aws.dataexchange.data_sets
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND origin = '{{ origin }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_set"
    values={[
        { label: 'create_data_set', value: 'create_data_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_set">

This operation creates a data set.

```sql
INSERT INTO aws.dataexchange.data_sets (
AssetType,
Description,
Name,
Tags,
region
)
SELECT 
'{{ AssetType }}' /* required */,
'{{ Description }}',
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
asset_type,
created_at,
description,
id,
name,
origin,
origin_details,
source_id,
tags,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sets resource.
    - name: AssetType
      value: "{{ AssetType }}"
      valid_values: ['S3_SNAPSHOT', 'REDSHIFT_DATA_SHARE', 'API_GATEWAY_API', 'S3_DATA_ACCESS', 'LAKE_FORMATION_DATA_PERMISSION']
    - name: Description
      value: "{{ Description }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_set"
    values={[
        { label: 'update_data_set', value: 'update_data_set' }
    ]}
>
<TabItem value="update_data_set">

This operation updates a data set.

```sql
UPDATE aws.dataexchange.data_sets
SET 
Description = '{{ Description }}',
Name = '{{ Name }}'
WHERE 
data_set_id = '{{ data_set_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
asset_type,
created_at,
description,
id,
name,
origin,
origin_details,
source_id,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_set"
    values={[
        { label: 'delete_data_set', value: 'delete_data_set' }
    ]}
>
<TabItem value="delete_data_set">

This operation deletes a data set.

```sql
DELETE FROM aws.dataexchange.data_sets
WHERE data_set_id = '{{ data_set_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_data_set_notification"
    values={[
        { label: 'send_data_set_notification', value: 'send_data_set_notification' }
    ]}
>
<TabItem value="send_data_set_notification">

The type of event associated with the data set.

```sql
EXEC aws.dataexchange.data_sets.send_data_set_notification 
@data_set_id='{{ data_set_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Scope": "{{ Scope }}", 
"ClientToken": "{{ ClientToken }}", 
"Comment": "{{ Comment }}", 
"Details": "{{ Details }}", 
"Type": "{{ Type }}"
}'
;
```
</TabItem>
</Tabs>
