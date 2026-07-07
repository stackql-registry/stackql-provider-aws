--- 
title: odb_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - odb_networks
  - odb
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

Creates, updates, deletes, gets or lists an <code>odb_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="odb_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.odb_networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_odb_network"
    values={[
        { label: 'get_odb_network', value: 'get_odb_network' },
        { label: 'list_odb_networks', value: 'list_odb_networks' }
    ]}
>
<TabItem value="get_odb_network">

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
    <td><CopyableCode code="availabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Availability Zone (AZ) where the ODB network is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The AZ ID of the AZ where the ODB network is located.</td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetCidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR range of the backup subnet in the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="clientSubnetCidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR range of the client subnet in the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the ODB network was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The domain name for the resources in the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDnsPrefix" /></td>
    <td><code>string</code></td>
    <td>The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2PlacementGroupIds" /></td>
    <td><code>array</code></td>
    <td>The list of EC2 Placement Group IDs associated with your ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="managedServices" /></td>
    <td><code>object</code></td>
    <td>The managed services configuration for the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociDnsForwardingConfigs" /></td>
    <td><code>array</code></td>
    <td>The DNS resolver endpoint in OCI for forwarding DNS queries for the ociPrivateZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="ociNetworkAnchorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OCI network anchor for the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociNetworkAnchorUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the OCI network anchor for the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociResourceAnchorName" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor that's associated with the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociVcnId" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) for the Virtual Cloud Network (VCN) that's associated with the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociVcnUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for the VCN that's associated with the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="peeredCidrs" /></td>
    <td><code>array</code></td>
    <td>The list of CIDR ranges from the peered VPC that are allowed access to the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="percentProgress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the ODB network, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the ODB network. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the ODB network.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_odb_networks">

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
    <td><CopyableCode code="availabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Availability Zone (AZ) where the ODB network is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The AZ ID of the AZ where the ODB network is located.</td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetCidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR range of the backup subnet in the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="clientSubnetCidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR range of the client subnet in the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the ODB network was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The domain name for the resources in the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDnsPrefix" /></td>
    <td><code>string</code></td>
    <td>The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2PlacementGroupIds" /></td>
    <td><code>array</code></td>
    <td>The list of EC2 Placement Group IDs associated with your ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="managedServices" /></td>
    <td><code>object</code></td>
    <td>The managed services configuration for the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociDnsForwardingConfigs" /></td>
    <td><code>array</code></td>
    <td>The DNS resolver endpoint in OCI for forwarding DNS queries for the ociPrivateZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="ociNetworkAnchorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OCI network anchor for the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociNetworkAnchorUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the OCI network anchor for the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociResourceAnchorName" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor associated with the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociVcnId" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) for the Virtual Cloud Network (VCN) associated with the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="ociVcnUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for the VCN that's associated with the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="peeredCidrs" /></td>
    <td><code>array</code></td>
    <td>The list of CIDR ranges from the peered VPC that are allowed access to the ODB network.</td>
</tr>
<tr>
    <td><CopyableCode code="percentProgress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the ODB network, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the ODB network. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the ODB network.</td>
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
    <td><a href="#get_odb_network"><CopyableCode code="get_odb_network" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified ODB network.</td>
</tr>
<tr>
    <td><a href="#list_odb_networks"><CopyableCode code="list_odb_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the ODB networks owned by your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_odb_network"><CopyableCode code="create_odb_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-clientSubnetCidr"><code>clientSubnetCidr</code></a></td>
    <td></td>
    <td>Creates an ODB network.</td>
</tr>
<tr>
    <td><a href="#update_odb_network"><CopyableCode code="update_odb_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-odbNetworkId"><code>odbNetworkId</code></a></td>
    <td></td>
    <td>Updates properties of a specified ODB network.</td>
</tr>
<tr>
    <td><a href="#delete_odb_network"><CopyableCode code="delete_odb_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified ODB network.</td>
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
    defaultValue="get_odb_network"
    values={[
        { label: 'get_odb_network', value: 'get_odb_network' },
        { label: 'list_odb_networks', value: 'list_odb_networks' }
    ]}
>
<TabItem value="get_odb_network">

Returns information about the specified ODB network.

```sql
SELECT
availabilityZone,
availabilityZoneId,
backupSubnetCidr,
clientSubnetCidr,
createdAt,
customDomainName,
defaultDnsPrefix,
displayName,
ec2PlacementGroupIds,
managedServices,
ociDnsForwardingConfigs,
ociNetworkAnchorId,
ociNetworkAnchorUrl,
ociResourceAnchorName,
ociVcnId,
ociVcnUrl,
odbNetworkArn,
odbNetworkId,
peeredCidrs,
percentProgress,
status,
statusReason
FROM aws.odb.odb_networks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_odb_networks">

Returns information about the ODB networks owned by your Amazon Web Services account.

```sql
SELECT
availabilityZone,
availabilityZoneId,
backupSubnetCidr,
clientSubnetCidr,
createdAt,
customDomainName,
defaultDnsPrefix,
displayName,
ec2PlacementGroupIds,
managedServices,
ociDnsForwardingConfigs,
ociNetworkAnchorId,
ociNetworkAnchorUrl,
ociResourceAnchorName,
ociVcnId,
ociVcnUrl,
odbNetworkArn,
odbNetworkId,
peeredCidrs,
percentProgress,
status,
statusReason
FROM aws.odb.odb_networks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_odb_network"
    values={[
        { label: 'create_odb_network', value: 'create_odb_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_odb_network">

Creates an ODB network.

```sql
INSERT INTO aws.odb.odb_networks (
displayName,
availabilityZone,
availabilityZoneId,
clientSubnetCidr,
backupSubnetCidr,
customDomainName,
defaultDnsPrefix,
clientToken,
s3Access,
zeroEtlAccess,
stsAccess,
kmsAccess,
s3PolicyDocument,
stsPolicyDocument,
kmsPolicyDocument,
crossRegionS3RestoreSourcesToEnable,
tags,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ availabilityZone }}',
'{{ availabilityZoneId }}',
'{{ clientSubnetCidr }}' /* required */,
'{{ backupSubnetCidr }}',
'{{ customDomainName }}',
'{{ defaultDnsPrefix }}',
'{{ clientToken }}',
'{{ s3Access }}',
'{{ zeroEtlAccess }}',
'{{ stsAccess }}',
'{{ kmsAccess }}',
'{{ s3PolicyDocument }}',
'{{ stsPolicyDocument }}',
'{{ kmsPolicyDocument }}',
'{{ crossRegionS3RestoreSourcesToEnable }}',
'{{ tags }}',
'{{ region }}'
RETURNING
displayName,
odbNetworkId,
status,
statusReason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: odb_networks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the odb_networks resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the ODB network.
    - name: availabilityZone
      value: "{{ availabilityZone }}"
      description: |
        The Amazon Web Services Availability Zone (AZ) where the ODB network is located. This operation requires that you specify a value for either availabilityZone or availabilityZoneId.
    - name: availabilityZoneId
      value: "{{ availabilityZoneId }}"
      description: |
        The AZ ID of the AZ where the ODB network is located. This operation requires that you specify a value for either availabilityZone or availabilityZoneId.
    - name: clientSubnetCidr
      value: "{{ clientSubnetCidr }}"
      description: |
        The CIDR range of the client subnet for the ODB network. Constraints: Must not overlap with the CIDR range of the backup subnet. Must not overlap with the CIDR ranges of the VPCs that are connected to the ODB network. Must not use the following CIDR ranges that are reserved by OCI: 100.106.0.0/16 and 100.107.0.0/16 169.254.0.0/16 224.0.0.0 - 239.255.255.255 240.0.0.0 - 255.255.255.255
    - name: backupSubnetCidr
      value: "{{ backupSubnetCidr }}"
      description: |
        The CIDR range of the backup subnet for the ODB network. Constraints: Must not overlap with the CIDR range of the client subnet. Must not overlap with the CIDR ranges of the VPCs that are connected to the ODB network. Must not use the following CIDR ranges that are reserved by OCI: 100.106.0.0/16 and 100.107.0.0/16 169.254.0.0/16 224.0.0.0 - 239.255.255.255 240.0.0.0 - 255.255.255.255
    - name: customDomainName
      value: "{{ customDomainName }}"
      description: |
        The domain name to use for the resources in the ODB network.
    - name: defaultDnsPrefix
      value: "{{ defaultDnsPrefix }}"
      description: |
        The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency. The client token is valid for up to 24 hours after it's first used.
    - name: s3Access
      value: "{{ s3Access }}"
      description: |
        Specifies the configuration for Amazon S3 access from the ODB network.
      valid_values: ['ENABLED', 'DISABLED']
    - name: zeroEtlAccess
      value: "{{ zeroEtlAccess }}"
      description: |
        Specifies the configuration for Zero-ETL access from the ODB network.
      valid_values: ['ENABLED', 'DISABLED']
    - name: stsAccess
      value: "{{ stsAccess }}"
      description: |
        The Amazon Web Services Security Token Service (STS) access configuration for the ODB network.
      valid_values: ['ENABLED', 'DISABLED']
    - name: kmsAccess
      value: "{{ kmsAccess }}"
      description: |
        The Amazon Web Services Key Management Service (KMS) access configuration for the ODB network.
      valid_values: ['ENABLED', 'DISABLED']
    - name: s3PolicyDocument
      value: "{{ s3PolicyDocument }}"
      description: |
        Specifies the endpoint policy for Amazon S3 access from the ODB network.
    - name: stsPolicyDocument
      value: "{{ stsPolicyDocument }}"
      description: |
        The Amazon Web Services Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.
    - name: kmsPolicyDocument
      value: "{{ kmsPolicyDocument }}"
      description: |
        The Amazon Web Services Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.
    - name: crossRegionS3RestoreSourcesToEnable
      value:
        - "{{ crossRegionS3RestoreSourcesToEnable }}"
      description: |
        The cross-Region Amazon S3 restore sources to enable for the ODB network.
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of resource tags to apply to the ODB network.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_odb_network"
    values={[
        { label: 'update_odb_network', value: 'update_odb_network' }
    ]}
>
<TabItem value="update_odb_network">

Updates properties of a specified ODB network.

```sql
UPDATE aws.odb.odb_networks
SET 
odbNetworkId = '{{ odbNetworkId }}',
displayName = '{{ displayName }}',
peeredCidrsToBeAdded = '{{ peeredCidrsToBeAdded }}',
peeredCidrsToBeRemoved = '{{ peeredCidrsToBeRemoved }}',
s3Access = '{{ s3Access }}',
zeroEtlAccess = '{{ zeroEtlAccess }}',
stsAccess = '{{ stsAccess }}',
kmsAccess = '{{ kmsAccess }}',
s3PolicyDocument = '{{ s3PolicyDocument }}',
stsPolicyDocument = '{{ stsPolicyDocument }}',
kmsPolicyDocument = '{{ kmsPolicyDocument }}',
crossRegionS3RestoreSourcesToEnable = '{{ crossRegionS3RestoreSourcesToEnable }}',
crossRegionS3RestoreSourcesToDisable = '{{ crossRegionS3RestoreSourcesToDisable }}'
WHERE 
region = '{{ region }}' --required
AND odbNetworkId = '{{ odbNetworkId }}' --required
RETURNING
displayName,
odbNetworkId,
status,
statusReason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_odb_network"
    values={[
        { label: 'delete_odb_network', value: 'delete_odb_network' }
    ]}
>
<TabItem value="delete_odb_network">

Deletes the specified ODB network.

```sql
DELETE FROM aws.odb.odb_networks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
