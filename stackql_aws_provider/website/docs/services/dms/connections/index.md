--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - dms
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connections"
    values={[
        { label: 'describe_connections', value: 'describe_connections' }
    ]}
>
<TabItem value="describe_connections">

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
    <td><CopyableCode code="EndpointArn" /></td>
    <td><code>string</code></td>
    <td>The ARN string that uniquely identifies the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the endpoint. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="LastFailureMessage" /></td>
    <td><code>string</code></td>
    <td>The error message when the connection last failed.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The replication instance identifier. This parameter is stored as a lowercase string.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The connection status. This parameter can return one of the following values: "successful" "testing" "failed" "deleting"</td>
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
    <td><a href="#describe_connections"><CopyableCode code="describe_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the connection between a replication instance and an endpoint.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_connections"
    values={[
        { label: 'describe_connections', value: 'describe_connections' }
    ]}
>
<TabItem value="describe_connections">

Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.

```sql
SELECT
EndpointArn,
EndpointIdentifier,
LastFailureMessage,
ReplicationInstanceArn,
ReplicationInstanceIdentifier,
Status
FROM aws.dms.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Deletes the connection between a replication instance and an endpoint.

```sql
DELETE FROM aws.dms.connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
