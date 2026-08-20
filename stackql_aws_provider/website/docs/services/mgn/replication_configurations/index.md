--- 
title: replication_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configurations
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

Creates, updates, deletes, gets or lists a <code>replication_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.replication_configurations" /></td></tr>
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
    <td>Replication Configuration name.</td>
</tr>
<tr>
    <td><CopyableCode code="associate_default_security_group" /></td>
    <td><code>boolean</code></td>
    <td>Replication Configuration associate default Application Migration Service Security Group.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth_throttling" /></td>
    <td><code>integer (int64)</code></td>
    <td>Replication Configuration set bandwidth throttling.</td>
</tr>
<tr>
    <td><CopyableCode code="create_public_ip" /></td>
    <td><code>boolean</code></td>
    <td>Replication Configuration create Public IP.</td>
</tr>
<tr>
    <td><CopyableCode code="data_plane_routing" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration data plane routing. (PRIVATE_IP, PUBLIC_IP)</td>
</tr>
<tr>
    <td><CopyableCode code="default_large_staging_disk_type" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration use default large Staging Disks. (GP2, ST1, GP3)</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_encryption" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration EBS encryption. (DEFAULT, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration EBS encryption key ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="internet_protocol" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration internet protocol. (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="replicated_disks" /></td>
    <td><code>array</code></td>
    <td>Replication Configuration replicated disks.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_server_instance_type" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration Replication Server instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_servers_security_groups_ids" /></td>
    <td><code>array</code></td>
    <td>Replication Configuration Replication Server Security Group IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="source_server_id" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration Source Server ID. (pattern: &lt;code&gt;s-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="staging_area_subnet_id" /></td>
    <td><code>string</code></td>
    <td>Replication Configuration Staging Area subnet ID. (pattern: &lt;code&gt;subnet-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="staging_area_tags" /></td>
    <td><code>object</code></td>
    <td>Replication Configuration Staging Area tags.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_configuration" /></td>
    <td><code>object</code></td>
    <td>Storage configuration for replication.</td>
</tr>
<tr>
    <td><CopyableCode code="store_snapshot_on_local_zone" /></td>
    <td><code>boolean</code></td>
    <td>Replication Configuration store snapshot on local zone.</td>
</tr>
<tr>
    <td><CopyableCode code="use_dedicated_replication_server" /></td>
    <td><code>boolean</code></td>
    <td>Replication Configuration use Dedicated Replication Server.</td>
</tr>
<tr>
    <td><CopyableCode code="use_fips_endpoint" /></td>
    <td><code>boolean</code></td>
    <td>Replication Configuration use Fips Endpoint.</td>
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
    <td>Lists all ReplicationConfigurations, filtered by Source Server ID.</td>
</tr>
<tr>
    <td><a href="#update_replication_configuration"><CopyableCode code="update_replication_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Allows you to update multiple ReplicationConfigurations by Source Server ID.</td>
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

Lists all ReplicationConfigurations, filtered by Source Server ID.

```sql
SELECT
name,
associate_default_security_group,
bandwidth_throttling,
create_public_ip,
data_plane_routing,
default_large_staging_disk_type,
ebs_encryption,
ebs_encryption_key_arn,
internet_protocol,
replicated_disks,
replication_server_instance_type,
replication_servers_security_groups_ids,
source_server_id,
staging_area_subnet_id,
staging_area_tags,
storage_configuration,
store_snapshot_on_local_zone,
use_dedicated_replication_server,
use_fips_endpoint
FROM aws.mgn.replication_configurations
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

Allows you to update multiple ReplicationConfigurations by Source Server ID.

```sql
UPDATE aws.mgn.replication_configurations
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
useFipsEndpoint = {{ useFipsEndpoint }},
accountID = '{{ accountID }}',
internetProtocol = '{{ internetProtocol }}',
storeSnapshotOnLocalZone = {{ storeSnapshotOnLocalZone }},
storageConfiguration = '{{ storageConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND sourceServerID = '{{ sourceServerID }}' --required
RETURNING
name,
associate_default_security_group,
bandwidth_throttling,
create_public_ip,
data_plane_routing,
default_large_staging_disk_type,
ebs_encryption,
ebs_encryption_key_arn,
internet_protocol,
replicated_disks,
replication_server_instance_type,
replication_servers_security_groups_ids,
source_server_id,
staging_area_subnet_id,
staging_area_tags,
storage_configuration,
store_snapshot_on_local_zone,
use_dedicated_replication_server,
use_fips_endpoint;
```
</TabItem>
</Tabs>
