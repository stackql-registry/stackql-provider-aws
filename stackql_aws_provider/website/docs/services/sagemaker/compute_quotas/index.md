--- 
title: compute_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_quotas
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

Creates, updates, deletes, gets or lists a <code>compute_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.compute_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_compute_quota"
    values={[
        { label: 'describe_compute_quota', value: 'describe_compute_quota' },
        { label: 'list_compute_quotas', value: 'list_compute_quotas' }
    ]}
>
<TabItem value="describe_compute_quota">

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
    <td><CopyableCode code="activation_state" /></td>
    <td><code>string</code></td>
    <td>The state of the compute allocation being described. Use to enable or disable compute allocation. Default is Enabled. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the compute allocation definition. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:compute-quota/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_config" /></td>
    <td><code>object</code></td>
    <td>Configuration of the compute allocation definition. This includes the resource sharing option, and the setting to preempt low priority tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_id" /></td>
    <td><code>string</code></td>
    <td>ID of the compute allocation definition. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_target" /></td>
    <td><code>object</code></td>
    <td>The target entity to allocate compute resources to.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_version" /></td>
    <td><code>integer</code></td>
    <td>Version of the compute allocation definition.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the compute allocation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the compute allocation definition. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Failure reason of the compute allocation definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time of the compute allocation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the compute allocation definition. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the compute allocation definition. (Creating, CreateFailed, CreateRollbackFailed, Created, Updating, UpdateFailed, UpdateRollbackFailed, Updated, Deleting, DeleteFailed, DeleteRollbackFailed, Deleted)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_compute_quotas">

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
    <td><CopyableCode code="activation_state" /></td>
    <td><code>string</code></td>
    <td>The state of the compute allocation being described. Use to enable or disable compute allocation. Default is Enabled. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the compute allocation definition. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:compute-quota/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_config" /></td>
    <td><code>object</code></td>
    <td>Configuration of the compute allocation definition. This includes the resource sharing option, and the setting to preempt low priority tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_id" /></td>
    <td><code>string</code></td>
    <td>ID of the compute allocation definition. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_target" /></td>
    <td><code>object</code></td>
    <td>The target entity to allocate compute resources to.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_quota_version" /></td>
    <td><code>integer</code></td>
    <td>Version of the compute allocation definition.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the compute allocation definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time of the compute allocation definition.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the compute allocation definition. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the compute allocation definition. (Creating, CreateFailed, CreateRollbackFailed, Created, Updating, UpdateFailed, UpdateRollbackFailed, Updated, Deleting, DeleteFailed, DeleteRollbackFailed, Deleted)</td>
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
    <td><a href="#describe_compute_quota"><CopyableCode code="describe_compute_quota" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Description of the compute allocation definition.</td>
</tr>
<tr>
    <td><a href="#list_compute_quotas"><CopyableCode code="list_compute_quotas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the resource allocation definitions.</td>
</tr>
<tr>
    <td><a href="#create_compute_quota"><CopyableCode code="create_compute_quota" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-ComputeQuotaConfig"><code>ComputeQuotaConfig</code></a>, <a href="#parameter-ComputeQuotaTarget"><code>ComputeQuotaTarget</code></a></td>
    <td></td>
    <td>Create compute allocation definition. This defines how compute is allocated, shared, and borrowed for specified entities. Specifically, how to lend and borrow idle compute and assign a fair-share weight to the specified entities.</td>
</tr>
<tr>
    <td><a href="#update_compute_quota"><CopyableCode code="update_compute_quota" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ComputeQuotaId"><code>ComputeQuotaId</code></a>, <a href="#parameter-TargetVersion"><code>TargetVersion</code></a></td>
    <td></td>
    <td>Update the compute allocation definition.</td>
</tr>
<tr>
    <td><a href="#delete_compute_quota"><CopyableCode code="delete_compute_quota" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the compute allocation from the cluster.</td>
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
    defaultValue="describe_compute_quota"
    values={[
        { label: 'describe_compute_quota', value: 'describe_compute_quota' },
        { label: 'list_compute_quotas', value: 'list_compute_quotas' }
    ]}
>
<TabItem value="describe_compute_quota">

Description of the compute allocation definition.

```sql
SELECT
activation_state,
cluster_arn,
compute_quota_arn,
compute_quota_config,
compute_quota_id,
compute_quota_target,
compute_quota_version,
created_by,
creation_time,
description,
failure_reason,
last_modified_by,
last_modified_time,
name,
status
FROM aws.sagemaker.compute_quotas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_compute_quotas">

List the resource allocation definitions.

```sql
SELECT
activation_state,
cluster_arn,
compute_quota_arn,
compute_quota_config,
compute_quota_id,
compute_quota_target,
compute_quota_version,
creation_time,
last_modified_time,
name,
status
FROM aws.sagemaker.compute_quotas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_compute_quota"
    values={[
        { label: 'create_compute_quota', value: 'create_compute_quota' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_compute_quota">

Create compute allocation definition. This defines how compute is allocated, shared, and borrowed for specified entities. Specifically, how to lend and borrow idle compute and assign a fair-share weight to the specified entities.

```sql
INSERT INTO aws.sagemaker.compute_quotas (
Name,
Description,
ClusterArn,
ComputeQuotaConfig,
ComputeQuotaTarget,
ActivationState,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ClusterArn }}' /* required */,
'{{ ComputeQuotaConfig }}' /* required */,
'{{ ComputeQuotaTarget }}' /* required */,
'{{ ActivationState }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
compute_quota_arn,
compute_quota_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compute_quotas
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compute_quotas resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Name to the compute allocation definition.
    - name: Description
      value: "{{ Description }}"
      description: |
        Description of the compute allocation definition.
    - name: ClusterArn
      value: "{{ ClusterArn }}"
      description: |
        ARN of the cluster.
    - name: ComputeQuotaConfig
      description: |
        Configuration of the compute allocation definition. This includes the resource sharing option, and the setting to preempt low priority tasks.
      value:
        ComputeQuotaResources:
          - InstanceType: "{{ InstanceType }}"
            Count: {{ Count }}
            Accelerators: {{ Accelerators }}
            VCpu: {{ VCpu }}
            MemoryInGiB: {{ MemoryInGiB }}
            AcceleratorPartition:
              Type: "{{ Type }}"
              Count: {{ Count }}
        ResourceSharingConfig:
          Strategy: "{{ Strategy }}"
          BorrowLimit: {{ BorrowLimit }}
          AbsoluteBorrowLimits:
            - InstanceType: "{{ InstanceType }}"
              Count: {{ Count }}
              Accelerators: {{ Accelerators }}
              VCpu: {{ VCpu }}
              MemoryInGiB: {{ MemoryInGiB }}
              AcceleratorPartition:
                Type: "{{ Type }}"
                Count: {{ Count }}
        PreemptTeamTasks: "{{ PreemptTeamTasks }}"
    - name: ComputeQuotaTarget
      description: |
        The target entity to allocate compute resources to.
      value:
        TeamName: "{{ TeamName }}"
        FairShareWeight: {{ FairShareWeight }}
    - name: ActivationState
      value: "{{ ActivationState }}"
      description: |
        The state of the compute allocation being described. Use to enable or disable compute allocation. Default is Enabled.
      valid_values: ['Enabled', 'Disabled']
    - name: Tags
      description: |
        Tags of the compute allocation definition.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_compute_quota"
    values={[
        { label: 'update_compute_quota', value: 'update_compute_quota' }
    ]}
>
<TabItem value="update_compute_quota">

Update the compute allocation definition.

```sql
UPDATE aws.sagemaker.compute_quotas
SET 
ComputeQuotaId = '{{ ComputeQuotaId }}',
TargetVersion = {{ TargetVersion }},
ComputeQuotaConfig = '{{ ComputeQuotaConfig }}',
ComputeQuotaTarget = '{{ ComputeQuotaTarget }}',
ActivationState = '{{ ActivationState }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND ComputeQuotaId = '{{ ComputeQuotaId }}' --required
AND TargetVersion = '{{ TargetVersion }}' --required
RETURNING
compute_quota_arn,
compute_quota_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_compute_quota"
    values={[
        { label: 'delete_compute_quota', value: 'delete_compute_quota' }
    ]}
>
<TabItem value="delete_compute_quota">

Deletes the compute allocation from the cluster.

```sql
DELETE FROM aws.sagemaker.compute_quotas
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
