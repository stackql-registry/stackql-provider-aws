--- 
title: tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - tenants
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

Creates, updates, deletes, gets or lists a <code>tenants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.tenants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tenant"
    values={[
        { label: 'get_tenant', value: 'get_tenant' },
        { label: 'list_tenants', value: 'list_tenants' }
    ]}
>
<TabItem value="get_tenant">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the tenant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="sending_status" /></td>
    <td><code>string</code></td>
    <td>The status of sending capability for the tenant. (ENABLED, REINSTATED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of objects that define the tags (keys and values) associated with the tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_name" /></td>
    <td><code>string</code></td>
    <td>The name of a tenant. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tenants">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the tenant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_name" /></td>
    <td><code>string</code></td>
    <td>The name of a tenant. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.</td>
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
    <td><a href="#get_tenant"><CopyableCode code="get_tenant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about a specific tenant, including the tenant's name, ID, ARN, creation timestamp, tags, and sending status.</td>
</tr>
<tr>
    <td><a href="#list_tenants"><CopyableCode code="list_tenants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all tenants associated with your account in the current Amazon Web Services Region. This operation returns basic information about each tenant, such as tenant name, ID, ARN, and creation timestamp.</td>
</tr>
<tr>
    <td><a href="#create_tenant"><CopyableCode code="create_tenant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TenantName"><code>TenantName</code></a></td>
    <td></td>
    <td>Create a tenant. Tenants are logical containers that group related SES resources together. Each tenant can have its own set of resources like email identities, configuration sets, and templates, along with reputation metrics and sending status. This helps isolate and manage email sending for different customers or business units within your Amazon SES API v2 account.</td>
</tr>
<tr>
    <td><a href="#delete_tenant"><CopyableCode code="delete_tenant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing tenant. When you delete a tenant, its associations with resources are removed, but the resources themselves are not deleted.</td>
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
    defaultValue="get_tenant"
    values={[
        { label: 'get_tenant', value: 'get_tenant' },
        { label: 'list_tenants', value: 'list_tenants' }
    ]}
>
<TabItem value="get_tenant">

Get information about a specific tenant, including the tenant's name, ID, ARN, creation timestamp, tags, and sending status.

```sql
SELECT
created_timestamp,
sending_status,
tags,
tenant_arn,
tenant_id,
tenant_name
FROM aws.sesv2.tenants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tenants">

List all tenants associated with your account in the current Amazon Web Services Region. This operation returns basic information about each tenant, such as tenant name, ID, ARN, and creation timestamp.

```sql
SELECT
created_timestamp,
tenant_arn,
tenant_id,
tenant_name
FROM aws.sesv2.tenants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tenant"
    values={[
        { label: 'create_tenant', value: 'create_tenant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tenant">

Create a tenant. Tenants are logical containers that group related SES resources together. Each tenant can have its own set of resources like email identities, configuration sets, and templates, along with reputation metrics and sending status. This helps isolate and manage email sending for different customers or business units within your Amazon SES API v2 account.

```sql
INSERT INTO aws.sesv2.tenants (
TenantName,
Tags,
region
)
SELECT 
'{{ TenantName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
created_timestamp,
sending_status,
tags,
tenant_arn,
tenant_id,
tenant_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tenants
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tenants resource.
    - name: TenantName
      value: "{{ TenantName }}"
      description: |
        The name of a tenant. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tenant"
    values={[
        { label: 'delete_tenant', value: 'delete_tenant' }
    ]}
>
<TabItem value="delete_tenant">

Delete an existing tenant. When you delete a tenant, its associations with resources are removed, but the resources themselves are not deleted.

```sql
DELETE FROM aws.sesv2.tenants
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
