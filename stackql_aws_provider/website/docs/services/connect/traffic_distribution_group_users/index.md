--- 
title: traffic_distribution_group_users
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_distribution_group_users
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

Creates, updates, deletes, gets or lists a <code>traffic_distribution_group_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_distribution_group_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.traffic_distribution_group_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_traffic_distribution_group_users"
    values={[
        { label: 'list_traffic_distribution_group_users', value: 'list_traffic_distribution_group_users' }
    ]}
>
<TabItem value="list_traffic_distribution_group_users">

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
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the user. This can be the ID or the ARN of the user.</td>
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
    <td><a href="#list_traffic_distribution_group_users"><CopyableCode code="list_traffic_distribution_group_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-traffic_distribution_group_id"><code>traffic_distribution_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists traffic distribution group users.</td>
</tr>
<tr>
    <td><a href="#associate_traffic_distribution_group_user"><CopyableCode code="associate_traffic_distribution_group_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-traffic_distribution_group_id"><code>traffic_distribution_group_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Associates an agent with a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created.</td>
</tr>
<tr>
    <td><a href="#disassociate_traffic_distribution_group_user"><CopyableCode code="disassociate_traffic_distribution_group_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-traffic_distribution_group_id"><code>traffic_distribution_group_id</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an agent from a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-UserId">
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the user. This can be the ID or the ARN of the user.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-traffic_distribution_group_id">
    <td><CopyableCode code="traffic_distribution_group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group.</td>
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
    defaultValue="list_traffic_distribution_group_users"
    values={[
        { label: 'list_traffic_distribution_group_users', value: 'list_traffic_distribution_group_users' }
    ]}
>
<TabItem value="list_traffic_distribution_group_users">

Lists traffic distribution group users.

```sql
SELECT
user_id
FROM aws.connect.traffic_distribution_group_users
WHERE traffic_distribution_group_id = '{{ traffic_distribution_group_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_traffic_distribution_group_user"
    values={[
        { label: 'associate_traffic_distribution_group_user', value: 'associate_traffic_distribution_group_user' }
    ]}
>
<TabItem value="associate_traffic_distribution_group_user">

Associates an agent with a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created.

```sql
UPDATE aws.connect.traffic_distribution_group_users
SET 
UserId = '{{ UserId }}',
InstanceId = '{{ InstanceId }}'
WHERE 
traffic_distribution_group_id = '{{ traffic_distribution_group_id }}' --required
AND region = '{{ region }}' --required
AND UserId = '{{ UserId }}' --required
AND InstanceId = '{{ InstanceId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_traffic_distribution_group_user"
    values={[
        { label: 'disassociate_traffic_distribution_group_user', value: 'disassociate_traffic_distribution_group_user' }
    ]}
>
<TabItem value="disassociate_traffic_distribution_group_user">

Disassociates an agent from a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created.

```sql
EXEC aws.connect.traffic_distribution_group_users.disassociate_traffic_distribution_group_user 
@traffic_distribution_group_id='{{ traffic_distribution_group_id }}' --required, 
@UserId='{{ UserId }}' --required, 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
