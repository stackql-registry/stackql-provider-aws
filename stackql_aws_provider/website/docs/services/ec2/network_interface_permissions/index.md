--- 
title: network_interface_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - network_interface_permissions
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

Creates, updates, deletes, gets or lists a <code>network_interface_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_interface_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_interface_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_interface_permissions"
    values={[
        { label: 'describe_network_interface_permissions', value: 'describe_network_interface_permissions' }
    ]}
>
<TabItem value="describe_network_interface_permissions">

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
    <td><CopyableCode code="AwsAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="AwsService" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfacePermissionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface permission.</td>
</tr>
<tr>
    <td><CopyableCode code="Permission" /></td>
    <td><code>string</code></td>
    <td>The type of permission.</td>
</tr>
<tr>
    <td><CopyableCode code="PermissionState" /></td>
    <td><code>string</code></td>
    <td>Information about the state of the permission.</td>
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
    <td><a href="#describe_network_interface_permissions"><CopyableCode code="describe_network_interface_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NetworkInterfacePermissionId"><code>NetworkInterfacePermissionId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the permissions for your network interfaces.</td>
</tr>
<tr>
    <td><a href="#create_network_interface_permission"><CopyableCode code="create_network_interface_permission" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AwsAccountId"><code>AwsAccountId</code></a>, <a href="#parameter-AwsService"><code>AwsService</code></a>, <a href="#parameter-Permission"><code>Permission</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Grants an Amazon Web Services-authorized account permission to attach the specified network interface to an instance in their account. You can grant permission to a single Amazon Web Services account only, and only one account at a time.</td>
</tr>
<tr>
    <td><a href="#delete_network_interface_permission"><CopyableCode code="delete_network_interface_permission" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkInterfacePermissionId"><code>NetworkInterfacePermissionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a permission for a network interface. By default, you cannot delete the permission if the account for which you're removing the permission has attached the network interface to an instance. However, you can force delete the permission, regardless of any attachment.</td>
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
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr id="parameter-NetworkInterfacePermissionId">
    <td><CopyableCode code="NetworkInterfacePermissionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface permission.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AwsAccountId">
    <td><CopyableCode code="AwsAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-AwsService">
    <td><CopyableCode code="AwsService" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service. Currently not supported.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. network-interface-permission.network-interface-permission-id - The ID of the permission. network-interface-permission.network-interface-id - The ID of the network interface. network-interface-permission.aws-account-id - The Amazon Web Services account ID. network-interface-permission.aws-service - The Amazon Web Services service. network-interface-permission.permission - The type of permission (INSTANCE-ATTACH | EIP-ASSOCIATE).</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Specify true to remove the permission even if the network interface is attached to an instance.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. If this parameter is not specified, up to 50 results are returned by default. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NetworkInterfacePermissionId">
    <td><CopyableCode code="NetworkInterfacePermissionId" /></td>
    <td><code>array</code></td>
    <td>The network interface permission IDs.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-Permission">
    <td><CopyableCode code="Permission" /></td>
    <td><code>string</code></td>
    <td>The type of permission to grant.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network_interface_permissions"
    values={[
        { label: 'describe_network_interface_permissions', value: 'describe_network_interface_permissions' }
    ]}
>
<TabItem value="describe_network_interface_permissions">

Describes the permissions for your network interfaces.

```sql
SELECT
AwsAccountId,
AwsService,
NetworkInterfaceId,
NetworkInterfacePermissionId,
Permission,
PermissionState
FROM aws.ec2.network_interface_permissions
WHERE region = '{{ region }}' -- required
AND NetworkInterfacePermissionId = '{{ NetworkInterfacePermissionId }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_interface_permission"
    values={[
        { label: 'create_network_interface_permission', value: 'create_network_interface_permission' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_interface_permission">

Grants an Amazon Web Services-authorized account permission to attach the specified network interface to an instance in their account. You can grant permission to a single Amazon Web Services account only, and only one account at a time.

```sql
INSERT INTO aws.ec2.network_interface_permissions (
NetworkInterfaceId,
region,
AwsAccountId,
AwsService,
Permission,
DryRun
)
SELECT 
'{{ NetworkInterfaceId }}',
'{{ region }}',
'{{ AwsAccountId }}',
'{{ AwsService }}',
'{{ Permission }}',
'{{ DryRun }}'
RETURNING
AwsAccountId,
AwsService,
NetworkInterfaceId,
NetworkInterfacePermissionId,
Permission,
PermissionState
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_interface_permissions
  props:
    - name: NetworkInterfaceId
      value: "{{ NetworkInterfaceId }}"
      description: Required parameter for the network_interface_permissions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_interface_permissions resource.
    - name: AwsAccountId
      value: "{{ AwsAccountId }}"
      description: The Amazon Web Services account ID.
      description: The Amazon Web Services account ID.
    - name: AwsService
      value: "{{ AwsService }}"
      description: The Amazon Web Services service. Currently not supported.
      description: The Amazon Web Services service. Currently not supported.
    - name: Permission
      value: "{{ Permission }}"
      description: The type of permission to grant.
      description: The type of permission to grant.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_interface_permission"
    values={[
        { label: 'delete_network_interface_permission', value: 'delete_network_interface_permission' }
    ]}
>
<TabItem value="delete_network_interface_permission">

Deletes a permission for a network interface. By default, you cannot delete the permission if the account for which you're removing the permission has attached the network interface to an instance. However, you can force delete the permission, regardless of any attachment.

```sql
DELETE FROM aws.ec2.network_interface_permissions
WHERE NetworkInterfacePermissionId = '{{ NetworkInterfacePermissionId }}' --required
AND region = '{{ region }}' --required
AND Force = '{{ Force }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
