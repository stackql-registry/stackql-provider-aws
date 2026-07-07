--- 
title: replication_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configurations
  - efs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.replication_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_configurations"
    values={[
        { label: 'describe_replication_configurations', value: 'describe_replication_configurations' }
    ]}
>
<TabItem value="describe_replication_configurations">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Describes when the replication configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Destinations" /></td>
    <td><code>array</code></td>
    <td>An array of destination objects. Only one destination object is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginalSourceFileSystemArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the original source EFS file system in the replication configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceFileSystemArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the current source file system in the replication configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceFileSystemId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source Amazon EFS file system that is being replicated. (pattern: &lt;code&gt;^(arn:aws&#91;-a-z&#93;*:elasticfilesystem:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;8,40&#125;|fs-&#91;0-9a-f&#93;&#123;8,40&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceFileSystemOwnerId" /></td>
    <td><code>string</code></td>
    <td>ID of the Amazon Web Services account in which the source file system resides. (pattern: &lt;code&gt;^(\d&#123;12&#125;)|(\d&#123;4&#125;-\d&#123;4&#125;-\d&#123;4&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceFileSystemRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region in which the source EFS file system is located. (pattern: &lt;code&gt;^&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#123;0,1&#125;&#91;0-9&#93;&#123;0,1&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_replication_configurations"><CopyableCode code="describe_replication_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FileSystemId"><code>FileSystemId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves the replication configuration for a specific file system. If a file system is not specified, all of the replication configurations for the Amazon Web Services account in an Amazon Web Services Region are retrieved.</td>
</tr>
<tr>
    <td><a href="#create_replication_configuration"><CopyableCode code="create_replication_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-source_file_system_id"><code>source_file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a replication conﬁguration to either a new or existing EFS file system. For more information, see Amazon EFS replication in the Amazon EFS User Guide. The replication configuration specifies the following: Source file system – The EFS file system that you want to replicate. Destination file system – The destination file system to which the source file system is replicated. There can only be one destination file system in a replication configuration. A file system can be part of only one replication configuration. The destination parameters for the replication configuration depend on whether you are replicating to a new file system or to an existing file system, and if you are replicating across Amazon Web Services accounts. See DestinationToCreate for more information. This operation requires permissions for the elasticfilesystem:CreateReplicationConfiguration action. Additionally, other permissions are required depending on how you are replicating file systems. For more information, see Required permissions for replication in the Amazon EFS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_replication_configuration"><CopyableCode code="delete_replication_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-source_file_system_id"><code>source_file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deletionMode"><code>deletionMode</code></a></td>
    <td>Deletes a replication configuration. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system becomes Writeable and its replication overwrite protection is re-enabled. For more information, see Delete a replication configuration. This operation requires permissions for the elasticfilesystem:DeleteReplicationConfiguration action.</td>
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
<tr id="parameter-source_file_system_id">
    <td><CopyableCode code="source_file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the source file system in the replication configuration.</td>
</tr>
<tr id="parameter-FileSystemId">
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>You can retrieve the replication configuration for a specific file system by providing its file system ID. For cross-account,cross-region replication, an account can only describe the replication configuration for a file system in its own Region.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>(Optional) To limit the number of objects returned in a response, you can specify the MaxItems parameter. The default value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>NextToken is present if the response is paginated. You can use NextToken in a subsequent request to fetch the next page of output.</td>
</tr>
<tr id="parameter-deletionMode">
    <td><CopyableCode code="deletionMode" /></td>
    <td><code>string</code></td>
    <td>When replicating across Amazon Web Services accounts or across Amazon Web Services Regions, Amazon EFS deletes the replication configuration from both the source and destination account or Region (ALL_CONFIGURATIONS) by default. If there's a configuration or permissions issue that prevents Amazon EFS from deleting the replication configuration from both sides, you can use the LOCAL_CONFIGURATION_ONLY mode to delete the replication configuration from only the local side (the account or Region from which the delete is performed). Only use the LOCAL_CONFIGURATION_ONLY mode in the case that Amazon EFS is unable to delete the replication configuration in both the source and destination account or Region. Deleting the local configuration leaves the configuration in the other account or Region unrecoverable. Additionally, do not use this mode for same-account, same-region replication as doing so results in a BadRequest exception error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_replication_configurations"
    values={[
        { label: 'describe_replication_configurations', value: 'describe_replication_configurations' }
    ]}
>
<TabItem value="describe_replication_configurations">

Retrieves the replication configuration for a specific file system. If a file system is not specified, all of the replication configurations for the Amazon Web Services account in an Amazon Web Services Region are retrieved.

```sql
SELECT
CreationTime,
Destinations,
OriginalSourceFileSystemArn,
SourceFileSystemArn,
SourceFileSystemId,
SourceFileSystemOwnerId,
SourceFileSystemRegion
FROM aws.efs.replication_configurations
WHERE region = '{{ region }}' -- required
AND FileSystemId = '{{ FileSystemId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_configuration"
    values={[
        { label: 'create_replication_configuration', value: 'create_replication_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_configuration">

Creates a replication conﬁguration to either a new or existing EFS file system. For more information, see Amazon EFS replication in the Amazon EFS User Guide. The replication configuration specifies the following: Source file system – The EFS file system that you want to replicate. Destination file system – The destination file system to which the source file system is replicated. There can only be one destination file system in a replication configuration. A file system can be part of only one replication configuration. The destination parameters for the replication configuration depend on whether you are replicating to a new file system or to an existing file system, and if you are replicating across Amazon Web Services accounts. See DestinationToCreate for more information. This operation requires permissions for the elasticfilesystem:CreateReplicationConfiguration action. Additionally, other permissions are required depending on how you are replicating file systems. For more information, see Required permissions for replication in the Amazon EFS User Guide.

```sql
INSERT INTO aws.efs.replication_configurations (
Destinations,
source_file_system_id,
region
)
SELECT 
'{{ Destinations }}',
'{{ source_file_system_id }}',
'{{ region }}'
RETURNING
CreationTime,
Destinations,
OriginalSourceFileSystemArn,
SourceFileSystemArn,
SourceFileSystemId,
SourceFileSystemOwnerId,
SourceFileSystemRegion
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_configurations
  props:
    - name: source_file_system_id
      value: "{{ source_file_system_id }}"
      description: Required parameter for the replication_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_configurations resource.
    - name: Destinations
      value:
        - Region: "{{ Region }}"
          AvailabilityZoneName: "{{ AvailabilityZoneName }}"
          KmsKeyId: "{{ KmsKeyId }}"
          FileSystemId: "{{ FileSystemId }}"
          RoleArn: "{{ RoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_configuration"
    values={[
        { label: 'delete_replication_configuration', value: 'delete_replication_configuration' }
    ]}
>
<TabItem value="delete_replication_configuration">

Deletes a replication configuration. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system becomes Writeable and its replication overwrite protection is re-enabled. For more information, see Delete a replication configuration. This operation requires permissions for the elasticfilesystem:DeleteReplicationConfiguration action.

```sql
DELETE FROM aws.efs.replication_configurations
WHERE source_file_system_id = '{{ source_file_system_id }}' --required
AND region = '{{ region }}' --required
AND deletionMode = '{{ deletionMode }}'
;
```
</TabItem>
</Tabs>
