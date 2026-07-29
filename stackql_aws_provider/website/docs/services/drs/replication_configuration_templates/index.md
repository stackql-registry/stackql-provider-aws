--- 
title: replication_configuration_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configuration_templates
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

Creates, updates, deletes, gets or lists a <code>replication_configuration_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_configuration_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.replication_configuration_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_configuration_templates"
    values={[
        { label: 'describe_replication_configuration_templates', value: 'describe_replication_configuration_templates' }
    ]}
>
<TabItem value="describe_replication_configuration_templates">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Replication Configuration Template ARN. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associate_default_security_group" /></td>
    <td><code>boolean</code></td>
    <td>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</td>
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
    <td><CopyableCode code="replication_configuration_template_id" /></td>
    <td><code>string</code></td>
    <td>The Replication Configuration Template ID. (pattern: &lt;code&gt;rct-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of tags to be associated with the Replication Configuration Template resource.</td>
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
    <td><a href="#describe_replication_configuration_templates"><CopyableCode code="describe_replication_configuration_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</td>
</tr>
<tr>
    <td><a href="#create_replication_configuration_template"><CopyableCode code="create_replication_configuration_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stagingAreaSubnetId"><code>stagingAreaSubnetId</code></a>, <a href="#parameter-replicationServersSecurityGroupsIDs"><code>replicationServersSecurityGroupsIDs</code></a>, <a href="#parameter-ebsEncryption"><code>ebsEncryption</code></a>, <a href="#parameter-bandwidthThrottling"><code>bandwidthThrottling</code></a>, <a href="#parameter-stagingAreaTags"><code>stagingAreaTags</code></a>, <a href="#parameter-pitPolicy"><code>pitPolicy</code></a></td>
    <td></td>
    <td>Creates a new ReplicationConfigurationTemplate.</td>
</tr>
<tr>
    <td><a href="#update_replication_configuration_template"><CopyableCode code="update_replication_configuration_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-replicationConfigurationTemplateID"><code>replicationConfigurationTemplateID</code></a></td>
    <td></td>
    <td>Updates a ReplicationConfigurationTemplate by ID.</td>
</tr>
<tr>
    <td><a href="#delete_replication_configuration_template"><CopyableCode code="delete_replication_configuration_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single Replication Configuration Template by ID</td>
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
    defaultValue="describe_replication_configuration_templates"
    values={[
        { label: 'describe_replication_configuration_templates', value: 'describe_replication_configuration_templates' }
    ]}
>
<TabItem value="describe_replication_configuration_templates">

Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.

```sql
SELECT
arn,
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
replication_configuration_template_id,
replication_server_instance_type,
replication_servers_security_groups_ids,
staging_area_subnet_id,
staging_area_tags,
tags,
use_dedicated_replication_server
FROM aws.drs.replication_configuration_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_configuration_template"
    values={[
        { label: 'create_replication_configuration_template', value: 'create_replication_configuration_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_configuration_template">

Creates a new ReplicationConfigurationTemplate.

```sql
INSERT INTO aws.drs.replication_configuration_templates (
stagingAreaSubnetId,
associateDefaultSecurityGroup,
replicationServersSecurityGroupsIDs,
replicationServerInstanceType,
useDedicatedReplicationServer,
defaultLargeStagingDiskType,
ebsEncryption,
ebsEncryptionKeyArn,
bandwidthThrottling,
dataPlaneRouting,
createPublicIP,
stagingAreaTags,
pitPolicy,
tags,
autoReplicateNewDisks,
internetProtocol,
region
)
SELECT 
'{{ stagingAreaSubnetId }}' /* required */,
{{ associateDefaultSecurityGroup }},
'{{ replicationServersSecurityGroupsIDs }}' /* required */,
'{{ replicationServerInstanceType }}',
{{ useDedicatedReplicationServer }},
'{{ defaultLargeStagingDiskType }}',
'{{ ebsEncryption }}' /* required */,
'{{ ebsEncryptionKeyArn }}',
{{ bandwidthThrottling }} /* required */,
'{{ dataPlaneRouting }}',
{{ createPublicIP }},
'{{ stagingAreaTags }}' /* required */,
'{{ pitPolicy }}' /* required */,
'{{ tags }}',
{{ autoReplicateNewDisks }},
'{{ internetProtocol }}',
'{{ region }}'
RETURNING
arn,
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
replication_configuration_template_id,
replication_server_instance_type,
replication_servers_security_groups_ids,
staging_area_subnet_id,
staging_area_tags,
tags,
use_dedicated_replication_server
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_configuration_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_configuration_templates resource.
    - name: stagingAreaSubnetId
      value: "{{ stagingAreaSubnetId }}"
    - name: associateDefaultSecurityGroup
      value: {{ associateDefaultSecurityGroup }}
    - name: replicationServersSecurityGroupsIDs
      value:
        - "{{ replicationServersSecurityGroupsIDs }}"
    - name: replicationServerInstanceType
      value: "{{ replicationServerInstanceType }}"
    - name: useDedicatedReplicationServer
      value: {{ useDedicatedReplicationServer }}
    - name: defaultLargeStagingDiskType
      value: "{{ defaultLargeStagingDiskType }}"
      valid_values: ['GP2', 'GP3', 'ST1', 'AUTO']
    - name: ebsEncryption
      value: "{{ ebsEncryption }}"
      valid_values: ['DEFAULT', 'CUSTOM', 'NONE']
    - name: ebsEncryptionKeyArn
      value: "{{ ebsEncryptionKeyArn }}"
    - name: bandwidthThrottling
      value: {{ bandwidthThrottling }}
    - name: dataPlaneRouting
      value: "{{ dataPlaneRouting }}"
      valid_values: ['PRIVATE_IP', 'PUBLIC_IP']
    - name: createPublicIP
      value: {{ createPublicIP }}
    - name: stagingAreaTags
      value: "{{ stagingAreaTags }}"
    - name: pitPolicy
      value:
        - ruleID: {{ ruleID }}
          units: "{{ units }}"
          interval: {{ interval }}
          retentionDuration: {{ retentionDuration }}
          enabled: {{ enabled }}
    - name: tags
      value: "{{ tags }}"
    - name: autoReplicateNewDisks
      value: {{ autoReplicateNewDisks }}
    - name: internetProtocol
      value: "{{ internetProtocol }}"
      valid_values: ['IPV4', 'IPV6']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_replication_configuration_template"
    values={[
        { label: 'update_replication_configuration_template', value: 'update_replication_configuration_template' }
    ]}
>
<TabItem value="update_replication_configuration_template">

Updates a ReplicationConfigurationTemplate by ID.

```sql
UPDATE aws.drs.replication_configuration_templates
SET 
replicationConfigurationTemplateID = '{{ replicationConfigurationTemplateID }}',
arn = '{{ arn }}',
stagingAreaSubnetId = '{{ stagingAreaSubnetId }}',
associateDefaultSecurityGroup = {{ associateDefaultSecurityGroup }},
replicationServersSecurityGroupsIDs = '{{ replicationServersSecurityGroupsIDs }}',
replicationServerInstanceType = '{{ replicationServerInstanceType }}',
useDedicatedReplicationServer = {{ useDedicatedReplicationServer }},
defaultLargeStagingDiskType = '{{ defaultLargeStagingDiskType }}',
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
AND replicationConfigurationTemplateID = '{{ replicationConfigurationTemplateID }}' --required
RETURNING
arn,
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
replication_configuration_template_id,
replication_server_instance_type,
replication_servers_security_groups_ids,
staging_area_subnet_id,
staging_area_tags,
tags,
use_dedicated_replication_server;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_configuration_template"
    values={[
        { label: 'delete_replication_configuration_template', value: 'delete_replication_configuration_template' }
    ]}
>
<TabItem value="delete_replication_configuration_template">

Deletes a single Replication Configuration Template by ID

```sql
DELETE FROM aws.drs.replication_configuration_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
