--- 
title: identity_id_formats
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_id_formats
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

Creates, updates, deletes, gets or lists an <code>identity_id_formats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_id_formats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.identity_id_formats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_identity_id_format"
    values={[
        { label: 'describe_identity_id_format', value: 'describe_identity_id_format' }
    ]}
>
<TabItem value="describe_identity_id_format">

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
    <td><CopyableCode code="deadline" /></td>
    <td><code>string</code></td>
    <td>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The type of resource.</td>
</tr>
<tr>
    <td><CopyableCode code="use_long_ids" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</td>
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
    <td><a href="#describe_identity_id_format"><CopyableCode code="describe_identity_id_format" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PrincipalArn"><code>PrincipalArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Resource"><code>Resource</code></a></td>
    <td>Describes the ID format settings for resources for the specified IAM user, IAM role, or root user. For example, you can view the resource types that are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types. For more information, see Resource IDs in the Amazon Elastic Compute Cloud User Guide. The following resource types support longer IDs: bundle | conversion-task | customer-gateway | dhcp-options | elastic-ip-allocation | elastic-ip-association | export-task | flow-log | image | import-task | instance | internet-gateway | network-acl | network-acl-association | network-interface | network-interface-attachment | prefix-list | reservation | route-table | route-table-association | security-group | snapshot | subnet | subnet-cidr-block-association | volume | vpc | vpc-cidr-block-association | vpc-endpoint | vpc-peering-connection | vpn-connection | vpn-gateway. These settings apply to the principal specified in the request. They do not apply to the principal that makes the request.</td>
</tr>
<tr>
    <td><a href="#modify_identity_id_format"><CopyableCode code="modify_identity_id_format" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UseLongIds"><code>UseLongIds</code></a>, <a href="#parameter-PrincipalArn"><code>PrincipalArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Resource"><code>Resource</code></a></td>
    <td>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root user for an account; or all IAM users, IAM roles, and the root user for an account. You can specify that resources should receive longer IDs (17-character IDs) when they are created. This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: bundle | conversion-task | customer-gateway | dhcp-options | elastic-ip-allocation | elastic-ip-association | export-task | flow-log | image | import-task | internet-gateway | network-acl | network-acl-association | network-interface | network-interface-attachment | prefix-list | route-table | route-table-association | security-group | subnet | subnet-cidr-block-association | vpc | vpc-cidr-block-association | vpc-endpoint | vpc-peering-connection | vpn-connection | vpn-gateway. For more information, see Resource IDs in the Amazon Elastic Compute Cloud User Guide. This setting applies to the principal specified in the request; it does not apply to the principal that makes the request. Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant Describe command for the resource type.</td>
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
<tr id="parameter-PrincipalArn">
    <td><CopyableCode code="PrincipalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify all to modify the ID format for all IAM users, IAM roles, and the root user of the account.</td>
</tr>
<tr id="parameter-UseLongIds">
    <td><CopyableCode code="UseLongIds" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the resource should use longer IDs (17-character IDs)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Resource">
    <td><CopyableCode code="Resource" /></td>
    <td><code>string</code></td>
    <td>The type of resource: bundle | conversion-task | customer-gateway | dhcp-options | elastic-ip-allocation | elastic-ip-association | export-task | flow-log | image | import-task | internet-gateway | network-acl | network-acl-association | network-interface | network-interface-attachment | prefix-list | route-table | route-table-association | security-group | subnet | subnet-cidr-block-association | vpc | vpc-cidr-block-association | vpc-endpoint | vpc-peering-connection | vpn-connection | vpn-gateway. Alternatively, use the all-current option to include all resource types that are currently within their opt-in period for longer IDs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_identity_id_format"
    values={[
        { label: 'describe_identity_id_format', value: 'describe_identity_id_format' }
    ]}
>
<TabItem value="describe_identity_id_format">

Describes the ID format settings for resources for the specified IAM user, IAM role, or root user. For example, you can view the resource types that are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types. For more information, see Resource IDs in the Amazon Elastic Compute Cloud User Guide. The following resource types support longer IDs: bundle | conversion-task | customer-gateway | dhcp-options | elastic-ip-allocation | elastic-ip-association | export-task | flow-log | image | import-task | instance | internet-gateway | network-acl | network-acl-association | network-interface | network-interface-attachment | prefix-list | reservation | route-table | route-table-association | security-group | snapshot | subnet | subnet-cidr-block-association | volume | vpc | vpc-cidr-block-association | vpc-endpoint | vpc-peering-connection | vpn-connection | vpn-gateway. These settings apply to the principal specified in the request. They do not apply to the principal that makes the request.

```sql
SELECT
deadline,
resource,
use_long_ids
FROM aws.ec2.identity_id_formats
WHERE PrincipalArn = '{{ PrincipalArn }}' -- required
AND region = '{{ region }}' -- required
AND Resource = '{{ Resource }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_identity_id_format"
    values={[
        { label: 'modify_identity_id_format', value: 'modify_identity_id_format' }
    ]}
>
<TabItem value="modify_identity_id_format">

Modifies the ID format of a resource for a specified IAM user, IAM role, or the root user for an account; or all IAM users, IAM roles, and the root user for an account. You can specify that resources should receive longer IDs (17-character IDs) when they are created. This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: bundle | conversion-task | customer-gateway | dhcp-options | elastic-ip-allocation | elastic-ip-association | export-task | flow-log | image | import-task | internet-gateway | network-acl | network-acl-association | network-interface | network-interface-attachment | prefix-list | route-table | route-table-association | security-group | subnet | subnet-cidr-block-association | vpc | vpc-cidr-block-association | vpc-endpoint | vpc-peering-connection | vpn-connection | vpn-gateway. For more information, see Resource IDs in the Amazon Elastic Compute Cloud User Guide. This setting applies to the principal specified in the request; it does not apply to the principal that makes the request. Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant Describe command for the resource type.

```sql
UPDATE aws.ec2.identity_id_formats
SET 
-- No updatable properties
WHERE 
UseLongIds = '{{ UseLongIds }}' --required
AND PrincipalArn = '{{ PrincipalArn }}' --required
AND region = '{{ region }}' --required
AND Resource = '{{ Resource}}';
```
</TabItem>
</Tabs>
