--- 
title: ipam_prefix_list_resolver_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_prefix_list_resolver_targets
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

Creates, updates, deletes, gets or lists an <code>ipam_prefix_list_resolver_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_prefix_list_resolver_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_prefix_list_resolver_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_prefix_list_resolver_targets"
    values={[
        { label: 'describe_ipam_prefix_list_resolver_targets', value: 'describe_ipam_prefix_list_resolver_targets' }
    ]}
>
<TabItem value="describe_ipam_prefix_list_resolver_targets">

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
    <td><CopyableCode code="DesiredVersion" /></td>
    <td><code>integer</code></td>
    <td>The desired version of the prefix list that this target should synchronize with.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPrefixListResolverId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver associated with this target.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPrefixListResolverTargetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IPAM prefix list resolver target.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPrefixListResolverTargetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver target.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSyncedVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the prefix list that was last successfully synchronized by this target.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the IPAM prefix list resolver target.</td>
</tr>
<tr>
    <td><CopyableCode code="PrefixListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed prefix list associated with this target.</td>
</tr>
<tr>
    <td><CopyableCode code="PrefixListRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the prefix list associated with this target is located.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the IPAM prefix list resolver target. Valid values include create-in-progress, create-complete, create-failed, modify-in-progress, modify-complete, modify-failed, delete-in-progress, delete-complete, and delete-failed.</td>
</tr>
<tr>
    <td><CopyableCode code="StateMessage" /></td>
    <td><code>string</code></td>
    <td>A message describing the current state of the IPAM prefix list resolver target, including any error information.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the IPAM prefix list resolver target.</td>
</tr>
<tr>
    <td><CopyableCode code="TrackLatestVersion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this target automatically tracks the latest version of the prefix list.</td>
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
    <td><a href="#describe_ipam_prefix_list_resolver_targets"><CopyableCode code="describe_ipam_prefix_list_resolver_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IpamPrefixListResolverTargetId"><code>IpamPrefixListResolverTargetId</code></a>, <a href="#parameter-IpamPrefixListResolverId"><code>IpamPrefixListResolverId</code></a></td>
    <td>Describes one or more IPAM prefix list resolver Targets. Use this operation to view the configuration and status of resolver targets.</td>
</tr>
<tr>
    <td><a href="#create_ipam_prefix_list_resolver_target"><CopyableCode code="create_ipam_prefix_list_resolver_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamPrefixListResolverId"><code>IpamPrefixListResolverId</code></a>, <a href="#parameter-PrefixListId"><code>PrefixListId</code></a>, <a href="#parameter-PrefixListRegion"><code>PrefixListRegion</code></a>, <a href="#parameter-TrackLatestVersion"><code>TrackLatestVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DesiredVersion"><code>DesiredVersion</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates an IPAM prefix list resolver target. An IPAM prefix list resolver target is an association between a specific customer-managed prefix list and an IPAM prefix list resolver. The target enables the resolver to synchronize CIDRs selected by its rules into the specified prefix list, which can then be referenced in Amazon Web Services resources. For more information about IPAM prefix list resolver, see Automate prefix list updates with IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_prefix_list_resolver_target"><CopyableCode code="modify_ipam_prefix_list_resolver_target" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPrefixListResolverTargetId"><code>IpamPrefixListResolverTargetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DesiredVersion"><code>DesiredVersion</code></a>, <a href="#parameter-TrackLatestVersion"><code>TrackLatestVersion</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Modifies an IPAM prefix list resolver target. You can update version tracking settings and the desired version of the target prefix list.</td>
</tr>
<tr>
    <td><a href="#delete_ipam_prefix_list_resolver_target"><CopyableCode code="delete_ipam_prefix_list_resolver_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamPrefixListResolverTargetId"><code>IpamPrefixListResolverTargetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an IPAM prefix list resolver target. This removes the association between the resolver and the managed prefix list, stopping automatic CIDR synchronization. For more information about IPAM prefix list resolver, see Automate prefix list updates with IPAM in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-IpamPrefixListResolverId">
    <td><CopyableCode code="IpamPrefixListResolverId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver that will manage the synchronization of CIDRs to the target prefix list.</td>
</tr>
<tr id="parameter-IpamPrefixListResolverTargetId">
    <td><CopyableCode code="IpamPrefixListResolverTargetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver target to delete.</td>
</tr>
<tr id="parameter-PrefixListId">
    <td><CopyableCode code="PrefixListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed prefix list that will be synchronized with CIDRs selected by the IPAM prefix list resolver. This prefix list becomes an IPAM managed prefix list. An IPAM-managed prefix list is a customer-managed prefix list that has been associated with an IPAM prefix list resolver target. When a prefix list becomes IPAM managed, its CIDRs are automatically synchronized based on the IPAM prefix list resolver's CIDR selection rules, and direct CIDR modifications are restricted.</td>
</tr>
<tr id="parameter-PrefixListRegion">
    <td><CopyableCode code="PrefixListRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the prefix list is located. This is required when referencing a prefix list in a different Region.</td>
</tr>
<tr id="parameter-TrackLatestVersion">
    <td><CopyableCode code="TrackLatestVersion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the resolver target should automatically track the latest version of the prefix list. When enabled, the target will always synchronize with the most current version of the prefix list. Choose this for automatic updates when you want your prefix lists to stay current with infrastructure changes without manual intervention.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DesiredVersion">
    <td><CopyableCode code="DesiredVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The desired version of the prefix list to target. This allows you to pin the target to a specific version.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to limit the results.</td>
</tr>
<tr id="parameter-IpamPrefixListResolverId">
    <td><CopyableCode code="IpamPrefixListResolverId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver to filter targets by. Only targets associated with this resolver will be returned.</td>
</tr>
<tr id="parameter-IpamPrefixListResolverTargetId">
    <td><CopyableCode code="IpamPrefixListResolverTargetId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the IPAM prefix list resolver Targets to describe. If not specified, all targets in your account are described.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the IPAM prefix list resolver target during creation. Tags help you organize and manage your Amazon Web Services resources.</td>
</tr>
<tr id="parameter-TrackLatestVersion">
    <td><CopyableCode code="TrackLatestVersion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the resolver target should automatically track the latest version of the prefix list. When enabled, the target will always synchronize with the most current version. Choose this for automatic updates when you want your prefix lists to stay current with infrastructure changes without manual intervention.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_prefix_list_resolver_targets"
    values={[
        { label: 'describe_ipam_prefix_list_resolver_targets', value: 'describe_ipam_prefix_list_resolver_targets' }
    ]}
>
<TabItem value="describe_ipam_prefix_list_resolver_targets">

Describes one or more IPAM prefix list resolver Targets. Use this operation to view the configuration and status of resolver targets.

```sql
SELECT
DesiredVersion,
IpamPrefixListResolverId,
IpamPrefixListResolverTargetArn,
IpamPrefixListResolverTargetId,
LastSyncedVersion,
OwnerId,
PrefixListId,
PrefixListRegion,
State,
StateMessage,
Tags,
TrackLatestVersion
FROM aws.ec2.ipam_prefix_list_resolver_targets
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IpamPrefixListResolverTargetId = '{{ IpamPrefixListResolverTargetId }}'
AND IpamPrefixListResolverId = '{{ IpamPrefixListResolverId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_prefix_list_resolver_target"
    values={[
        { label: 'create_ipam_prefix_list_resolver_target', value: 'create_ipam_prefix_list_resolver_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_prefix_list_resolver_target">

Creates an IPAM prefix list resolver target. An IPAM prefix list resolver target is an association between a specific customer-managed prefix list and an IPAM prefix list resolver. The target enables the resolver to synchronize CIDRs selected by its rules into the specified prefix list, which can then be referenced in Amazon Web Services resources. For more information about IPAM prefix list resolver, see Automate prefix list updates with IPAM in the Amazon VPC IPAM User Guide.

```sql
INSERT INTO aws.ec2.ipam_prefix_list_resolver_targets (
IpamPrefixListResolverId,
PrefixListId,
PrefixListRegion,
TrackLatestVersion,
region,
DryRun,
DesiredVersion,
TagSpecification,
ClientToken
)
SELECT 
'{{ IpamPrefixListResolverId }}',
'{{ PrefixListId }}',
'{{ PrefixListRegion }}',
'{{ TrackLatestVersion }}',
'{{ region }}',
'{{ DryRun }}',
'{{ DesiredVersion }}',
'{{ TagSpecification }}',
'{{ ClientToken }}'
RETURNING
DesiredVersion,
IpamPrefixListResolverId,
IpamPrefixListResolverTargetArn,
IpamPrefixListResolverTargetId,
LastSyncedVersion,
OwnerId,
PrefixListId,
PrefixListRegion,
State,
StateMessage,
Tags,
TrackLatestVersion
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_prefix_list_resolver_targets
  props:
    - name: IpamPrefixListResolverId
      value: "{{ IpamPrefixListResolverId }}"
      description: Required parameter for the ipam_prefix_list_resolver_targets resource.
    - name: PrefixListId
      value: "{{ PrefixListId }}"
      description: Required parameter for the ipam_prefix_list_resolver_targets resource.
    - name: PrefixListRegion
      value: "{{ PrefixListRegion }}"
      description: Required parameter for the ipam_prefix_list_resolver_targets resource.
    - name: TrackLatestVersion
      value: {{ TrackLatestVersion }}
      description: Required parameter for the ipam_prefix_list_resolver_targets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_prefix_list_resolver_targets resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: DesiredVersion
      value: "{{ DesiredVersion }}"
      description: The specific version of the prefix list to target. If not specified, the resolver will target the latest version.
      description: The specific version of the prefix list to target. If not specified, the resolver will target the latest version.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the IPAM prefix list resolver target during creation. Tags help you organize and manage your Amazon Web Services resources.
      description: The tags to apply to the IPAM prefix list resolver target during creation. Tags help you organize and manage your Amazon Web Services resources.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam_prefix_list_resolver_target"
    values={[
        { label: 'modify_ipam_prefix_list_resolver_target', value: 'modify_ipam_prefix_list_resolver_target' }
    ]}
>
<TabItem value="modify_ipam_prefix_list_resolver_target">

Modifies an IPAM prefix list resolver target. You can update version tracking settings and the desired version of the target prefix list.

```sql
UPDATE aws.ec2.ipam_prefix_list_resolver_targets
SET 
-- No updatable properties
WHERE 
IpamPrefixListResolverTargetId = '{{ IpamPrefixListResolverTargetId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND DesiredVersion = '{{ DesiredVersion}}'
AND TrackLatestVersion = {{ TrackLatestVersion}}
AND ClientToken = '{{ ClientToken}}'
RETURNING
DesiredVersion,
IpamPrefixListResolverId,
IpamPrefixListResolverTargetArn,
IpamPrefixListResolverTargetId,
LastSyncedVersion,
OwnerId,
PrefixListId,
PrefixListRegion,
State,
StateMessage,
Tags,
TrackLatestVersion;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_prefix_list_resolver_target"
    values={[
        { label: 'delete_ipam_prefix_list_resolver_target', value: 'delete_ipam_prefix_list_resolver_target' }
    ]}
>
<TabItem value="delete_ipam_prefix_list_resolver_target">

Deletes an IPAM prefix list resolver target. This removes the association between the resolver and the managed prefix list, stopping automatic CIDR synchronization. For more information about IPAM prefix list resolver, see Automate prefix list updates with IPAM in the Amazon VPC IPAM User Guide.

```sql
DELETE FROM aws.ec2.ipam_prefix_list_resolver_targets
WHERE IpamPrefixListResolverTargetId = '{{ IpamPrefixListResolverTargetId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
