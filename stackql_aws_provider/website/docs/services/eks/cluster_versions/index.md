--- 
title: cluster_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_versions
  - eks
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

Creates, updates, deletes, gets or lists a <code>cluster_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.cluster_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_versions"
    values={[
        { label: 'describe_cluster_versions', value: 'describe_cluster_versions' }
    ]}
>
<TabItem value="describe_cluster_versions">

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
    <td><CopyableCode code="cluster_type" /></td>
    <td><code>string</code></td>
    <td>The type of cluster this version is for.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_version" /></td>
    <td><code>string</code></td>
    <td>The Kubernetes version for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane_component_config" /></td>
    <td><code>object</code></td>
    <td>The default control plane component configuration and constraints for this Kubernetes version.</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane_scaling_tiers" /></td>
    <td><code>array</code></td>
    <td>The available provisioned control plane scaling tiers and their capabilities for this Kubernetes version.</td>
</tr>
<tr>
    <td><CopyableCode code="default_platform_version" /></td>
    <td><code>string</code></td>
    <td>Default platform version for this Kubernetes version.</td>
</tr>
<tr>
    <td><CopyableCode code="default_version" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this is a default version.</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_extended_support_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when extended support ends for this version.</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_standard_support_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when standard support ends for this version.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetes_patch_version" /></td>
    <td><code>string</code></td>
    <td>The patch version of Kubernetes for this cluster version.</td>
</tr>
<tr>
    <td><CopyableCode code="release_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The release date of this cluster version.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This field is deprecated. Use versionStatus instead, as that field matches for input and output of this action. Current status of this cluster version. (unsupported, standard-support, extended-support)</td>
</tr>
<tr>
    <td><CopyableCode code="version_status" /></td>
    <td><code>string</code></td>
    <td>Current status of this cluster version. (UNSUPPORTED, STANDARD_SUPPORT, EXTENDED_SUPPORT)</td>
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
    <td><a href="#describe_cluster_versions"><CopyableCode code="describe_cluster_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clusterType"><code>clusterType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-defaultOnly"><code>defaultOnly</code></a>, <a href="#parameter-includeAll"><code>includeAll</code></a>, <a href="#parameter-clusterVersions"><code>clusterVersions</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-versionStatus"><code>versionStatus</code></a></td>
    <td>Lists available Kubernetes versions for Amazon EKS clusters.</td>
</tr>
<tr>
    <td><a href="#update_cluster_version"><CopyableCode code="update_cluster_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active. If your cluster has managed node groups attached to it, all of your node groups' Kubernetes versions must match the cluster's Kubernetes version in order to update the cluster to a new Kubernetes version.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EKS cluster to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clusterType">
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>The type of cluster to filter versions by.</td>
</tr>
<tr id="parameter-clusterVersions">
    <td><CopyableCode code="clusterVersions" /></td>
    <td><code>array</code></td>
    <td>List of specific cluster versions to describe.</td>
</tr>
<tr id="parameter-defaultOnly">
    <td><CopyableCode code="defaultOnly" /></td>
    <td><code>boolean</code></td>
    <td>Filter to show only default versions.</td>
</tr>
<tr id="parameter-includeAll">
    <td><CopyableCode code="includeAll" /></td>
    <td><code>boolean</code></td>
    <td>Include all available versions in the response.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token for the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This field is deprecated. Use versionStatus instead, as that field matches for input and output of this action. Filter versions by their current status.</td>
</tr>
<tr id="parameter-versionStatus">
    <td><CopyableCode code="versionStatus" /></td>
    <td><code>string</code></td>
    <td>Filter versions by their current status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_versions"
    values={[
        { label: 'describe_cluster_versions', value: 'describe_cluster_versions' }
    ]}
>
<TabItem value="describe_cluster_versions">

Lists available Kubernetes versions for Amazon EKS clusters.

```sql
SELECT
cluster_type,
cluster_version,
control_plane_component_config,
control_plane_scaling_tiers,
default_platform_version,
default_version,
end_of_extended_support_date,
end_of_standard_support_date,
kubernetes_patch_version,
release_date,
status,
version_status
FROM aws.eks.cluster_versions
WHERE region = '{{ region }}' -- required
AND clusterType = '{{ clusterType }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND defaultOnly = '{{ defaultOnly }}'
AND includeAll = '{{ includeAll }}'
AND clusterVersions = '{{ clusterVersions }}'
AND status = '{{ status }}'
AND versionStatus = '{{ versionStatus }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster_version"
    values={[
        { label: 'update_cluster_version', value: 'update_cluster_version' }
    ]}
>
<TabItem value="update_cluster_version">

Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active. If your cluster has managed node groups attached to it, all of your node groups' Kubernetes versions must match the cluster's Kubernetes version in order to update the cluster to a new Kubernetes version.

```sql
UPDATE aws.eks.cluster_versions
SET 
version = '{{ version }}',
clientRequestToken = '{{ clientRequestToken }}',
force = {{ force }},
rollbackConfig = '{{ rollbackConfig }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND version = '{{ version }}' --required
RETURNING
update;
```
</TabItem>
</Tabs>
