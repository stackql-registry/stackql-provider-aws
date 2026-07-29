--- 
title: tenant_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_resources
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>tenant_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.tenant_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tenant_resources"
    values={[
        { label: 'list_tenant_resources', value: 'list_tenant_resources' }
    ]}
>
<TabItem value="list_tenant_resources">

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
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource associated with the tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource associated with the tenant. Valid values are EMAIL_IDENTITY, CONFIGURATION_SET, or EMAIL_TEMPLATE. (EMAIL_IDENTITY, CONFIGURATION_SET, EMAIL_TEMPLATE)</td>
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
    <td><a href="#list_tenant_resources"><CopyableCode code="list_tenant_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all resources associated with a specific tenant. This operation returns a list of resources (email identities, configuration sets, or email templates) that are associated with the specified tenant. You can optionally filter the results by resource type.</td>
</tr>
<tr>
    <td><a href="#create_tenant_resource_association"><CopyableCode code="create_tenant_resource_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TenantName"><code>TenantName</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Associate a resource with a tenant. Resources can be email identities, configuration sets, or email templates. When you associate a resource with a tenant, you can use that resource when sending emails on behalf of that tenant. A single resource can be associated with multiple tenants, allowing for resource sharing across different tenants while maintaining isolation in email sending operations.</td>
</tr>
<tr>
    <td><a href="#delete_tenant_resource_association"><CopyableCode code="delete_tenant_resource_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an association between a tenant and a resource. When you delete a tenant-resource association, the resource itself is not deleted, only its association with the specific tenant is removed. After removal, the resource will no longer be available for use with that tenant's email sending operations.</td>
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
    defaultValue="list_tenant_resources"
    values={[
        { label: 'list_tenant_resources', value: 'list_tenant_resources' }
    ]}
>
<TabItem value="list_tenant_resources">

List all resources associated with a specific tenant. This operation returns a list of resources (email identities, configuration sets, or email templates) that are associated with the specified tenant. You can optionally filter the results by resource type.

```sql
SELECT
resource_arn,
resource_type
FROM aws.sesv2.tenant_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tenant_resource_association"
    values={[
        { label: 'create_tenant_resource_association', value: 'create_tenant_resource_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tenant_resource_association">

Associate a resource with a tenant. Resources can be email identities, configuration sets, or email templates. When you associate a resource with a tenant, you can use that resource when sending emails on behalf of that tenant. A single resource can be associated with multiple tenants, allowing for resource sharing across different tenants while maintaining isolation in email sending operations.

```sql
INSERT INTO aws.sesv2.tenant_resources (
TenantName,
ResourceArn,
region
)
SELECT 
'{{ TenantName }}' /* required */,
'{{ ResourceArn }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tenant_resources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tenant_resources resource.
    - name: TenantName
      value: "{{ TenantName }}"
      description: |
        The name of a tenant. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tenant_resource_association"
    values={[
        { label: 'delete_tenant_resource_association', value: 'delete_tenant_resource_association' }
    ]}
>
<TabItem value="delete_tenant_resource_association">

Delete an association between a tenant and a resource. When you delete a tenant-resource association, the resource itself is not deleted, only its association with the specific tenant is removed. After removal, the resource will no longer be available for use with that tenant's email sending operations.

```sql
DELETE FROM aws.sesv2.tenant_resources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
