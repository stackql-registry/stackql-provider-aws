--- 
title: source_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - source_servers
  - mgn
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

Creates, updates, deletes, gets or lists a <code>source_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.source_servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_source_servers"
    values={[
        { label: 'describe_source_servers', value: 'describe_source_servers' }
    ]}
>
<TabItem value="describe_source_servers">

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
    <td><CopyableCode code="applicationID" /></td>
    <td><code>string</code></td>
    <td>Source server application ID. (pattern: &lt;code&gt;app-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Source server ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorAction" /></td>
    <td><code>object</code></td>
    <td>Source Server connector action.</td>
</tr>
<tr>
    <td><CopyableCode code="dataReplicationInfo" /></td>
    <td><code>object</code></td>
    <td>Source server data replication info.</td>
</tr>
<tr>
    <td><CopyableCode code="fqdnForActionFramework" /></td>
    <td><code>string</code></td>
    <td>Source server fqdn for action framework.</td>
</tr>
<tr>
    <td><CopyableCode code="isArchived" /></td>
    <td><code>boolean</code></td>
    <td>Source server archived status.</td>
</tr>
<tr>
    <td><CopyableCode code="launchedInstance" /></td>
    <td><code>object</code></td>
    <td>Source server launched instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifeCycle" /></td>
    <td><code>object</code></td>
    <td>Source server lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationType" /></td>
    <td><code>string</code></td>
    <td>Source server replication type. (AGENT_BASED, SNAPSHOT_SHIPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceProperties" /></td>
    <td><code>object</code></td>
    <td>Source server properties.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceServerID" /></td>
    <td><code>string</code></td>
    <td>Source server ID. (pattern: &lt;code&gt;s-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Source server Tags.</td>
</tr>
<tr>
    <td><CopyableCode code="userProvidedID" /></td>
    <td><code>string</code></td>
    <td>Source server user provided ID. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenterClientID" /></td>
    <td><code>string</code></td>
    <td>Source server vCenter client id. (pattern: &lt;code&gt;vcc-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_source_servers"><CopyableCode code="describe_source_servers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all SourceServers or multiple SourceServers by ID.</td>
</tr>
<tr>
    <td><a href="#associate_source_servers"><CopyableCode code="associate_source_servers" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationID"><code>applicationID</code></a>, <a href="#parameter-sourceServerIDs"><code>sourceServerIDs</code></a></td>
    <td></td>
    <td>Associate source servers to application.</td>
</tr>
<tr>
    <td><a href="#update_source_server_replication_type"><CopyableCode code="update_source_server_replication_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a>, <a href="#parameter-replicationType"><code>replicationType</code></a></td>
    <td></td>
    <td>Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type. SNAPSHOT_SHIPPING should be used for agentless replication.</td>
</tr>
<tr>
    <td><a href="#update_source_server"><CopyableCode code="update_source_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Update Source Server.</td>
</tr>
<tr>
    <td><a href="#delete_source_server"><CopyableCode code="delete_source_server" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single source server by ID.</td>
</tr>
<tr>
    <td><a href="#change_server_life_cycle_state"><CopyableCode code="change_server_life_cycle_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a>, <a href="#parameter-lifeCycle"><code>lifeCycle</code></a></td>
    <td></td>
    <td>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</td>
</tr>
<tr>
    <td><a href="#disassociate_source_servers"><CopyableCode code="disassociate_source_servers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationID"><code>applicationID</code></a>, <a href="#parameter-sourceServerIDs"><code>sourceServerIDs</code></a></td>
    <td></td>
    <td>Disassociate source servers from application.</td>
</tr>
<tr>
    <td><a href="#disconnect_from_service"><CopyableCode code="disconnect_from_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</td>
</tr>
<tr>
    <td><a href="#finalize_cutover"><CopyableCode code="finalize_cutover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</td>
</tr>
<tr>
    <td><a href="#mark_as_archived"><CopyableCode code="mark_as_archived" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.</td>
</tr>
<tr>
    <td><a href="#pause_replication"><CopyableCode code="pause_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Pause Replication.</td>
</tr>
<tr>
    <td><a href="#resume_replication"><CopyableCode code="resume_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Resume Replication.</td>
</tr>
<tr>
    <td><a href="#retry_data_replication"><CopyableCode code="retry_data_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.</td>
</tr>
<tr>
    <td><a href="#start_replication"><CopyableCode code="start_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Start replication for source server irrespective of its replication type.</td>
</tr>
<tr>
    <td><a href="#stop_replication"><CopyableCode code="stop_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Stop Replication.</td>
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
    defaultValue="describe_source_servers"
    values={[
        { label: 'describe_source_servers', value: 'describe_source_servers' }
    ]}
>
<TabItem value="describe_source_servers">

Retrieves all SourceServers or multiple SourceServers by ID.

```sql
SELECT
applicationID,
arn,
connectorAction,
dataReplicationInfo,
fqdnForActionFramework,
isArchived,
launchedInstance,
lifeCycle,
replicationType,
sourceProperties,
sourceServerID,
tags,
userProvidedID,
vcenterClientID
FROM aws.mgn.source_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_source_servers"
    values={[
        { label: 'associate_source_servers', value: 'associate_source_servers' },
        { label: 'update_source_server_replication_type', value: 'update_source_server_replication_type' },
        { label: 'update_source_server', value: 'update_source_server' }
    ]}
>
<TabItem value="associate_source_servers">

Associate source servers to application.

```sql
UPDATE aws.mgn.source_servers
SET 
applicationID = '{{ applicationID }}',
sourceServerIDs = '{{ sourceServerIDs }}',
accountID = '{{ accountID }}'
WHERE 
region = '{{ region }}' --required
AND applicationID = '{{ applicationID }}' --required
AND sourceServerIDs = '{{ sourceServerIDs }}' --required;
```
</TabItem>
<TabItem value="update_source_server_replication_type">

Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type. SNAPSHOT_SHIPPING should be used for agentless replication.

```sql
UPDATE aws.mgn.source_servers
SET 
sourceServerID = '{{ sourceServerID }}',
replicationType = '{{ replicationType }}',
accountID = '{{ accountID }}'
WHERE 
region = '{{ region }}' --required
AND sourceServerID = '{{ sourceServerID }}' --required
AND replicationType = '{{ replicationType }}' --required
RETURNING
applicationID,
arn,
connectorAction,
dataReplicationInfo,
fqdnForActionFramework,
isArchived,
launchedInstance,
lifeCycle,
replicationType,
sourceProperties,
sourceServerID,
tags,
userProvidedID,
vcenterClientID;
```
</TabItem>
<TabItem value="update_source_server">

Update Source Server.

```sql
UPDATE aws.mgn.source_servers
SET 
accountID = '{{ accountID }}',
sourceServerID = '{{ sourceServerID }}',
connectorAction = '{{ connectorAction }}'
WHERE 
region = '{{ region }}' --required
AND sourceServerID = '{{ sourceServerID }}' --required
RETURNING
applicationID,
arn,
connectorAction,
dataReplicationInfo,
fqdnForActionFramework,
isArchived,
launchedInstance,
lifeCycle,
replicationType,
sourceProperties,
sourceServerID,
tags,
userProvidedID,
vcenterClientID;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_source_server"
    values={[
        { label: 'delete_source_server', value: 'delete_source_server' }
    ]}
>
<TabItem value="delete_source_server">

Deletes a single source server by ID.

```sql
DELETE FROM aws.mgn.source_servers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_server_life_cycle_state"
    values={[
        { label: 'change_server_life_cycle_state', value: 'change_server_life_cycle_state' },
        { label: 'disassociate_source_servers', value: 'disassociate_source_servers' },
        { label: 'disconnect_from_service', value: 'disconnect_from_service' },
        { label: 'finalize_cutover', value: 'finalize_cutover' },
        { label: 'mark_as_archived', value: 'mark_as_archived' },
        { label: 'pause_replication', value: 'pause_replication' },
        { label: 'resume_replication', value: 'resume_replication' },
        { label: 'retry_data_replication', value: 'retry_data_replication' },
        { label: 'start_replication', value: 'start_replication' },
        { label: 'stop_replication', value: 'stop_replication' }
    ]}
>
<TabItem value="change_server_life_cycle_state">

Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)

```sql
EXEC aws.mgn.source_servers.change_server_life_cycle_state 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"lifeCycle": "{{ lifeCycle }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_source_servers">

Disassociate source servers from application.

```sql
EXEC aws.mgn.source_servers.disassociate_source_servers 
@region='{{ region }}' --required 
@@json=
'{
"applicationID": "{{ applicationID }}", 
"sourceServerIDs": "{{ sourceServerIDs }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="disconnect_from_service">

Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

```sql
EXEC aws.mgn.source_servers.disconnect_from_service 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="finalize_cutover">

Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

```sql
EXEC aws.mgn.source_servers.finalize_cutover 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="mark_as_archived">

Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.

```sql
EXEC aws.mgn.source_servers.mark_as_archived 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="pause_replication">

Pause Replication.

```sql
EXEC aws.mgn.source_servers.pause_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="resume_replication">

Resume Replication.

```sql
EXEC aws.mgn.source_servers.resume_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="retry_data_replication">

Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.

```sql
EXEC aws.mgn.source_servers.retry_data_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="start_replication">

Start replication for source server irrespective of its replication type.

```sql
EXEC aws.mgn.source_servers.start_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="stop_replication">

Stop Replication.

```sql
EXEC aws.mgn.source_servers.stop_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
</Tabs>
