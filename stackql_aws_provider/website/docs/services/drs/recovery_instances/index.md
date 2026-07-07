--- 
title: recovery_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_instances
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

Creates, updates, deletes, gets or lists a <code>recovery_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.recovery_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_recovery_instances"
    values={[
        { label: 'describe_recovery_instances', value: 'describe_recovery_instances' }
    ]}
>
<TabItem value="describe_recovery_instances">

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
    <td>The version of the DRS agent installed on the recovery instance (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,5&#125;.&#91;0-9&#93;&#123;1,5&#125;.&#91;0-9&#93;&#123;1,5&#125;(.&#91;0-9&#93;&#123;4&#125;.&#91;0-9&#93;&#123;3&#125;.&#91;0-9&#93;&#123;4&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Recovery Instance. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataReplicationInfo" /></td>
    <td><code>object</code></td>
    <td>The Data Replication Info of the Recovery Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2InstanceID" /></td>
    <td><code>string</code></td>
    <td>The EC2 instance ID of the Recovery Instance. (pattern: &lt;code&gt;i-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ec2InstanceState" /></td>
    <td><code>string</code></td>
    <td>The state of the EC2 instance for this Recovery Instance. (PENDING, RUNNING, STOPPING, STOPPED, SHUTTING-DOWN, TERMINATED, NOT_FOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="failback" /></td>
    <td><code>object</code></td>
    <td>An object representing failback related information of the Recovery Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="isDrill" /></td>
    <td><code>boolean</code></td>
    <td>Whether this Recovery Instance was created for a drill or for an actual Recovery event.</td>
</tr>
<tr>
    <td><CopyableCode code="jobID" /></td>
    <td><code>string</code></td>
    <td>The ID of the Job that created the Recovery Instance. (pattern: &lt;code&gt;drsjob-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="originAvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>AWS availability zone associated with the recovery instance. (pattern: &lt;code&gt;(us(-gov)?|ap|ca|cn|eu|eusc|sa|af|me|il)-(&#91;a-z&#93;&#123;2&#125;-)?(central|north|(north(?:east|west))|south|south(?:east|west)|east|west)-&#91;0-9&#93;&#91;a-z&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="originEnvironment" /></td>
    <td><code>string</code></td>
    <td>Environment (On Premises / AWS) of the instance that the recovery instance originated from. (ON_PREMISES, AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="pointInTimeSnapshotDateTime" /></td>
    <td><code>string</code></td>
    <td>The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryInstanceID" /></td>
    <td><code>string</code></td>
    <td>The ID of the Recovery Instance. (pattern: &lt;code&gt;i-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryInstanceProperties" /></td>
    <td><code>object</code></td>
    <td>Properties of the Recovery Instance machine.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceOutpostArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source Outpost (pattern: &lt;code&gt;arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceServerID" /></td>
    <td><code>string</code></td>
    <td>The Source Server ID that this Recovery Instance is associated with. (pattern: &lt;code&gt;s-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>An array of tags that are associated with the Recovery Instance.</td>
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
    <td><a href="#describe_recovery_instances"><CopyableCode code="describe_recovery_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Recovery Instances or multiple Recovery Instances by ID.</td>
</tr>
<tr>
    <td><a href="#delete_recovery_instance"><CopyableCode code="delete_recovery_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.</td>
</tr>
<tr>
    <td><a href="#terminate_recovery_instances"><CopyableCode code="terminate_recovery_instances" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.</td>
</tr>
<tr>
    <td><a href="#disconnect_recovery_instance"><CopyableCode code="disconnect_recovery_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryInstanceID"><code>recoveryInstanceID</code></a></td>
    <td></td>
    <td>Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</td>
</tr>
<tr>
    <td><a href="#reverse_replication"><CopyableCode code="reverse_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryInstanceID"><code>recoveryInstanceID</code></a></td>
    <td></td>
    <td>Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them.</td>
</tr>
<tr>
    <td><a href="#stop_failback"><CopyableCode code="stop_failback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryInstanceID"><code>recoveryInstanceID</code></a></td>
    <td></td>
    <td>Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.</td>
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
    defaultValue="describe_recovery_instances"
    values={[
        { label: 'describe_recovery_instances', value: 'describe_recovery_instances' }
    ]}
>
<TabItem value="describe_recovery_instances">

Lists all Recovery Instances or multiple Recovery Instances by ID.

```sql
SELECT
agentVersion,
arn,
dataReplicationInfo,
ec2InstanceID,
ec2InstanceState,
failback,
isDrill,
jobID,
originAvailabilityZone,
originEnvironment,
pointInTimeSnapshotDateTime,
recoveryInstanceID,
recoveryInstanceProperties,
sourceOutpostArn,
sourceServerID,
tags
FROM aws.drs.recovery_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recovery_instance"
    values={[
        { label: 'delete_recovery_instance', value: 'delete_recovery_instance' },
        { label: 'terminate_recovery_instances', value: 'terminate_recovery_instances' }
    ]}
>
<TabItem value="delete_recovery_instance">

Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.

```sql
DELETE FROM aws.drs.recovery_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="terminate_recovery_instances">

Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.

```sql
DELETE FROM aws.drs.recovery_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disconnect_recovery_instance"
    values={[
        { label: 'disconnect_recovery_instance', value: 'disconnect_recovery_instance' },
        { label: 'reverse_replication', value: 'reverse_replication' },
        { label: 'stop_failback', value: 'stop_failback' }
    ]}
>
<TabItem value="disconnect_recovery_instance">

Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

```sql
EXEC aws.drs.recovery_instances.disconnect_recovery_instance 
@region='{{ region }}' --required 
@@json=
'{
"recoveryInstanceID": "{{ recoveryInstanceID }}"
}'
;
```
</TabItem>
<TabItem value="reverse_replication">

Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them.

```sql
EXEC aws.drs.recovery_instances.reverse_replication 
@region='{{ region }}' --required 
@@json=
'{
"recoveryInstanceID": "{{ recoveryInstanceID }}"
}'
;
```
</TabItem>
<TabItem value="stop_failback">

Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.

```sql
EXEC aws.drs.recovery_instances.stop_failback 
@region='{{ region }}' --required 
@@json=
'{
"recoveryInstanceID": "{{ recoveryInstanceID }}"
}'
;
```
</TabItem>
</Tabs>
