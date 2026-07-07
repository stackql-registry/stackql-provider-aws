--- 
title: source_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - source_servers
  - drs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.source_servers" /></td></tr>
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
    <td><CopyableCode code="agentVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the DRS agent installed on the source server (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,5&#125;.&#91;0-9&#93;&#123;1,5&#125;.&#91;0-9&#93;&#123;1,5&#125;(.&#91;0-9&#93;&#123;4&#125;.&#91;0-9&#93;&#123;3&#125;.&#91;0-9&#93;&#123;4&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Source Server. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataReplicationInfo" /></td>
    <td><code>object</code></td>
    <td>The Data Replication Info of the Source Server.</td>
</tr>
<tr>
    <td><CopyableCode code="lastLaunchResult" /></td>
    <td><code>string</code></td>
    <td>The status of the last recovery launch of this Source Server. (NOT_STARTED, PENDING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifeCycle" /></td>
    <td><code>object</code></td>
    <td>The lifecycle information of this Source Server.</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Recovery Instance associated with this Source Server. (pattern: &lt;code&gt;i-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replicationDirection" /></td>
    <td><code>string</code></td>
    <td>Replication direction of the Source Server. (FAILOVER, FAILBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="reversedDirectionSourceServerArn" /></td>
    <td><code>string</code></td>
    <td>For EC2-originated Source Servers which have been failed over and then failed back, this value will mean the ARN of the Source Server on the opposite replication direction. (pattern: &lt;code&gt;arn:(?:&#91;0-9a-zA-Z_-&#93;+:)&#123;3&#125;(&#91;0-9&#93;&#123;12,&#125;):source-server/(s-&#91;0-9a-zA-Z&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceCloudProperties" /></td>
    <td><code>object</code></td>
    <td>Source cloud properties of the Source Server.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceNetworkID" /></td>
    <td><code>string</code></td>
    <td>ID of the Source Network which is protecting this Source Server's network. (pattern: &lt;code&gt;sn-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceProperties" /></td>
    <td><code>object</code></td>
    <td>The source properties of the Source Server.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceServerID" /></td>
    <td><code>string</code></td>
    <td>The ID of the Source Server. (pattern: &lt;code&gt;s-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stagingArea" /></td>
    <td><code>object</code></td>
    <td>The staging area of the source server.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the Source Server.</td>
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
    <td>Lists all Source Servers or multiple Source Servers filtered by ID.</td>
</tr>
<tr>
    <td><a href="#create_extended_source_server"><CopyableCode code="create_extended_source_server" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerArn"><code>sourceServerArn</code></a></td>
    <td></td>
    <td>Create an extended source server in the target Account based on the source server in staging account.</td>
</tr>
<tr>
    <td><a href="#delete_source_server"><CopyableCode code="delete_source_server" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single Source Server by ID. The Source Server must be disconnected first.</td>
</tr>
<tr>
    <td><a href="#disconnect_source_server"><CopyableCode code="disconnect_source_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</td>
</tr>
<tr>
    <td><a href="#retry_data_replication"><CopyableCode code="retry_data_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.</td>
</tr>
<tr>
    <td><a href="#start_replication"><CopyableCode code="start_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.</td>
</tr>
<tr>
    <td><a href="#stop_replication"><CopyableCode code="stop_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.</td>
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

Lists all Source Servers or multiple Source Servers filtered by ID.

```sql
SELECT
agentVersion,
arn,
dataReplicationInfo,
lastLaunchResult,
lifeCycle,
recoveryInstanceId,
replicationDirection,
reversedDirectionSourceServerArn,
sourceCloudProperties,
sourceNetworkID,
sourceProperties,
sourceServerID,
stagingArea,
tags
FROM aws.drs.source_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_extended_source_server"
    values={[
        { label: 'create_extended_source_server', value: 'create_extended_source_server' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_extended_source_server">

Create an extended source server in the target Account based on the source server in staging account.

```sql
INSERT INTO aws.drs.source_servers (
sourceServerArn,
tags,
region
)
SELECT 
'{{ sourceServerArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
sourceServer
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: source_servers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the source_servers resource.
    - name: sourceServerArn
      value: "{{ sourceServerArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

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

Deletes a single Source Server by ID. The Source Server must be disconnected first.

```sql
DELETE FROM aws.drs.source_servers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disconnect_source_server"
    values={[
        { label: 'disconnect_source_server', value: 'disconnect_source_server' },
        { label: 'retry_data_replication', value: 'retry_data_replication' },
        { label: 'start_replication', value: 'start_replication' },
        { label: 'stop_replication', value: 'stop_replication' }
    ]}
>
<TabItem value="disconnect_source_server">

Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

```sql
EXEC aws.drs.source_servers.disconnect_source_server 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}"
}'
;
```
</TabItem>
<TabItem value="retry_data_replication">

WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.

```sql
EXEC aws.drs.source_servers.retry_data_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}"
}'
;
```
</TabItem>
<TabItem value="start_replication">

Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.

```sql
EXEC aws.drs.source_servers.start_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}"
}'
;
```
</TabItem>
<TabItem value="stop_replication">

Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.

```sql
EXEC aws.drs.source_servers.stop_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceServerID": "{{ sourceServerID }}"
}'
;
```
</TabItem>
</Tabs>
