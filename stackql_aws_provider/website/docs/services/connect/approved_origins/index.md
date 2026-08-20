--- 
title: approved_origins
hide_title: false
hide_table_of_contents: false
keywords:
  - approved_origins
  - connect
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

Creates, updates, deletes, gets or lists an <code>approved_origins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="approved_origins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.approved_origins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_approved_origins"
    values={[
        { label: 'list_approved_origins', value: 'list_approved_origins' }
    ]}
>
<TabItem value="list_approved_origins">

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
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The approved origins.</td>
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
    <td><a href="#list_approved_origins"><CopyableCode code="list_approved_origins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Returns a paginated list of all approved origins associated with the instance.</td>
</tr>
<tr>
    <td><a href="#disassociate_approved_origin"><CopyableCode code="disassociate_approved_origin" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-origin"><code>origin</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Revokes access to integrated applications from Connect Customer.</td>
</tr>
<tr>
    <td><a href="#associate_approved_origin"><CopyableCode code="associate_approved_origin" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Associates an approved origin to an Connect Customer instance.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-origin">
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The domain URL of the integrated application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_approved_origins"
    values={[
        { label: 'list_approved_origins', value: 'list_approved_origins' }
    ]}
>
<TabItem value="list_approved_origins">

This API is in preview release for Connect Customer and is subject to change. Returns a paginated list of all approved origins associated with the instance.

```sql
SELECT
origin
FROM aws.connect.approved_origins
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_approved_origin"
    values={[
        { label: 'disassociate_approved_origin', value: 'disassociate_approved_origin' },
        { label: 'associate_approved_origin', value: 'associate_approved_origin' }
    ]}
>
<TabItem value="disassociate_approved_origin">

This API is in preview release for Connect Customer and is subject to change. Revokes access to integrated applications from Connect Customer.

```sql
UPDATE aws.connect.approved_origins
SET 
-- No updatable properties
WHERE 
instance_id = '{{ instance_id }}' --required
AND origin = '{{ origin }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}';
```
</TabItem>
<TabItem value="associate_approved_origin">

This API is in preview release for Connect Customer and is subject to change. Associates an approved origin to an Connect Customer instance.

```sql
UPDATE aws.connect.approved_origins
SET 
Origin = '{{ Origin }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
