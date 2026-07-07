--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
  - managedblockchain
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain.nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_node"
    values={[
        { label: 'get_node', value: 'get_node' },
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="get_node">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:.+:.+:.+:.+:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which the node exists. Required for Ethereum nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FrameworkAttributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the blockchain framework being used.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the node uses for encryption at rest. If the value of this parameter is "AWS Owned KMS Key", the node uses an Amazon Web Services owned KMS key for encryption. The node inherits this parameter from the member that it belongs to. For more information, see Encryption at Rest in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="LogPublishingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.</td>
</tr>
<tr>
    <td><CopyableCode code="MemberId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the member to which the node belongs. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network that the node is on.</td>
</tr>
<tr>
    <td><CopyableCode code="StateDB" /></td>
    <td><code>string</code></td>
    <td>The state database that the node uses. Values are LevelDB or CouchDB. Applies only to Hyperledger Fabric. (LevelDB, CouchDB)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the node. CREATING - The Amazon Web Services account is in the process of creating a node. AVAILABLE - The node has been created and can participate in the network. UNHEALTHY - The node is impaired and might not function as expected. Amazon Managed Blockchain automatically finds nodes in this state and tries to recover them. If a node is recoverable, it returns to AVAILABLE. Otherwise, it moves to FAILED status. CREATE_FAILED - The Amazon Web Services account attempted to create a node and creation failed. UPDATING - The node is in the process of being updated. DELETING - The node is in the process of being deleted. DELETED - The node can no longer participate on the network. FAILED - The node is no longer functional, cannot be recovered, and must be deleted. INACCESSIBLE_ENCRYPTION_KEY - The node is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked. The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the node resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource. (CREATING, AVAILABLE, UNHEALTHY, CREATE_FAILED, UPDATING, DELETING, DELETED, FAILED, INACCESSIBLE_ENCRYPTION_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the node. Each tag consists of a key and optional value. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_nodes">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
<tr>
    <td><CopyableCode code="Nodes" /></td>
    <td><code>array</code></td>
    <td>An array of NodeSummary objects that contain configuration properties for each node.</td>
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
    <td><a href="#get_node"><CopyableCode code="get_node" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-memberId"><code>memberId</code></a></td>
    <td>Returns detailed information about a node. Applies to Hyperledger Fabric and Ethereum.</td>
</tr>
<tr>
    <td><a href="#list_nodes"><CopyableCode code="list_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-memberId"><code>memberId</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns information about the nodes within a network. Applies to Hyperledger Fabric and Ethereum.</td>
</tr>
<tr>
    <td><a href="#create_node"><CopyableCode code="create_node" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-NodeConfiguration"><code>NodeConfiguration</code></a></td>
    <td></td>
    <td>Creates a node on the specified blockchain network. Applies to Hyperledger Fabric and Ethereum.</td>
</tr>
<tr>
    <td><a href="#update_node"><CopyableCode code="update_node" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a node configuration with new parameters. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#delete_node"><CopyableCode code="delete_node" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-memberId"><code>memberId</code></a></td>
    <td>Deletes a node that your Amazon Web Services account owns. All data on the node is lost and cannot be recovered. Applies to Hyperledger Fabric and Ethereum.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network that the node is on. Ethereum public networks have the following NetworkIds: n-ethereum-mainnet</td>
</tr>
<tr id="parameter-node_id">
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the node.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of nodes to list.</td>
</tr>
<tr id="parameter-memberId">
    <td><CopyableCode code="memberId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the member that owns this node. Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>An optional status specifier. If provided, only nodes currently in this status are listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_node"
    values={[
        { label: 'get_node', value: 'get_node' },
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="get_node">

Returns detailed information about a node. Applies to Hyperledger Fabric and Ethereum.

```sql
SELECT
Arn,
AvailabilityZone,
CreationDate,
FrameworkAttributes,
Id,
InstanceType,
KmsKeyArn,
LogPublishingConfiguration,
MemberId,
NetworkId,
StateDB,
Status,
Tags
FROM aws.managedblockchain.nodes
WHERE network_id = '{{ network_id }}' -- required
AND node_id = '{{ node_id }}' -- required
AND region = '{{ region }}' -- required
AND memberId = '{{ memberId }}'
;
```
</TabItem>
<TabItem value="list_nodes">

Returns information about the nodes within a network. Applies to Hyperledger Fabric and Ethereum.

```sql
SELECT
NextToken,
Nodes
FROM aws.managedblockchain.nodes
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND memberId = '{{ memberId }}'
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_node"
    values={[
        { label: 'create_node', value: 'create_node' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_node">

Creates a node on the specified blockchain network. Applies to Hyperledger Fabric and Ethereum.

```sql
INSERT INTO aws.managedblockchain.nodes (
ClientRequestToken,
MemberId,
NodeConfiguration,
Tags,
network_id,
region
)
SELECT 
'{{ ClientRequestToken }}' /* required */,
'{{ MemberId }}',
'{{ NodeConfiguration }}' /* required */,
'{{ Tags }}',
'{{ network_id }}',
'{{ region }}'
RETURNING
NodeId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: nodes
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the nodes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the nodes resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: MemberId
      value: "{{ MemberId }}"
    - name: NodeConfiguration
      description: |
        Configuration properties of a node.
      value:
        InstanceType: "{{ InstanceType }}"
        AvailabilityZone: "{{ AvailabilityZone }}"
        LogPublishingConfiguration:
          Fabric:
            ChaincodeLogs:
              Cloudwatch:
                Enabled: {{ Enabled }}
            PeerLogs:
              Cloudwatch:
                Enabled: {{ Enabled }}
        StateDB: "{{ StateDB }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_node"
    values={[
        { label: 'update_node', value: 'update_node' }
    ]}
>
<TabItem value="update_node">

Updates a node configuration with new parameters. Applies only to Hyperledger Fabric.

```sql
UPDATE aws.managedblockchain.nodes
SET 
MemberId = '{{ MemberId }}',
LogPublishingConfiguration = '{{ LogPublishingConfiguration }}'
WHERE 
network_id = '{{ network_id }}' --required
AND node_id = '{{ node_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_node"
    values={[
        { label: 'delete_node', value: 'delete_node' }
    ]}
>
<TabItem value="delete_node">

Deletes a node that your Amazon Web Services account owns. All data on the node is lost and cannot be recovered. Applies to Hyperledger Fabric and Ethereum.

```sql
DELETE FROM aws.managedblockchain.nodes
WHERE network_id = '{{ network_id }}' --required
AND node_id = '{{ node_id }}' --required
AND region = '{{ region }}' --required
AND memberId = '{{ memberId }}'
;
```
</TabItem>
</Tabs>
