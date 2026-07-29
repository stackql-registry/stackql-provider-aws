--- 
title: replication_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configurations
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

Creates, updates, deletes, gets or lists a <code>replication_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.replication_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_replication_configuration"
    values={[
        { label: 'get_replication_configuration', value: 'get_replication_configuration' }
    ]}
>
<TabItem value="get_replication_configuration">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Replication Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="associate_default_security_group" /></td>
    <td><code>boolean</code></td>
    <td>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_replicate_new_disks" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow the AWS replication agent to automatically replicate newly added disks.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth_throttling" /></td>
    <td><code>integer (int64)</code></td>
    <td>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</td>
</tr>
<tr>
    <td><CopyableCode code="create_public_ip" /></td>
    <td><code>boolean</code></td>
    <td>Whether to create a Public IP for the Recovery Instance by default.</td>
</tr>
<tr>
    <td><CopyableCode code="data_plane_routing" /></td>
    <td><code>string</code></td>
    <td>The data plane routing mechanism that will be used for replication. (PRIVATE_IP, PUBLIC_IP)</td>
</tr>
<tr>
    <td><CopyableCode code="default_large_staging_disk_type" /></td>
    <td><code>string</code></td>
    <td>The Staging Disk EBS volume type to be used during replication. (GP2, GP3, ST1, AUTO)</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_encryption" /></td>
    <td><code>string</code></td>
    <td>The type of EBS encryption to be used during replication. (DEFAULT, CUSTOM, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the EBS encryption key to be used during replication. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="internet_protocol" /></td>
    <td><code>string</code></td>
    <td>Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6) (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="pit_policy" /></td>
    <td><code>array</code></td>
    <td>The Point in time (PIT) policy to manage snapshots taken during replication.</td>
</tr>
<tr>
    <td><CopyableCode code="replicated_disks" /></td>
    <td><code>array</code></td>
    <td>The configuration of the disks of the Source Server to be replicated.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_server_instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type to be used for the replication server.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_servers_security_groups_ids" /></td>
    <td><code>array</code></td>
    <td>The security group IDs that will be used by the replication server.</td>
</tr>
<tr>
    <td><CopyableCode code="source_server_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Source Server for this Replication Configuration. (pattern: &lt;code&gt;s-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="staging_area_subnet_id" /></td>
    <td><code>string</code></td>
    <td>The subnet to be used by the replication staging area. (pattern: &lt;code&gt;subnet-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="staging_area_tags" /></td>
    <td><code>object</code></td>
    <td>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="use_dedicated_replication_server" /></td>
    <td><code>boolean</code></td>
    <td>Whether to use a dedicated Replication Server in the replication staging area.</td>
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
    <td><a href="#get_replication_configuration"><CopyableCode code="get_replication_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a ReplicationConfiguration, filtered by Source Server ID.</td>
</tr>
<tr>
    <td><a href="#update_replication_configuration"><CopyableCode code="update_replication_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Allows you to update a ReplicationConfiguration by Source Server ID.</td>
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
    defaultValue="get_replication_configuration"
    values={[
        { label: 'get_replication_configuration', value: 'get_replication_configuration' }
    ]}
>
<TabItem value="get_replication_configuration">

Gets a ReplicationConfiguration, filtered by Source Server ID.

```sql
SELECT
name,
associate_default_security_group,
auto_replicate_new_disks,
bandwidth_throttling,
create_public_ip,
data_plane_routing,
default_large_staging_disk_type,
ebs_encryption,
ebs_encryption_key_arn,
internet_protocol,
pit_policy,
replicated_disks,
replication_server_instance_type,
replication_servers_security_groups_ids,
source_server_id,
staging_area_subnet_id,
staging_area_tags,
use_dedicated_replication_server
FROM aws.drs.replication_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_replication_configuration"
    values={[
        { label: 'update_replication_configuration', value: 'update_replication_configuration' }
    ]}
>
<TabItem value="update_replication_configuration">

Allows you to update a ReplicationConfiguration by Source Server ID.

```sql
UPDATE aws.drs.replication_configurations
SET 
sourceServerID = '{{ sourceServerID }}',
name = '{{ name }}',
stagingAreaSubnetId = '{{ stagingAreaSubnetId }}',
associateDefaultSecurityGroup = {{ associateDefaultSecurityGroup }},
replicationServersSecurityGroupsIDs = '{{ replicationServersSecurityGroupsIDs }}',
replicationServerInstanceType = '{{ replicationServerInstanceType }}',
useDedicatedReplicationServer = {{ useDedicatedReplicationServer }},
defaultLargeStagingDiskType = '{{ defaultLargeStagingDiskType }}',
replicatedDisks = '{{ replicatedDisks }}',
ebsEncryption = '{{ ebsEncryption }}',
ebsEncryptionKeyArn = '{{ ebsEncryptionKeyArn }}',
bandwidthThrottling = {{ bandwidthThrottling }},
dataPlaneRouting = '{{ dataPlaneRouting }}',
createPublicIP = {{ createPublicIP }},
stagingAreaTags = '{{ stagingAreaTags }}',
pitPolicy = '{{ pitPolicy }}',
autoReplicateNewDisks = {{ autoReplicateNewDisks }},
internetProtocol = '{{ internetProtocol }}'
WHERE 
region = '{{ region }}' --required
AND sourceServerID = '{{ sourceServerID }}' --required
RETURNING
name,
associate_default_security_group,
auto_replicate_new_disks,
bandwidth_throttling,
create_public_ip,
data_plane_routing,
default_large_staging_disk_type,
ebs_encryption,
ebs_encryption_key_arn,
internet_protocol,
pit_policy,
replicated_disks,
replication_server_instance_type,
replication_servers_security_groups_ids,
source_server_id,
staging_area_subnet_id,
staging_area_tags,
use_dedicated_replication_server;
```
</TabItem>
</Tabs>
