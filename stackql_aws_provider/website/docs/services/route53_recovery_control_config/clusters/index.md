--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - route53_recovery_control_config
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_control_config.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

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
    <td>The Amazon Resource Name (ARN) of the cluster. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterEndpoints" /></td>
    <td><code>array</code></td>
    <td>Endpoints for a cluster. Specify one of these endpoints when you want to set or retrieve a routing control state in the cluster. To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The network type of a cluster. NetworkType can be one of the following: IPV4: Cluster endpoints support IPv4 only. DUALSTACK: Cluster endpoints support both IPv4 and IPv6. (IPV4, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the cluster owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION. (PENDING, DEPLOYED, PENDING_DELETION)</td>
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
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterEndpoints" /></td>
    <td><code>array</code></td>
    <td>Endpoints for a cluster. Specify one of these endpoints when you want to set or retrieve a routing control state in the cluster. To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The network type of a cluster. NetworkType can be one of the following: IPV4: Cluster endpoints support IPv4 only. DUALSTACK: Cluster endpoints support both IPv4 and IPv6. (IPV4, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the cluster owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION. (PENDING, DEPLOYED, PENDING_DELETION)</td>
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
    <td><a href="#describe_cluster"><CopyableCode code="describe_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns an array of all the clusters in an account.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a></td>
    <td></td>
    <td>Updates an existing cluster. You can only update the network type of a cluster.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a cluster.</td>
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
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster that you're deleting.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).

```sql
SELECT
ClusterArn,
ClusterEndpoints,
Name,
NetworkType,
Owner,
Status
FROM aws.route53_recovery_control_config.clusters
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Returns an array of all the clusters in an account.

```sql
SELECT
ClusterArn,
ClusterEndpoints,
Name,
NetworkType,
Owner,
Status
FROM aws.route53_recovery_control_config.clusters
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
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

Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.

```sql
INSERT INTO aws.route53_recovery_control_config.clusters (
ClientToken,
ClusterName,
Tags,
NetworkType,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ClusterName }}' /* required */,
'{{ Tags }}',
'{{ NetworkType }}',
'{{ region }}'
RETURNING
Cluster
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
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ClusterName
      value: "{{ ClusterName }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        The network type of a cluster. NetworkType can be one of the following: IPV4: Cluster endpoints support IPv4 only. DUALSTACK: Cluster endpoints support both IPv4 and IPv6.
      valid_values: ['IPV4', 'DUALSTACK']
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

Updates an existing cluster. You can only update the network type of a cluster.

```sql
UPDATE aws.route53_recovery_control_config.clusters
SET 
ClusterArn = '{{ ClusterArn }}',
NetworkType = '{{ NetworkType }}'
WHERE 
region = '{{ region }}' --required
AND ClusterArn = '{{ ClusterArn }}' --required
AND NetworkType = '{{ NetworkType }}' --required
RETURNING
Cluster;
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

Delete a cluster.

```sql
DELETE FROM aws.route53_recovery_control_config.clusters
WHERE cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
