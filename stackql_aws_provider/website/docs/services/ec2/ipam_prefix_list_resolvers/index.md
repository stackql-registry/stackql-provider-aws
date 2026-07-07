--- 
title: ipam_prefix_list_resolvers
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_prefix_list_resolvers
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

Creates, updates, deletes, gets or lists an <code>ipam_prefix_list_resolvers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_prefix_list_resolvers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_prefix_list_resolvers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_prefix_list_resolvers"
    values={[
        { label: 'describe_ipam_prefix_list_resolvers', value: 'describe_ipam_prefix_list_resolvers' }
    ]}
>
<TabItem value="describe_ipam_prefix_list_resolvers">

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
    <td>The address family (IPv4 or IPv6) for the IPAM prefix list resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the IPAM prefix list resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IPAM associated with this resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPrefixListResolverArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IPAM prefix list resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPrefixListResolverId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the associated IPAM is located.</td>
</tr>
<tr>
    <td><CopyableCode code="LastVersionCreationStatus" /></td>
    <td><code>string</code></td>
    <td>The status for the last time a version was created. Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.</td>
</tr>
<tr>
    <td><CopyableCode code="LastVersionCreationStatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message for the last time a version was created. Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the IPAM prefix list resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the IPAM prefix list resolver. Valid values include create-in-progress, create-complete, create-failed, modify-in-progress, modify-complete, modify-failed, delete-in-progress, delete-complete, and delete-failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the IPAM prefix list resolver.</td>
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
    <td><a href="#describe_ipam_prefix_list_resolvers"><CopyableCode code="describe_ipam_prefix_list_resolvers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IpamPrefixListResolverId"><code>IpamPrefixListResolverId</code></a></td>
    <td>Describes one or more IPAM prefix list resolvers. Use this operation to view the configuration, status, and properties of your resolvers.</td>
</tr>
<tr>
    <td><a href="#create_ipam_prefix_list_resolver"><CopyableCode code="create_ipam_prefix_list_resolver" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-AddressFamily"><code>AddressFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Rule"><code>Rule</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates an IPAM prefix list resolver. An IPAM prefix list resolver is a component that manages the synchronization between IPAM's CIDR selection rules and customer-managed prefix lists. It automates connectivity configurations by selecting CIDRs from IPAM's database based on your business logic and synchronizing them with prefix lists used in resources such as VPC route tables and security groups. For more information about IPAM prefix list resolver, see Automate prefix list updates with IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_prefix_list_resolver"><CopyableCode code="modify_ipam_prefix_list_resolver" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPrefixListResolverId"><code>IpamPrefixListResolverId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td>Modifies an IPAM prefix list resolver. You can update the description and CIDR selection rules. Changes to rules will trigger re-evaluation and potential updates to associated prefix lists.</td>
</tr>
<tr>
    <td><a href="#delete_ipam_prefix_list_resolver"><CopyableCode code="delete_ipam_prefix_list_resolver" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamPrefixListResolverId"><code>IpamPrefixListResolverId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an IPAM prefix list resolver. Before deleting a resolver, you must first delete all resolver targets associated with it.</td>
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
    <td>The address family for the IPAM prefix list resolver. Valid values are ipv4 and ipv6. You must create separate resolvers for IPv4 and IPv6 CIDRs as they cannot be mixed in the same resolver.</td>
</tr>
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM that will serve as the source of the IP address database for CIDR selection. The IPAM must be in the Advanced tier to use this feature.</td>
</tr>
<tr id="parameter-IpamPrefixListResolverId">
    <td><CopyableCode code="IpamPrefixListResolverId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver to delete.</td>
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
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A new description for the IPAM prefix list resolver.</td>
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
    <td><code>array</code></td>
    <td>The IDs of the IPAM prefix list resolvers to describe. If not specified, all resolvers in your account are described.</td>
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
<tr id="parameter-Rule">
    <td><CopyableCode code="Rule" /></td>
    <td><code>array</code></td>
    <td>The updated CIDR selection rules for the resolver. These rules replace the existing rules entirely.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the IPAM prefix list resolver during creation. Tags help you organize and manage your Amazon Web Services resources.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_prefix_list_resolvers"
    values={[
        { label: 'describe_ipam_prefix_list_resolvers', value: 'describe_ipam_prefix_list_resolvers' }
    ]}
>
<TabItem value="describe_ipam_prefix_list_resolvers">

Describes one or more IPAM prefix list resolvers. Use this operation to view the configuration, status, and properties of your resolvers.

```sql
SELECT
AddressFamily,
Description,
IpamArn,
IpamPrefixListResolverArn,
IpamPrefixListResolverId,
IpamRegion,
LastVersionCreationStatus,
LastVersionCreationStatusMessage,
OwnerId,
State,
Tags
FROM aws.ec2.ipam_prefix_list_resolvers
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IpamPrefixListResolverId = '{{ IpamPrefixListResolverId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_prefix_list_resolver"
    values={[
        { label: 'create_ipam_prefix_list_resolver', value: 'create_ipam_prefix_list_resolver' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_prefix_list_resolver">

Creates an IPAM prefix list resolver. An IPAM prefix list resolver is a component that manages the synchronization between IPAM's CIDR selection rules and customer-managed prefix lists. It automates connectivity configurations by selecting CIDRs from IPAM's database based on your business logic and synchronizing them with prefix lists used in resources such as VPC route tables and security groups. For more information about IPAM prefix list resolver, see Automate prefix list updates with IPAM in the Amazon VPC IPAM User Guide.

```sql
INSERT INTO aws.ec2.ipam_prefix_list_resolvers (
IpamId,
AddressFamily,
region,
DryRun,
Description,
Rule,
TagSpecification,
ClientToken
)
SELECT 
'{{ IpamId }}',
'{{ AddressFamily }}',
'{{ region }}',
'{{ DryRun }}',
'{{ Description }}',
'{{ Rule }}',
'{{ TagSpecification }}',
'{{ ClientToken }}'
RETURNING
AddressFamily,
Description,
IpamArn,
IpamPrefixListResolverArn,
IpamPrefixListResolverId,
IpamRegion,
LastVersionCreationStatus,
LastVersionCreationStatusMessage,
OwnerId,
State,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_prefix_list_resolvers
  props:
    - name: IpamId
      value: "{{ IpamId }}"
      description: Required parameter for the ipam_prefix_list_resolvers resource.
    - name: AddressFamily
      value: "{{ AddressFamily }}"
      description: Required parameter for the ipam_prefix_list_resolvers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_prefix_list_resolvers resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Description
      value: "{{ Description }}"
      description: A description for the IPAM prefix list resolver to help you identify its purpose and configuration.
      description: A description for the IPAM prefix list resolver to help you identify its purpose and configuration.
    - name: Rule
      value: "{{ Rule }}"
      description: The CIDR selection rules for the resolver. CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.
      description: The CIDR selection rules for the resolver. CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the IPAM prefix list resolver during creation. Tags help you organize and manage your Amazon Web Services resources.
      description: The tags to apply to the IPAM prefix list resolver during creation. Tags help you organize and manage your Amazon Web Services resources.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam_prefix_list_resolver"
    values={[
        { label: 'modify_ipam_prefix_list_resolver', value: 'modify_ipam_prefix_list_resolver' }
    ]}
>
<TabItem value="modify_ipam_prefix_list_resolver">

Modifies an IPAM prefix list resolver. You can update the description and CIDR selection rules. Changes to rules will trigger re-evaluation and potential updates to associated prefix lists.

```sql
UPDATE aws.ec2.ipam_prefix_list_resolvers
SET 
-- No updatable properties
WHERE 
IpamPrefixListResolverId = '{{ IpamPrefixListResolverId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Description = '{{ Description}}'
AND Rule = '{{ Rule}}'
RETURNING
AddressFamily,
Description,
IpamArn,
IpamPrefixListResolverArn,
IpamPrefixListResolverId,
IpamRegion,
LastVersionCreationStatus,
LastVersionCreationStatusMessage,
OwnerId,
State,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_prefix_list_resolver"
    values={[
        { label: 'delete_ipam_prefix_list_resolver', value: 'delete_ipam_prefix_list_resolver' }
    ]}
>
<TabItem value="delete_ipam_prefix_list_resolver">

Deletes an IPAM prefix list resolver. Before deleting a resolver, you must first delete all resolver targets associated with it.

```sql
DELETE FROM aws.ec2.ipam_prefix_list_resolvers
WHERE IpamPrefixListResolverId = '{{ IpamPrefixListResolverId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
