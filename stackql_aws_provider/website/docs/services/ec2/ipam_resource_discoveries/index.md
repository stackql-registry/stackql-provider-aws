--- 
title: ipam_resource_discoveries
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_resource_discoveries
  - ec2
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

Creates, updates, deletes, gets or lists an <code>ipam_resource_discoveries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_resource_discoveries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_resource_discoveries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_resource_discoveries"
    values={[
        { label: 'describe_ipam_resource_discoveries', value: 'describe_ipam_resource_discoveries' }
    ]}
>
<TabItem value="describe_ipam_resource_discoveries">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The resource discovery description.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamResourceDiscoveryArn" /></td>
    <td><code>string</code></td>
    <td>The resource discovery Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>string</code></td>
    <td>The resource discovery ID.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamResourceDiscoveryRegion" /></td>
    <td><code>string</code></td>
    <td>The resource discovery Region.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the resource discovery is the default. The default resource discovery is the resource discovery automatically created when you create an IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingRegions" /></td>
    <td><code>string</code></td>
    <td>The operating Regions for the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationalUnitExclusions" /></td>
    <td><code>string</code></td>
    <td>If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owner.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the resource discovery. create-in-progress - Resource discovery is being created. create-complete - Resource discovery creation is complete. create-failed - Resource discovery creation has failed. modify-in-progress - Resource discovery is being modified. modify-complete - Resource discovery modification is complete. modify-failed - Resource discovery modification has failed. delete-in-progress - Resource discovery is being deleted. delete-complete - Resource discovery deletion is complete. delete-failed - Resource discovery deletion has failed. isolate-in-progress - Amazon Web Services account that created the resource discovery has been removed and the resource discovery is being isolated. isolate-complete - Resource discovery isolation is complete. restore-in-progress - Amazon Web Services account that created the resource discovery and was isolated has been restored.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</td>
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
    <td><a href="#describe_ipam_resource_discoveries"><CopyableCode code="describe_ipam_resource_discoveries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes IPAM resource discoveries. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</td>
</tr>
<tr>
    <td><a href="#create_ipam_resource_discovery"><CopyableCode code="create_ipam_resource_discovery" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-OperatingRegion"><code>OperatingRegion</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</td>
</tr>
<tr>
    <td><a href="#associate_ipam_resource_discovery"><CopyableCode code="associate_ipam_resource_discovery" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Associates an IPAM resource discovery with an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</td>
</tr>
<tr>
    <td><a href="#disassociate_ipam_resource_discovery"><CopyableCode code="disassociate_ipam_resource_discovery" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamResourceDiscoveryAssociationId"><code>IpamResourceDiscoveryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates a resource discovery from an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_resource_discovery"><CopyableCode code="modify_ipam_resource_discovery" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-AddOperatingRegion"><code>AddOperatingRegion</code></a>, <a href="#parameter-RemoveOperatingRegion"><code>RemoveOperatingRegion</code></a>, <a href="#parameter-AddOrganizationalUnitExclusion"><code>AddOrganizationalUnitExclusion</code></a>, <a href="#parameter-RemoveOrganizationalUnitExclusion"><code>RemoveOrganizationalUnitExclusion</code></a></td>
    <td>Modifies a resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</td>
</tr>
<tr>
    <td><a href="#delete_ipam_resource_discovery"><CopyableCode code="delete_ipam_resource_discovery" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</td>
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
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>An IPAM ID.</td>
</tr>
<tr id="parameter-IpamResourceDiscoveryAssociationId">
    <td><CopyableCode code="IpamResourceDiscoveryAssociationId" /></td>
    <td><code>string</code></td>
    <td>A resource discovery association ID.</td>
</tr>
<tr id="parameter-IpamResourceDiscoveryId">
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>string</code></td>
    <td>The IPAM resource discovery ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddOperatingRegion">
    <td><CopyableCode code="AddOperatingRegion" /></td>
    <td><code>array</code></td>
    <td>Add operating Regions to the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</td>
</tr>
<tr id="parameter-AddOrganizationalUnitExclusion">
    <td><CopyableCode code="AddOrganizationalUnitExclusion" /></td>
    <td><code>array</code></td>
    <td>Add an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see Quotas for your IPAM in the Amazon VPC IPAM User Guide. The resulting set of exclusions must not result in "overlap", meaning two or more OU exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in Add or remove OU exclusions in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A client token.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A resource discovery description.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The resource discovery filters.</td>
</tr>
<tr id="parameter-IpamResourceDiscoveryId">
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>array</code></td>
    <td>The IPAM resource discovery IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource discoveries to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-OperatingRegion">
    <td><CopyableCode code="OperatingRegion" /></td>
    <td><code>array</code></td>
    <td>Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</td>
</tr>
<tr id="parameter-RemoveOperatingRegion">
    <td><CopyableCode code="RemoveOperatingRegion" /></td>
    <td><code>array</code></td>
    <td>Remove operating Regions.</td>
</tr>
<tr id="parameter-RemoveOrganizationalUnitExclusion">
    <td><CopyableCode code="RemoveOrganizationalUnitExclusion" /></td>
    <td><code>array</code></td>
    <td>Remove an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see Quotas for your IPAM in the Amazon VPC IPAM User Guide. The resulting set of exclusions must not result in "overlap", meaning two or more OU exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in Add or remove OU exclusions in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>Tag specifications.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_resource_discoveries"
    values={[
        { label: 'describe_ipam_resource_discoveries', value: 'describe_ipam_resource_discoveries' }
    ]}
>
<TabItem value="describe_ipam_resource_discoveries">

Describes IPAM resource discoveries. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.

```sql
SELECT
Description,
IpamResourceDiscoveryArn,
IpamResourceDiscoveryId,
IpamResourceDiscoveryRegion,
IsDefault,
OperatingRegions,
OrganizationalUnitExclusions,
OwnerId,
State,
Tags
FROM aws.ec2.ipam_resource_discoveries
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_resource_discovery"
    values={[
        { label: 'create_ipam_resource_discovery', value: 'create_ipam_resource_discovery' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_resource_discovery">

Creates an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.

```sql
INSERT INTO aws.ec2.ipam_resource_discoveries (
region,
DryRun,
Description,
OperatingRegion,
TagSpecification,
ClientToken
)
SELECT 
'{{ region }}',
'{{ DryRun }}',
'{{ Description }}',
'{{ OperatingRegion }}',
'{{ TagSpecification }}',
'{{ ClientToken }}'
RETURNING
Description,
IpamResourceDiscoveryArn,
IpamResourceDiscoveryId,
IpamResourceDiscoveryRegion,
IsDefault,
OperatingRegions,
OrganizationalUnitExclusions,
OwnerId,
State,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_resource_discoveries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_resource_discoveries resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Description
      value: "{{ Description }}"
      description: A description for the IPAM resource discovery.
      description: A description for the IPAM resource discovery.
    - name: OperatingRegion
      value: "{{ OperatingRegion }}"
      description: Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
      description: Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: Tag specifications for the IPAM resource discovery.
      description: Tag specifications for the IPAM resource discovery.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A client token for the IPAM resource discovery.
      description: A client token for the IPAM resource discovery.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_ipam_resource_discovery"
    values={[
        { label: 'associate_ipam_resource_discovery', value: 'associate_ipam_resource_discovery' },
        { label: 'disassociate_ipam_resource_discovery', value: 'disassociate_ipam_resource_discovery' },
        { label: 'modify_ipam_resource_discovery', value: 'modify_ipam_resource_discovery' }
    ]}
>
<TabItem value="associate_ipam_resource_discovery">

Associates an IPAM resource discovery with an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.

```sql
UPDATE aws.ec2.ipam_resource_discoveries
SET 
-- No updatable properties
WHERE 
IpamId = '{{ IpamId }}' --required
AND IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND TagSpecification = '{{ TagSpecification}}'
AND ClientToken = '{{ ClientToken}}'
RETURNING
IpamArn,
IpamId,
IpamRegion,
IpamResourceDiscoveryAssociationArn,
IpamResourceDiscoveryAssociationId,
IpamResourceDiscoveryId,
IsDefault,
OwnerId,
ResourceDiscoveryStatus,
State,
Tags;
```
</TabItem>
<TabItem value="disassociate_ipam_resource_discovery">

Disassociates a resource discovery from an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.

```sql
UPDATE aws.ec2.ipam_resource_discoveries
SET 
-- No updatable properties
WHERE 
IpamResourceDiscoveryAssociationId = '{{ IpamResourceDiscoveryAssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
IpamArn,
IpamId,
IpamRegion,
IpamResourceDiscoveryAssociationArn,
IpamResourceDiscoveryAssociationId,
IpamResourceDiscoveryId,
IsDefault,
OwnerId,
ResourceDiscoveryStatus,
State,
Tags;
```
</TabItem>
<TabItem value="modify_ipam_resource_discovery">

Modifies a resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.

```sql
UPDATE aws.ec2.ipam_resource_discoveries
SET 
-- No updatable properties
WHERE 
IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Description = '{{ Description}}'
AND AddOperatingRegion = '{{ AddOperatingRegion}}'
AND RemoveOperatingRegion = '{{ RemoveOperatingRegion}}'
AND AddOrganizationalUnitExclusion = '{{ AddOrganizationalUnitExclusion}}'
AND RemoveOrganizationalUnitExclusion = '{{ RemoveOrganizationalUnitExclusion}}'
RETURNING
Description,
IpamResourceDiscoveryArn,
IpamResourceDiscoveryId,
IpamResourceDiscoveryRegion,
IsDefault,
OperatingRegions,
OrganizationalUnitExclusions,
OwnerId,
State,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_resource_discovery"
    values={[
        { label: 'delete_ipam_resource_discovery', value: 'delete_ipam_resource_discovery' }
    ]}
>
<TabItem value="delete_ipam_resource_discovery">

Deletes an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.

```sql
DELETE FROM aws.ec2.ipam_resource_discoveries
WHERE IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
