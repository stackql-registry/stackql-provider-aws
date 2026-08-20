--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - dsql
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dsql.clusters" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the cluster. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:dsql:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether deletion protection is enabled for a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_details" /></td>
    <td><code>object</code></td>
    <td>The current encryption configuration details for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The connection endpoint for the cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region_properties" /></td>
    <td><code>object</code></td>
    <td>Defines the structure for multi-Region cluster configurations, containing the witness region and linked cluster settings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the retrieved cluster. (CREATING, ACTIVE, IDLE, INACTIVE, UPDATING, DELETING, DELETED, FAILED, PENDING_SETUP, PENDING_DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the cluster. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:dsql:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
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
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a cluster.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Retrieves information about a list of clusters.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The CreateCluster API allows you to create both single-Region clusters and multi-Region clusters. With the addition of the multiRegionProperties parameter, you can create a cluster with witness Region support and establish peer relationships with clusters in other Regions during creation. Creating multi-Region clusters requires additional IAM permissions beyond those needed for single-Region clusters, as detailed in the Required permissions section below. Required permissions dsql:CreateCluster Required to create a cluster. Resources: arn:aws:dsql:region:account-id:cluster/* dsql:TagResource Permission to add tags to a resource. Resources: arn:aws:dsql:region:account-id:cluster/* dsql:PutMultiRegionProperties Permission to configure multi-Region properties for a cluster. Resources: arn:aws:dsql:region:account-id:cluster/* dsql:AddPeerCluster When specifying multiRegionProperties.clusters, permission to add peer clusters. Resources: Local cluster: arn:aws:dsql:region:account-id:cluster/* Each peer cluster: exact ARN of each specified peer cluster dsql:PutWitnessRegion When specifying multiRegionProperties.witnessRegion, permission to set a witness Region. This permission is checked both in the cluster Region and in the witness Region. Resources: arn:aws:dsql:region:account-id:cluster/* Condition Keys: dsql:WitnessRegion (matching the specified witness region) The witness Region specified in multiRegionProperties.witnessRegion cannot be the same as the cluster's Region.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The UpdateCluster API allows you to modify both single-Region and multi-Region cluster configurations. With the multiRegionProperties parameter, you can add or modify witness Region support and manage peer relationships with clusters in other Regions. Note that updating multi-Region clusters requires additional IAM permissions beyond those needed for standard cluster updates, as detailed in the Permissions section. Required permissions dsql:UpdateCluster Permission to update a DSQL cluster. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id dsql:PutMultiRegionProperties Permission to configure multi-Region properties for a cluster. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id dsql:GetCluster Permission to retrieve cluster information. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id dsql:AddPeerCluster Permission to add peer clusters. Resources: Local cluster: arn:aws:dsql:region:account-id:cluster/cluster-id Each peer cluster: exact ARN of each specified peer cluster dsql:RemovePeerCluster Permission to remove peer clusters. When you list peer clusters in multiRegionProperties.clusters, you need this permission for each current peer cluster that your list omits. Resources: Each removed peer cluster: exact ARN of each removed peer cluster, in its own Region dsql:PutWitnessRegion Permission to set a witness Region. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id Condition Keys: dsql:WitnessRegion (matching the specified witness Region) This permission is checked both in the cluster Region and in the witness Region. The witness Region specified in multiRegionProperties.witnessRegion cannot be the same as the cluster's Region. When you list peer clusters in multiRegionProperties.clusters, you need dsql:AddPeerCluster for every peer cluster in your request. You need dsql:RemovePeerCluster only for the peer clusters that the update removes.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-client-token"><code>client-token</code></a></td>
    <td>Deletes a cluster in Amazon Aurora DSQL.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-client-token">
    <td><CopyableCode code="client-token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>If your initial ListClusters operation returns a nextToken, you can include the returned nextToken in following ListClusters operations, which returns results in the next page.</td>
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

Retrieves information about a cluster.

```sql
SELECT
arn,
creation_time,
deletion_protection_enabled,
encryption_details,
endpoint,
identifier,
multi_region_properties,
status,
tags
FROM aws.dsql.clusters
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Retrieves information about a list of clusters.

```sql
SELECT
arn,
identifier
FROM aws.dsql.clusters
WHERE region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
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

The CreateCluster API allows you to create both single-Region clusters and multi-Region clusters. With the addition of the multiRegionProperties parameter, you can create a cluster with witness Region support and establish peer relationships with clusters in other Regions during creation. Creating multi-Region clusters requires additional IAM permissions beyond those needed for single-Region clusters, as detailed in the Required permissions section below. Required permissions dsql:CreateCluster Required to create a cluster. Resources: arn:aws:dsql:region:account-id:cluster/* dsql:TagResource Permission to add tags to a resource. Resources: arn:aws:dsql:region:account-id:cluster/* dsql:PutMultiRegionProperties Permission to configure multi-Region properties for a cluster. Resources: arn:aws:dsql:region:account-id:cluster/* dsql:AddPeerCluster When specifying multiRegionProperties.clusters, permission to add peer clusters. Resources: Local cluster: arn:aws:dsql:region:account-id:cluster/* Each peer cluster: exact ARN of each specified peer cluster dsql:PutWitnessRegion When specifying multiRegionProperties.witnessRegion, permission to set a witness Region. This permission is checked both in the cluster Region and in the witness Region. Resources: arn:aws:dsql:region:account-id:cluster/* Condition Keys: dsql:WitnessRegion (matching the specified witness region) The witness Region specified in multiRegionProperties.witnessRegion cannot be the same as the cluster's Region.

```sql
INSERT INTO aws.dsql.clusters (
deletionProtectionEnabled,
kmsEncryptionKey,
tags,
clientToken,
multiRegionProperties,
policy,
bypassPolicyLockoutSafetyCheck,
region
)
SELECT 
{{ deletionProtectionEnabled }},
'{{ kmsEncryptionKey }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ multiRegionProperties }}',
'{{ policy }}',
{{ bypassPolicyLockoutSafetyCheck }},
'{{ region }}'
RETURNING
arn,
creation_time,
deletion_protection_enabled,
encryption_details,
endpoint,
identifier,
multi_region_properties,
status
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
    - name: deletionProtectionEnabled
      value: {{ deletionProtectionEnabled }}
      description: |
        Indicates whether deletion protection is enabled for a cluster.
    - name: kmsEncryptionKey
      value: "{{ kmsEncryptionKey }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token so a request is only processed once.
    - name: multiRegionProperties
      description: |
        Defines the structure for multi-Region cluster configurations, containing the witness region and linked cluster settings.
      value:
        witnessRegion: "{{ witnessRegion }}"
        clusters:
          - "{{ clusters }}"
    - name: policy
      value: "{{ policy }}"
      description: |
        A resource-based policy document in JSON format. Length constraints: Minimum length of 1. Maximum length of 20480 characters (approximately 20KB).
    - name: bypassPolicyLockoutSafetyCheck
      value: {{ bypassPolicyLockoutSafetyCheck }}
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

The UpdateCluster API allows you to modify both single-Region and multi-Region cluster configurations. With the multiRegionProperties parameter, you can add or modify witness Region support and manage peer relationships with clusters in other Regions. Note that updating multi-Region clusters requires additional IAM permissions beyond those needed for standard cluster updates, as detailed in the Permissions section. Required permissions dsql:UpdateCluster Permission to update a DSQL cluster. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id dsql:PutMultiRegionProperties Permission to configure multi-Region properties for a cluster. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id dsql:GetCluster Permission to retrieve cluster information. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id dsql:AddPeerCluster Permission to add peer clusters. Resources: Local cluster: arn:aws:dsql:region:account-id:cluster/cluster-id Each peer cluster: exact ARN of each specified peer cluster dsql:RemovePeerCluster Permission to remove peer clusters. When you list peer clusters in multiRegionProperties.clusters, you need this permission for each current peer cluster that your list omits. Resources: Each removed peer cluster: exact ARN of each removed peer cluster, in its own Region dsql:PutWitnessRegion Permission to set a witness Region. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id Condition Keys: dsql:WitnessRegion (matching the specified witness Region) This permission is checked both in the cluster Region and in the witness Region. The witness Region specified in multiRegionProperties.witnessRegion cannot be the same as the cluster's Region. When you list peer clusters in multiRegionProperties.clusters, you need dsql:AddPeerCluster for every peer cluster in your request. You need dsql:RemovePeerCluster only for the peer clusters that the update removes.

```sql
UPDATE aws.dsql.clusters
SET 
deletionProtectionEnabled = {{ deletionProtectionEnabled }},
kmsEncryptionKey = '{{ kmsEncryptionKey }}',
clientToken = '{{ clientToken }}',
multiRegionProperties = '{{ multiRegionProperties }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
creation_time,
identifier,
status;
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

Deletes a cluster in Amazon Aurora DSQL.

```sql
DELETE FROM aws.dsql.clusters
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND `client-token` = '{{ client-token }}'
;
```
</TabItem>
</Tabs>
