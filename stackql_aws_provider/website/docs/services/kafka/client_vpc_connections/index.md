--- 
title: client_vpc_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - client_vpc_connections
  - kafka
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

Creates, updates, deletes, gets or lists a <code>client_vpc_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_vpc_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.client_vpc_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_client_vpc_connections"
    values={[
        { label: 'list_client_vpc_connections', value: 'list_client_vpc_connections' }
    ]}
>
<TabItem value="list_client_vpc_connections">

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
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Information about the auth scheme of Vpc Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the Vpc Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The Owner of the Vpc Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>State of the Vpc Connection. (CREATING, AVAILABLE, INACTIVE, DEACTIVATING, DELETING, FAILED, REJECTED, REJECTING)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConnectionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN that identifies the Vpc Connection.</td>
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
    <td><a href="#list_client_vpc_connections"><CopyableCode code="list_client_vpc_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all the VPC connections in this Region.</td>
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
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_client_vpc_connections"
    values={[
        { label: 'list_client_vpc_connections', value: 'list_client_vpc_connections' }
    ]}
>
<TabItem value="list_client_vpc_connections">

Returns a list of all the VPC connections in this Region.

```sql
SELECT
Authentication,
CreationTime,
Owner,
State,
VpcConnectionArn
FROM aws.kafka.client_vpc_connections
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
