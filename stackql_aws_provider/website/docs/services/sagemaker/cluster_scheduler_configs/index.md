--- 
title: cluster_scheduler_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_scheduler_configs
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>cluster_scheduler_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_scheduler_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.cluster_scheduler_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_scheduler_config"
    values={[
        { label: 'describe_cluster_scheduler_config', value: 'describe_cluster_scheduler_config' },
        { label: 'list_cluster_scheduler_configs', value: 'list_cluster_scheduler_configs' }
    ]}
>
<TabItem value="describe_cluster_scheduler_config">

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
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster where the cluster policy is applied. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterSchedulerConfigArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster policy. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:cluster-scheduler-config/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterSchedulerConfigId" /></td>
    <td><code>string</code></td>
    <td>ID of the cluster policy. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterSchedulerConfigVersion" /></td>
    <td><code>integer</code></td>
    <td>Version of the cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description of the cluster policy. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>Failure reason of the cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time of the cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the cluster policy. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SchedulerConfig" /></td>
    <td><code>object</code></td>
    <td>Cluster policy configuration. This policy is used for task prioritization and fair-share allocation. This helps prioritize critical workloads and distributes idle compute across entities.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the cluster policy. (Creating, CreateFailed, CreateRollbackFailed, Created, Updating, UpdateFailed, UpdateRollbackFailed, Updated, Deleting, DeleteFailed, DeleteRollbackFailed, Deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>object</code></td>
    <td>Additional details about the status of the cluster policy. This field provides context when the policy is in a non-active state, such as during creation, updates, or if failures occur.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cluster_scheduler_configs">

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
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterSchedulerConfigArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster policy. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:cluster-scheduler-config/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterSchedulerConfigId" /></td>
    <td><code>string</code></td>
    <td>ID of the cluster policy. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterSchedulerConfigVersion" /></td>
    <td><code>integer</code></td>
    <td>Version of the cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time of the cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the cluster policy. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the cluster policy. (Creating, CreateFailed, CreateRollbackFailed, Created, Updating, UpdateFailed, UpdateRollbackFailed, Updated, Deleting, DeleteFailed, DeleteRollbackFailed, Deleted)</td>
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
    <td><a href="#describe_cluster_scheduler_config"><CopyableCode code="describe_cluster_scheduler_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Description of the cluster policy. This policy is used for task prioritization and fair-share allocation. This helps prioritize critical workloads and distributes idle compute across entities.</td>
</tr>
<tr>
    <td><a href="#list_cluster_scheduler_configs"><CopyableCode code="list_cluster_scheduler_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the cluster policy configurations.</td>
</tr>
<tr>
    <td><a href="#create_cluster_scheduler_config"><CopyableCode code="create_cluster_scheduler_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-SchedulerConfig"><code>SchedulerConfig</code></a></td>
    <td></td>
    <td>Create cluster policy configuration. This policy is used for task prioritization and fair-share allocation of idle compute. This helps prioritize critical workloads and distributes idle compute across entities.</td>
</tr>
<tr>
    <td><a href="#update_cluster_scheduler_config"><CopyableCode code="update_cluster_scheduler_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterSchedulerConfigId"><code>ClusterSchedulerConfigId</code></a>, <a href="#parameter-TargetVersion"><code>TargetVersion</code></a></td>
    <td></td>
    <td>Update the cluster policy configuration.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_scheduler_config"><CopyableCode code="delete_cluster_scheduler_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the cluster policy of the cluster.</td>
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
    defaultValue="describe_cluster_scheduler_config"
    values={[
        { label: 'describe_cluster_scheduler_config', value: 'describe_cluster_scheduler_config' },
        { label: 'list_cluster_scheduler_configs', value: 'list_cluster_scheduler_configs' }
    ]}
>
<TabItem value="describe_cluster_scheduler_config">

Description of the cluster policy. This policy is used for task prioritization and fair-share allocation. This helps prioritize critical workloads and distributes idle compute across entities.

```sql
SELECT
ClusterArn,
ClusterSchedulerConfigArn,
ClusterSchedulerConfigId,
ClusterSchedulerConfigVersion,
CreatedBy,
CreationTime,
Description,
FailureReason,
LastModifiedBy,
LastModifiedTime,
Name,
SchedulerConfig,
Status,
StatusDetails
FROM aws.sagemaker.cluster_scheduler_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cluster_scheduler_configs">

List the cluster policy configurations.

```sql
SELECT
ClusterArn,
ClusterSchedulerConfigArn,
ClusterSchedulerConfigId,
ClusterSchedulerConfigVersion,
CreationTime,
LastModifiedTime,
Name,
Status
FROM aws.sagemaker.cluster_scheduler_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster_scheduler_config"
    values={[
        { label: 'create_cluster_scheduler_config', value: 'create_cluster_scheduler_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_scheduler_config">

Create cluster policy configuration. This policy is used for task prioritization and fair-share allocation of idle compute. This helps prioritize critical workloads and distributes idle compute across entities.

```sql
INSERT INTO aws.sagemaker.cluster_scheduler_configs (
Name,
ClusterArn,
SchedulerConfig,
Description,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ClusterArn }}' /* required */,
'{{ SchedulerConfig }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ClusterSchedulerConfigArn,
ClusterSchedulerConfigId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_scheduler_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_scheduler_configs resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Name for the cluster policy.
    - name: ClusterArn
      value: "{{ ClusterArn }}"
      description: |
        ARN of the cluster.
    - name: SchedulerConfig
      description: |
        Configuration about the monitoring schedule.
      value:
        PriorityClasses:
          - Name: "{{ Name }}"
            Weight: {{ Weight }}
        FairShare: "{{ FairShare }}"
        IdleResourceSharing: "{{ IdleResourceSharing }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        Description of the cluster policy.
    - name: Tags
      description: |
        Tags of the cluster policy.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster_scheduler_config"
    values={[
        { label: 'update_cluster_scheduler_config', value: 'update_cluster_scheduler_config' }
    ]}
>
<TabItem value="update_cluster_scheduler_config">

Update the cluster policy configuration.

```sql
UPDATE aws.sagemaker.cluster_scheduler_configs
SET 
ClusterSchedulerConfigId = '{{ ClusterSchedulerConfigId }}',
TargetVersion = {{ TargetVersion }},
SchedulerConfig = '{{ SchedulerConfig }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND ClusterSchedulerConfigId = '{{ ClusterSchedulerConfigId }}' --required
AND TargetVersion = '{{ TargetVersion }}' --required
RETURNING
ClusterSchedulerConfigArn,
ClusterSchedulerConfigVersion;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_scheduler_config"
    values={[
        { label: 'delete_cluster_scheduler_config', value: 'delete_cluster_scheduler_config' }
    ]}
>
<TabItem value="delete_cluster_scheduler_config">

Deletes the cluster policy of the cluster.

```sql
DELETE FROM aws.sagemaker.cluster_scheduler_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
