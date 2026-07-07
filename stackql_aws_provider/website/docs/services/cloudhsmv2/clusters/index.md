--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - cloudhsmv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudhsmv2.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

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
    <td><CopyableCode code="BackupPolicy" /></td>
    <td><code>string</code></td>
    <td>The cluster's backup policy. (DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="BackupRetentionPolicy" /></td>
    <td><code>object</code></td>
    <td>A policy that defines how the service retains backups.</td>
</tr>
<tr>
    <td><CopyableCode code="Certificates" /></td>
    <td><code>object</code></td>
    <td>Contains one or more certificates or a certificate signing request (CSR).</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterId" /></td>
    <td><code>string</code></td>
    <td>The cluster's identifier (ID). (pattern: &lt;code&gt;cluster-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="HsmType" /></td>
    <td><code>string</code></td>
    <td>The type of HSM that the cluster contains. (pattern: &lt;code&gt;((p|)hsm&#91;0-9&#93;&#91;a-z.&#93;*\.&#91;a-zA-Z&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HsmTypeRollbackExpiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp until when the cluster can be rolled back to its original HSM type.</td>
</tr>
<tr>
    <td><CopyableCode code="Hsms" /></td>
    <td><code>array</code></td>
    <td>Contains information about the HSMs in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the cluster. (FIPS, NON_FIPS)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The cluster's NetworkType can be IPv4 (the default) or DUALSTACK. The IPv4 NetworkType restricts communication between your application and the hardware security modules (HSMs) to the IPv4 protocol only. The DUALSTACK NetworkType enables communication over both IPv4 and IPv6 protocols. To use DUALSTACK, configure your virtual private cloud (VPC) and subnets to support both IPv4 and IPv6. This configuration involves adding IPv6 Classless Inter-Domain Routing (CIDR) blocks to the existing IPv4 CIDR blocks in your subnets. The NetworkType you choose affects the network addressing options for your cluster. DUALSTACK provides more flexibility by supporting both IPv4 and IPv6 communication. (IPV4, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="PreCoPassword" /></td>
    <td><code>string</code></td>
    <td>The default password for the cluster's Pre-Crypto Officer (PRECO) user.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityGroup" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the cluster's security group. (pattern: &lt;code&gt;sg-&#91;0-9a-fA-F&#93;&#123;8,17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceBackupId" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the backup used to create the cluster. This value exists only when the cluster was created from a backup. (pattern: &lt;code&gt;backup-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The cluster's state. (CREATE_IN_PROGRESS, UNINITIALIZED, INITIALIZE_IN_PROGRESS, INITIALIZED, ACTIVE, UPDATE_IN_PROGRESS, MODIFY_IN_PROGRESS, ROLLBACK_IN_PROGRESS, DELETE_IN_PROGRESS, DELETED, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="StateMessage" /></td>
    <td><code>string</code></td>
    <td>A description of the cluster's state. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetMapping" /></td>
    <td><code>object</code></td>
    <td>A map from availability zone to the cluster’s subnet in that availability zone.</td>
</tr>
<tr>
    <td><CopyableCode code="TagList" /></td>
    <td><code>array</code></td>
    <td>The list of tags for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the virtual private cloud (VPC) that contains the cluster. (pattern: &lt;code&gt;vpc-&#91;0-9a-fA-F&#93;&lt;/code&gt;)</td>
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
    <td><a href="#describe_clusters"><CopyableCode code="describe_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a NextToken value. Use this value in a subsequent DescribeClusters request to get more clusters. When you receive a response with no NextToken (or an empty or null value), that means there are no more clusters to get. Cross-account use: No. You cannot perform this operation on CloudHSM clusters in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HsmType"><code>HsmType</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a new CloudHSM cluster. Cross-account use: Yes. To perform this operation with an CloudHSM backup in a different AWS account, specify the full backup ARN in the value of the SourceBackupId parameter.</td>
</tr>
<tr>
    <td><a href="#create_hsm"><CopyableCode code="create_hsm" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a></td>
    <td></td>
    <td>Creates a new hardware security module (HSM) in the specified CloudHSM cluster. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Service account.</td>
</tr>
<tr>
    <td><a href="#modify_cluster"><CopyableCode code="modify_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>Modifies CloudHSM cluster. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use DescribeClusters. To delete an HSM, use DeleteHsm. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_hsm"><CopyableCode code="delete_hsm" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use DescribeClusters. Cross-account use: No. You cannot perform this operation on an CloudHSM hsm in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#initialize_cluster"><CopyableCode code="initialize_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-SignedCert"><code>SignedCert</code></a>, <a href="#parameter-TrustAnchor"><code>TrustAnchor</code></a></td>
    <td></td>
    <td>Claims an CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use DescribeClusters. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.</td>
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
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

Gets information about CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a NextToken value. Use this value in a subsequent DescribeClusters request to get more clusters. When you receive a response with no NextToken (or an empty or null value), that means there are no more clusters to get. Cross-account use: No. You cannot perform this operation on CloudHSM clusters in a different Amazon Web Services account.

```sql
SELECT
BackupPolicy,
BackupRetentionPolicy,
Certificates,
ClusterId,
CreateTimestamp,
HsmType,
HsmTypeRollbackExpiration,
Hsms,
Mode,
NetworkType,
PreCoPassword,
SecurityGroup,
SourceBackupId,
State,
StateMessage,
SubnetMapping,
TagList,
VpcId
FROM aws.cloudhsmv2.clusters
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
        { label: 'create_hsm', value: 'create_hsm' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates a new CloudHSM cluster. Cross-account use: Yes. To perform this operation with an CloudHSM backup in a different AWS account, specify the full backup ARN in the value of the SourceBackupId parameter.

```sql
INSERT INTO aws.cloudhsmv2.clusters (
BackupRetentionPolicy,
HsmType,
SourceBackupId,
SubnetIds,
NetworkType,
TagList,
Mode,
region
)
SELECT 
'{{ BackupRetentionPolicy }}',
'{{ HsmType }}' /* required */,
'{{ SourceBackupId }}',
'{{ SubnetIds }}' /* required */,
'{{ NetworkType }}',
'{{ TagList }}',
'{{ Mode }}',
'{{ region }}'
RETURNING
Cluster
;
```
</TabItem>
<TabItem value="create_hsm">

Creates a new hardware security module (HSM) in the specified CloudHSM cluster. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Service account.

```sql
INSERT INTO aws.cloudhsmv2.clusters (
ClusterId,
AvailabilityZone,
IpAddress,
region
)
SELECT 
'{{ ClusterId }}' /* required */,
'{{ AvailabilityZone }}' /* required */,
'{{ IpAddress }}',
'{{ region }}'
RETURNING
Hsm
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
    - name: BackupRetentionPolicy
      description: |
        A policy that defines how the service retains backups.
      value:
        Type: "{{ Type }}"
        Value: "{{ Value }}"
    - name: HsmType
      value: "{{ HsmType }}"
      description: |
        The type of HSM to use in the cluster. The allowed values are hsm1.medium and hsm2m.medium.
    - name: SourceBackupId
      value: "{{ SourceBackupId }}"
      description: |
        The identifier (ID) or the Amazon Resource Name (ARN) of the cluster backup to restore. Use this value to restore the cluster from a backup instead of creating a new cluster. To find the backup ID or ARN, use DescribeBackups. If using a backup in another account, the full ARN must be supplied.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        The identifiers (IDs) of the subnets where you are creating the cluster. You must specify at least one subnet. If you specify multiple subnets, they must meet the following criteria: All subnets must be in the same virtual private cloud (VPC). You can specify only one subnet per Availability Zone.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        The NetworkType to create a cluster with. The allowed values are IPV4 and DUALSTACK.
      valid_values: ['IPV4', 'DUALSTACK']
    - name: TagList
      description: |
        Tags to apply to the CloudHSM cluster during creation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Mode
      value: "{{ Mode }}"
      description: |
        The mode to use in the cluster. The allowed values are FIPS and NON_FIPS.
      valid_values: ['FIPS', 'NON_FIPS']
    - name: ClusterId
      value: "{{ ClusterId }}"
      description: |
        The identifier (ID) of the HSM's cluster. To find the cluster ID, use DescribeClusters.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: |
        The Availability Zone where you are creating the HSM. To find the cluster's Availability Zones, use DescribeClusters.
    - name: IpAddress
      value: "{{ IpAddress }}"
      description: |
        The HSM's IP address. If you specify an IP address, use an available address from the subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify an IP address, one is chosen for you from that subnet.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cluster"
    values={[
        { label: 'modify_cluster', value: 'modify_cluster' }
    ]}
>
<TabItem value="modify_cluster">

Modifies CloudHSM cluster. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.

```sql
UPDATE aws.cloudhsmv2.clusters
SET 
HsmType = '{{ HsmType }}',
BackupRetentionPolicy = '{{ BackupRetentionPolicy }}',
ClusterId = '{{ ClusterId }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required
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

Deletes the specified CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use DescribeClusters. To delete an HSM, use DeleteHsm. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.

```sql
DELETE FROM aws.cloudhsmv2.clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_hsm"
    values={[
        { label: 'delete_hsm', value: 'delete_hsm' },
        { label: 'initialize_cluster', value: 'initialize_cluster' }
    ]}
>
<TabItem value="delete_hsm">

Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use DescribeClusters. Cross-account use: No. You cannot perform this operation on an CloudHSM hsm in a different Amazon Web Services account.

```sql
EXEC aws.cloudhsmv2.clusters.delete_hsm 
@region='{{ region }}' --required 
@@json=
'{
"ClusterId": "{{ ClusterId }}", 
"HsmId": "{{ HsmId }}", 
"EniId": "{{ EniId }}", 
"EniIp": "{{ EniIp }}"
}'
;
```
</TabItem>
<TabItem value="initialize_cluster">

Claims an CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use DescribeClusters. Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.

```sql
EXEC aws.cloudhsmv2.clusters.initialize_cluster 
@region='{{ region }}' --required 
@@json=
'{
"ClusterId": "{{ ClusterId }}", 
"SignedCert": "{{ SignedCert }}", 
"TrustAnchor": "{{ TrustAnchor }}"
}'
;
```
</TabItem>
</Tabs>
