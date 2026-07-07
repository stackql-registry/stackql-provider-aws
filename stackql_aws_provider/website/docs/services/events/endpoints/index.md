--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - events
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint"
    values={[
        { label: 'describe_endpoint', value: 'describe_endpoint' }
    ]}
>
<TabItem value="describe_endpoint">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the endpoint you asked for information about. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:endpoint\/&#91;/\.\-_A-Za-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the endpoint you asked for information about was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the endpoint you asked for information about. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint you asked for information about. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+&#91;\.&#93;&#91;A-Za-z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the endpoint you asked for information about. (pattern: &lt;code&gt;^(https:​//)?&#91;\.\-a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventBuses" /></td>
    <td><code>array</code></td>
    <td>The event buses being used by the endpoint you asked for information about.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the endpoint you asked for information about was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint you asked for information about. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationConfig" /></td>
    <td><code>object</code></td>
    <td>Whether replication is enabled or disabled for the endpoint you asked for information about.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role used by the endpoint you asked for information about. (pattern: &lt;code&gt;^arn:aws&#91;a-z-&#93;*:iam::\d&#123;12&#125;:role\/&#91;\w+=,.@/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingConfig" /></td>
    <td><code>object</code></td>
    <td>The routing configuration of the endpoint you asked for information about.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the endpoint you asked for information about. (ACTIVE, CREATING, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason the endpoint you asked for information about is in its current state. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_endpoint"><CopyableCode code="describe_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the information about an existing global endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .</td>
</tr>
<tr>
    <td><a href="#create_endpoint"><CopyableCode code="create_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoutingConfig"><code>RoutingConfig</code></a>, <a href="#parameter-EventBuses"><code>EventBuses</code></a></td>
    <td></td>
    <td>Creates a global endpoint. Global endpoints improve your application's availability by making it regional-fault tolerant. To do this, you define a primary and secondary Region with event buses in each Region. You also create a Amazon Route 53 health check that will tell EventBridge to route events to the secondary Region when an "unhealthy" state is encountered and events will be routed back to the primary Region when the health check reports a "healthy" state.</td>
</tr>
<tr>
    <td><a href="#update_endpoint"><CopyableCode code="update_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .</td>
</tr>
<tr>
    <td><a href="#delete_endpoint"><CopyableCode code="delete_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing global endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .</td>
</tr>
<tr>
    <td><a href="#list_endpoints"><CopyableCode code="list_endpoints" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the global endpoints associated with this account. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .</td>
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
    defaultValue="describe_endpoint"
    values={[
        { label: 'describe_endpoint', value: 'describe_endpoint' }
    ]}
>
<TabItem value="describe_endpoint">

Get the information about an existing global endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .

```sql
SELECT
Arn,
CreationTime,
Description,
EndpointId,
EndpointUrl,
EventBuses,
LastModifiedTime,
Name,
ReplicationConfig,
RoleArn,
RoutingConfig,
State,
StateReason
FROM aws.events.endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint"
    values={[
        { label: 'create_endpoint', value: 'create_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint">

Creates a global endpoint. Global endpoints improve your application's availability by making it regional-fault tolerant. To do this, you define a primary and secondary Region with event buses in each Region. You also create a Amazon Route 53 health check that will tell EventBridge to route events to the secondary Region when an "unhealthy" state is encountered and events will be routed back to the primary Region when the health check reports a "healthy" state.

```sql
INSERT INTO aws.events.endpoints (
Name,
Description,
RoutingConfig,
ReplicationConfig,
EventBuses,
RoleArn,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ RoutingConfig }}' /* required */,
'{{ ReplicationConfig }}',
'{{ EventBuses }}' /* required */,
'{{ RoleArn }}',
'{{ region }}'
RETURNING
Arn,
EventBuses,
Name,
ReplicationConfig,
RoleArn,
RoutingConfig,
State
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the endpoints resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the global endpoint. For example, "Name":"us-east-2-custom_bus_A-endpoint".
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the global endpoint.
    - name: RoutingConfig
      description: |
        Configure the routing policy, including the health check and secondary Region..
      value:
        FailoverConfig:
          Primary:
            HealthCheck: "{{ HealthCheck }}"
          Secondary:
            Route: "{{ Route }}"
    - name: ReplicationConfig
      description: |
        Enable or disable event replication. The default state is ENABLED which means you must supply a RoleArn. If you don't have a RoleArn or you don't want event replication enabled, set the state to DISABLED.
      value:
        State: "{{ State }}"
    - name: EventBuses
      description: |
        Define the event buses used. The names of the event buses must be identical in each Region.
      value:
        - EventBusArn: "{{ EventBusArn }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The ARN of the role used for replication.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_endpoint"
    values={[
        { label: 'update_endpoint', value: 'update_endpoint' }
    ]}
>
<TabItem value="update_endpoint">

Update an existing endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .

```sql
UPDATE aws.events.endpoints
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
RoutingConfig = '{{ RoutingConfig }}',
ReplicationConfig = '{{ ReplicationConfig }}',
EventBuses = '{{ EventBuses }}',
RoleArn = '{{ RoleArn }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Arn,
EndpointId,
EndpointUrl,
EventBuses,
Name,
ReplicationConfig,
RoleArn,
RoutingConfig,
State;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint"
    values={[
        { label: 'delete_endpoint', value: 'delete_endpoint' }
    ]}
>
<TabItem value="delete_endpoint">

Delete an existing global endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .

```sql
DELETE FROM aws.events.endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_endpoints"
    values={[
        { label: 'list_endpoints', value: 'list_endpoints' }
    ]}
>
<TabItem value="list_endpoints">

List the global endpoints associated with this account. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the Amazon EventBridge User Guide .

```sql
EXEC aws.events.endpoints.list_endpoints 
@region='{{ region }}' --required 
@@json=
'{
"NamePrefix": "{{ NamePrefix }}", 
"HomeRegion": "{{ HomeRegion }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
