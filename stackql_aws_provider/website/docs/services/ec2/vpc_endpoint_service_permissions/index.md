--- 
title: vpc_endpoint_service_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_service_permissions
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_service_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_service_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_endpoint_service_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoint_service_permissions"
    values={[
        { label: 'describe_vpc_endpoint_service_permissions', value: 'describe_vpc_endpoint_service_permissions' }
    ]}
>
<TabItem value="describe_vpc_endpoint_service_permissions">

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
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the principal.</td>
</tr>
<tr>
    <td><CopyableCode code="principal_type" /></td>
    <td><code>string</code></td>
    <td>The type of principal.</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_permission_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service permission.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
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
    <td><a href="#describe_vpc_endpoint_service_permissions"><CopyableCode code="describe_vpc_endpoint_service_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the principals (service consumers) that are permitted to discover your VPC endpoint service. Principal ARNs with path components aren't supported.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_endpoint_service_permissions"><CopyableCode code="modify_vpc_endpoint_service_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-AddAllowedPrincipals"><code>AddAllowedPrincipals</code></a>, <a href="#parameter-RemoveAllowedPrincipals"><code>RemoveAllowedPrincipals</code></a></td>
    <td>Modifies the permissions for your VPC endpoint service. You can add or remove permissions for service consumers (Amazon Web Services accounts, users, and IAM roles) to connect to your endpoint service. Principal ARNs with path components aren't supported. If you grant permissions to all principals, the service is public. Any users who know the name of a public service can send a request to attach an endpoint. If the service does not require manual approval, attachments are automatically approved.</td>
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
<tr id="parameter-ServiceId">
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddAllowedPrincipals">
    <td><CopyableCode code="AddAllowedPrincipals" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the principals. Permissions are granted to the principals in this list. To grant permissions to all principals, specify an asterisk (*).</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. principal - The ARN of the principal. principal-type - The principal type (All | Service | OrganizationUnit | Account | User | Role).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned NextToken value. This value can be between 5 and 1,000; if MaxResults is given a value larger than 1,000, only 1,000 results are returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-RemoveAllowedPrincipals">
    <td><CopyableCode code="RemoveAllowedPrincipals" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the principals. Permissions are revoked for principals in this list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoint_service_permissions"
    values={[
        { label: 'describe_vpc_endpoint_service_permissions', value: 'describe_vpc_endpoint_service_permissions' }
    ]}
>
<TabItem value="describe_vpc_endpoint_service_permissions">

Describes the principals (service consumers) that are permitted to discover your VPC endpoint service. Principal ARNs with path components aren't supported.

```sql
SELECT
principal,
principal_type,
service_id,
service_permission_id,
tags
FROM aws.ec2.vpc_endpoint_service_permissions
WHERE ServiceId = '{{ ServiceId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_endpoint_service_permissions"
    values={[
        { label: 'modify_vpc_endpoint_service_permissions', value: 'modify_vpc_endpoint_service_permissions' }
    ]}
>
<TabItem value="modify_vpc_endpoint_service_permissions">

Modifies the permissions for your VPC endpoint service. You can add or remove permissions for service consumers (Amazon Web Services accounts, users, and IAM roles) to connect to your endpoint service. Principal ARNs with path components aren't supported. If you grant permissions to all principals, the service is public. Any users who know the name of a public service can send a request to attach an endpoint. If the service does not require manual approval, attachments are automatically approved.

```sql
UPDATE aws.ec2.vpc_endpoint_service_permissions
SET 
-- No updatable properties
WHERE 
ServiceId = '{{ ServiceId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND AddAllowedPrincipals = '{{ AddAllowedPrincipals}}'
AND RemoveAllowedPrincipals = '{{ RemoveAllowedPrincipals}}'
RETURNING
added_principals,
return_value;
```
</TabItem>
</Tabs>
