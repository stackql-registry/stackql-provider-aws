--- 
title: managed_prefix_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_prefix_lists
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

Creates, updates, deletes, gets or lists a <code>managed_prefix_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_prefix_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.managed_prefix_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_managed_prefix_lists"
    values={[
        { label: 'describe_managed_prefix_lists', value: 'describe_managed_prefix_lists' }
    ]}
>
<TabItem value="describe_managed_prefix_lists">

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
    <td><CopyableCode code="AddressFamily" /></td>
    <td><code>string</code></td>
    <td>The IP address version.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPrefixListResolverSyncEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether synchronization with an IPAM prefix list resolver is enabled for this managed prefix list. When enabled, the prefix list CIDRs are automatically updated based on the resolver's CIDR selection rules.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPrefixListResolverTargetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver target associated with this managed prefix list. When set, this prefix list becomes an IPAM managed prefix list. An IPAM-managed prefix list is a customer-managed prefix list that has been associated with an IPAM prefix list resolver target. When a prefix list becomes IPAM managed, its CIDRs are automatically synchronized based on the IPAM prefix list resolver's CIDR selection rules, and direct CIDR modifications are restricted.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxEntries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of entries for the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owner of the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="PrefixListArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="PrefixListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="PrefixListName" /></td>
    <td><code>string</code></td>
    <td>The name of the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="StateMessage" /></td>
    <td><code>string</code></td>
    <td>The state message.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The version of the prefix list.</td>
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
    <td><a href="#describe_managed_prefix_lists"><CopyableCode code="describe_managed_prefix_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PrefixListId"><code>PrefixListId</code></a></td>
    <td>Describes your managed prefix lists and any Amazon Web Services-managed prefix lists.</td>
</tr>
<tr>
    <td><a href="#create_managed_prefix_list"><CopyableCode code="create_managed_prefix_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-PrefixListName"><code>PrefixListName</code></a>, <a href="#parameter-MaxEntries"><code>MaxEntries</code></a>, <a href="#parameter-AddressFamily"><code>AddressFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Entry"><code>Entry</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates a managed prefix list. You can specify entries for the prefix list. Each entry consists of a CIDR block and an optional description.</td>
</tr>
<tr>
    <td><a href="#modify_managed_prefix_list"><CopyableCode code="modify_managed_prefix_list" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-PrefixListId"><code>PrefixListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a>, <a href="#parameter-PrefixListName"><code>PrefixListName</code></a>, <a href="#parameter-AddEntry"><code>AddEntry</code></a>, <a href="#parameter-RemoveEntry"><code>RemoveEntry</code></a>, <a href="#parameter-MaxEntries"><code>MaxEntries</code></a>, <a href="#parameter-IpamPrefixListResolverSyncEnabled"><code>IpamPrefixListResolverSyncEnabled</code></a></td>
    <td>Modifies the specified managed prefix list. Adding or removing entries in a prefix list creates a new version of the prefix list. Changing the name of the prefix list does not affect the version. If you specify a current version number that does not match the true current version number, the request fails.</td>
</tr>
<tr>
    <td><a href="#delete_managed_prefix_list"><CopyableCode code="delete_managed_prefix_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PrefixListId"><code>PrefixListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.</td>
</tr>
<tr>
    <td><a href="#restore_managed_prefix_list_version"><CopyableCode code="restore_managed_prefix_list_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-PrefixListId"><code>PrefixListId</code></a>, <a href="#parameter-PreviousVersion"><code>PreviousVersion</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.</td>
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
<tr id="parameter-AddressFamily">
    <td><CopyableCode code="AddressFamily" /></td>
    <td><code>string</code></td>
    <td>The IP address type. Valid Values: IPv4 | IPv6</td>
</tr>
<tr id="parameter-CurrentVersion">
    <td><CopyableCode code="CurrentVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current version number for the prefix list.</td>
</tr>
<tr id="parameter-MaxEntries">
    <td><CopyableCode code="MaxEntries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of entries for the prefix list.</td>
</tr>
<tr id="parameter-PrefixListId">
    <td><CopyableCode code="PrefixListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list.</td>
</tr>
<tr id="parameter-PrefixListName">
    <td><CopyableCode code="PrefixListName" /></td>
    <td><code>string</code></td>
    <td>A name for the prefix list. Constraints: Up to 255 characters in length. The name cannot start with com.amazonaws.</td>
</tr>
<tr id="parameter-PreviousVersion">
    <td><CopyableCode code="PreviousVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version to restore.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddEntry">
    <td><CopyableCode code="AddEntry" /></td>
    <td><code>array</code></td>
    <td>One or more entries to add to the prefix list.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency. Constraints: Up to 255 UTF-8 characters in length.</td>
</tr>
<tr id="parameter-CurrentVersion">
    <td><CopyableCode code="CurrentVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current version of the prefix list.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Entry">
    <td><CopyableCode code="Entry" /></td>
    <td><code>array</code></td>
    <td>One or more entries for the prefix list.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. owner-id - The ID of the prefix list owner. prefix-list-id - The ID of the prefix list. prefix-list-name - The name of the prefix list.</td>
</tr>
<tr id="parameter-IpamPrefixListResolverSyncEnabled">
    <td><CopyableCode code="IpamPrefixListResolverSyncEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether synchronization with an IPAM prefix list resolver should be enabled for this managed prefix list. When enabled, the prefix list CIDRs are automatically updated based on the associated resolver's CIDR selection rules.</td>
</tr>
<tr id="parameter-MaxEntries">
    <td><CopyableCode code="MaxEntries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of entries for the prefix list. You cannot modify the entries of a prefix list and modify the size of a prefix list at the same time. If any of the resources that reference the prefix list cannot support the new maximum size, the modify operation fails. Check the state message for the IDs of the first ten resources that do not support the new maximum size.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PrefixListId">
    <td><CopyableCode code="PrefixListId" /></td>
    <td><code>array</code></td>
    <td>One or more prefix list IDs.</td>
</tr>
<tr id="parameter-PrefixListName">
    <td><CopyableCode code="PrefixListName" /></td>
    <td><code>string</code></td>
    <td>A name for the prefix list.</td>
</tr>
<tr id="parameter-RemoveEntry">
    <td><CopyableCode code="RemoveEntry" /></td>
    <td><code>array</code></td>
    <td>One or more entries to remove from the prefix list.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the prefix list during creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_managed_prefix_lists"
    values={[
        { label: 'describe_managed_prefix_lists', value: 'describe_managed_prefix_lists' }
    ]}
>
<TabItem value="describe_managed_prefix_lists">

Describes your managed prefix lists and any Amazon Web Services-managed prefix lists.

```sql
SELECT
AddressFamily,
IpamPrefixListResolverSyncEnabled,
IpamPrefixListResolverTargetId,
MaxEntries,
OwnerId,
PrefixListArn,
PrefixListId,
PrefixListName,
State,
StateMessage,
Tags,
Version
FROM aws.ec2.managed_prefix_lists
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND PrefixListId = '{{ PrefixListId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_managed_prefix_list"
    values={[
        { label: 'create_managed_prefix_list', value: 'create_managed_prefix_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_managed_prefix_list">

Creates a managed prefix list. You can specify entries for the prefix list. Each entry consists of a CIDR block and an optional description.

```sql
INSERT INTO aws.ec2.managed_prefix_lists (
PrefixListName,
MaxEntries,
AddressFamily,
region,
DryRun,
Entry,
TagSpecification,
ClientToken
)
SELECT 
'{{ PrefixListName }}',
'{{ MaxEntries }}',
'{{ AddressFamily }}',
'{{ region }}',
'{{ DryRun }}',
'{{ Entry }}',
'{{ TagSpecification }}',
'{{ ClientToken }}'
RETURNING
AddressFamily,
IpamPrefixListResolverSyncEnabled,
IpamPrefixListResolverTargetId,
MaxEntries,
OwnerId,
PrefixListArn,
PrefixListId,
PrefixListName,
State,
StateMessage,
Tags,
Version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: managed_prefix_lists
  props:
    - name: PrefixListName
      value: "{{ PrefixListName }}"
      description: Required parameter for the managed_prefix_lists resource.
    - name: MaxEntries
      value: {{ MaxEntries }}
      description: Required parameter for the managed_prefix_lists resource.
    - name: AddressFamily
      value: "{{ AddressFamily }}"
      description: Required parameter for the managed_prefix_lists resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the managed_prefix_lists resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Entry
      value: "{{ Entry }}"
      description: One or more entries for the prefix list.
      description: One or more entries for the prefix list.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the prefix list during creation.
      description: The tags to apply to the prefix list during creation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency. Constraints: Up to 255 UTF-8 characters in length.
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency. Constraints: Up to 255 UTF-8 characters in length.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_managed_prefix_list"
    values={[
        { label: 'modify_managed_prefix_list', value: 'modify_managed_prefix_list' }
    ]}
>
<TabItem value="modify_managed_prefix_list">

Modifies the specified managed prefix list. Adding or removing entries in a prefix list creates a new version of the prefix list. Changing the name of the prefix list does not affect the version. If you specify a current version number that does not match the true current version number, the request fails.

```sql
UPDATE aws.ec2.managed_prefix_lists
SET 
-- No updatable properties
WHERE 
PrefixListId = '{{ PrefixListId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND CurrentVersion = '{{ CurrentVersion}}'
AND PrefixListName = '{{ PrefixListName}}'
AND AddEntry = '{{ AddEntry}}'
AND RemoveEntry = '{{ RemoveEntry}}'
AND MaxEntries = '{{ MaxEntries}}'
AND IpamPrefixListResolverSyncEnabled = {{ IpamPrefixListResolverSyncEnabled}}
RETURNING
AddressFamily,
IpamPrefixListResolverSyncEnabled,
IpamPrefixListResolverTargetId,
MaxEntries,
OwnerId,
PrefixListArn,
PrefixListId,
PrefixListName,
State,
StateMessage,
Tags,
Version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_managed_prefix_list"
    values={[
        { label: 'delete_managed_prefix_list', value: 'delete_managed_prefix_list' }
    ]}
>
<TabItem value="delete_managed_prefix_list">

Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.

```sql
DELETE FROM aws.ec2.managed_prefix_lists
WHERE PrefixListId = '{{ PrefixListId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_managed_prefix_list_version"
    values={[
        { label: 'restore_managed_prefix_list_version', value: 'restore_managed_prefix_list_version' }
    ]}
>
<TabItem value="restore_managed_prefix_list_version">

Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.

```sql
EXEC aws.ec2.managed_prefix_lists.restore_managed_prefix_list_version 
@PrefixListId='{{ PrefixListId }}' --required, 
@PreviousVersion='{{ PreviousVersion }}' --required, 
@CurrentVersion='{{ CurrentVersion }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
