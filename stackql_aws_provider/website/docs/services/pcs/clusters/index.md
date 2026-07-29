--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - pcs
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pcs.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster"
    values={[
        { label: 'get_cluster', value: 'get_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="get_cluster">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The generated unique ID of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>The list of endpoints available for interaction with the scheduler.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>array</code></td>
    <td>The list of errors that occurred during cluster provisioning.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="networking" /></td>
    <td><code>object</code></td>
    <td>The networking configuration for the cluster's control plane.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduler" /></td>
    <td><code>object</code></td>
    <td>The cluster management and job scheduling software associated with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>The size of the cluster. SMALL: 32 compute nodes and 256 jobs MEDIUM: 512 compute nodes and 8192 jobs LARGE: 2048 compute nodes and 16,384 jobs (SMALL, MEDIUM, LARGE)</td>
</tr>
<tr>
    <td><CopyableCode code="slurm_configuration" /></td>
    <td><code>object</code></td>
    <td>Additional options related to the Slurm scheduler.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the cluster. The provisioning status doesn't indicate the overall health of the cluster. The resource enters the SUSPENDING and SUSPENDED states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is SUSPENDED. For more information, see Frequently asked questions about Slurm versions in PCS in the PCS User Guide. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED, SUSPENDING, SUSPENDED, RESUMING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_clusters">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The generated unique ID of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the cluster. The provisioning status doesn't indicate the overall health of the cluster. The resource enters the SUSPENDING and SUSPENDED states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is SUSPENDED. For more information, see Frequently asked questions about Slurm versions in PCS in the PCS User Guide. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED, SUSPENDING, SUSPENDED, RESUMING)</td>
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
    <td><a href="#get_cluster"><CopyableCode code="get_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a running cluster in your account. This API action provides networking information, endpoint information for communication with the scheduler, and provisioning status.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of running clusters in your account.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a>, <a href="#parameter-scheduler"><code>scheduler</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-networking"><code>networking</code></a></td>
    <td></td>
    <td>Creates a cluster in your account. PCS creates the cluster controller in a service-owned account. The cluster controller communicates with the cluster resources in your account. The subnets and security groups for the cluster must already exist before you use this API action. It takes time for PCS to create the cluster. The cluster is in a Creating state until it is ready to use. There can only be 1 cluster in a Creating state per Amazon Web Services Region per Amazon Web Services account. CreateCluster fails with a ServiceQuotaExceededException if there is already a cluster in a Creating state.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterIdentifier"><code>clusterIdentifier</code></a></td>
    <td></td>
    <td>Updates a cluster configuration. You can modify Slurm scheduler settings, accounting configuration, and security groups for an existing cluster. You can only update clusters that are in ACTIVE, UPDATE_FAILED, or SUSPENDED state. All associated resources (queues and compute node groups) must be in ACTIVE state before you can update the cluster.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cluster and all its linked resources. You must delete all queues and compute node groups associated with the cluster before you can delete the cluster.</td>
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
    defaultValue="get_cluster"
    values={[
        { label: 'get_cluster', value: 'get_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="get_cluster">

Returns detailed information about a running cluster in your account. This API action provides networking information, endpoint information for communication with the scheduler, and provisioning status.

```sql
SELECT
id,
name,
arn,
created_at,
endpoints,
error_info,
modified_at,
networking,
scheduler,
size,
slurm_configuration,
status
FROM aws.pcs.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Returns a list of running clusters in your account.

```sql
SELECT
id,
name,
arn,
created_at,
modified_at,
status
FROM aws.pcs.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates a cluster in your account. PCS creates the cluster controller in a service-owned account. The cluster controller communicates with the cluster resources in your account. The subnets and security groups for the cluster must already exist before you use this API action. It takes time for PCS to create the cluster. The cluster is in a Creating state until it is ready to use. There can only be 1 cluster in a Creating state per Amazon Web Services Region per Amazon Web Services account. CreateCluster fails with a ServiceQuotaExceededException if there is already a cluster in a Creating state.

```sql
INSERT INTO aws.pcs.clusters (
clusterName,
scheduler,
size,
networking,
slurmConfiguration,
clientToken,
tags,
region
)
SELECT 
'{{ clusterName }}' /* required */,
'{{ scheduler }}' /* required */,
'{{ size }}' /* required */,
'{{ networking }}' /* required */,
'{{ slurmConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
cluster
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        A name to identify the cluster. Example: MyCluster
    - name: scheduler
      description: |
        The cluster management and job scheduling software associated with the cluster.
      value:
        type_: "{{ type_ }}"
        version: "{{ version }}"
    - name: size
      value: "{{ size }}"
      description: |
        A value that determines the maximum number of compute nodes in the cluster and the maximum number of jobs (active and queued). SMALL: 32 compute nodes and 256 jobs MEDIUM: 512 compute nodes and 8192 jobs LARGE: 2048 compute nodes and 16,384 jobs
      valid_values: ['SMALL', 'MEDIUM', 'LARGE']
    - name: networking
      description: |
        The networking configuration used to set up the cluster's control plane.
      value:
        subnetIds:
          - "{{ subnetIds }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
        networkType: "{{ networkType }}"
    - name: slurmConfiguration
      description: |
        Additional options related to the Slurm scheduler.
      value:
        scaleDownIdleTimeInSeconds: {{ scaleDownIdleTimeInSeconds }}
        slurmCustomSettings:
          - parameterName: "{{ parameterName }}"
            parameterValue: "{{ parameterValue }}"
        slurmdbdCustomSettings:
          - parameterName: "{{ parameterName }}"
            parameterValue: "{{ parameterValue }}"
        cgroupCustomSettings:
          - parameterName: "{{ parameterName }}"
            parameterValue: "{{ parameterValue }}"
        accounting:
          defaultPurgeTimeInDays: {{ defaultPurgeTimeInDays }}
          mode: "{{ mode }}"
        slurmRest:
          mode: "{{ mode }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
    - name: tags
      value: "{{ tags }}"
      description: |
        1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster"
    values={[
        { label: 'update_cluster', value: 'update_cluster' }
    ]}
>
<TabItem value="update_cluster">

Updates a cluster configuration. You can modify Slurm scheduler settings, accounting configuration, and security groups for an existing cluster. You can only update clusters that are in ACTIVE, UPDATE_FAILED, or SUSPENDED state. All associated resources (queues and compute node groups) must be in ACTIVE state before you can update the cluster.

```sql
UPDATE aws.pcs.clusters
SET 
clusterIdentifier = '{{ clusterIdentifier }}',
clientToken = '{{ clientToken }}',
slurmConfiguration = '{{ slurmConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND clusterIdentifier = '{{ clusterIdentifier }}' --required
RETURNING
cluster;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster"
    values={[
        { label: 'delete_cluster', value: 'delete_cluster' }
    ]}
>
<TabItem value="delete_cluster">

Deletes a cluster and all its linked resources. You must delete all queues and compute node groups associated with the cluster before you can delete the cluster.

```sql
DELETE FROM aws.pcs.clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
