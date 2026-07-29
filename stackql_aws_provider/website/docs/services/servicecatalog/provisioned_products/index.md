--- 
title: provisioned_products
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioned_products
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>provisioned_products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioned_products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.provisioned_products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_provisioned_product"
    values={[
        { label: 'describe_provisioned_product', value: 'describe_provisioned_product' }
    ]}
>
<TabItem value="describe_provisioned_product">

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
    <td><CopyableCode code="cloud_watch_dashboards" /></td>
    <td><code>array</code></td>
    <td>Any CloudWatch dashboards that were created when provisioning the product.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_product_detail" /></td>
    <td><code>object</code></td>
    <td>Information about the provisioned product.</td>
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
    <td><a href="#describe_provisioned_product"><CopyableCode code="describe_provisioned_product" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified provisioned product.</td>
</tr>
<tr>
    <td><a href="#update_provisioned_product_properties"><CopyableCode code="update_provisioned_product_properties" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProvisionedProductId"><code>ProvisionedProductId</code></a>, <a href="#parameter-ProvisionedProductProperties"><code>ProvisionedProductProperties</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Requests updates to the properties of the specified provisioned product.</td>
</tr>
<tr>
    <td><a href="#update_provisioned_product"><CopyableCode code="update_provisioned_product" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Requests updates to the configuration of the specified provisioned product. If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely. You can check the status of this request using DescribeRecord.</td>
</tr>
<tr>
    <td><a href="#terminate_provisioned_product"><CopyableCode code="terminate_provisioned_product" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates the specified provisioned product. This operation does not delete any records associated with the provisioned product. You can check the status of this request using DescribeRecord.</td>
</tr>
<tr>
    <td><a href="#execute_provisioned_product_service_action"><CopyableCode code="execute_provisioned_product_service_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProvisionedProductId"><code>ProvisionedProductId</code></a>, <a href="#parameter-ServiceActionId"><code>ServiceActionId</code></a>, <a href="#parameter-ExecuteToken"><code>ExecuteToken</code></a></td>
    <td></td>
    <td>Executes a self-service action against a provisioned product.</td>
</tr>
<tr>
    <td><a href="#scan_provisioned_products"><CopyableCode code="scan_provisioned_products" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the provisioned products that are available (not terminated). To use additional filtering, see SearchProvisionedProducts.</td>
</tr>
<tr>
    <td><a href="#search_provisioned_products"><CopyableCode code="search_provisioned_products" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the provisioned products that meet the specified criteria.</td>
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
    defaultValue="describe_provisioned_product"
    values={[
        { label: 'describe_provisioned_product', value: 'describe_provisioned_product' }
    ]}
>
<TabItem value="describe_provisioned_product">

Gets information about the specified provisioned product.

```sql
SELECT
cloud_watch_dashboards,
provisioned_product_detail
FROM aws.servicecatalog.provisioned_products
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_provisioned_product_properties"
    values={[
        { label: 'update_provisioned_product_properties', value: 'update_provisioned_product_properties' },
        { label: 'update_provisioned_product', value: 'update_provisioned_product' }
    ]}
>
<TabItem value="update_provisioned_product_properties">

Requests updates to the properties of the specified provisioned product.

```sql
UPDATE aws.servicecatalog.provisioned_products
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
ProvisionedProductId = '{{ ProvisionedProductId }}',
ProvisionedProductProperties = '{{ ProvisionedProductProperties }}',
IdempotencyToken = '{{ IdempotencyToken }}'
WHERE 
region = '{{ region }}' --required
AND ProvisionedProductId = '{{ ProvisionedProductId }}' --required
AND ProvisionedProductProperties = '{{ ProvisionedProductProperties }}' --required
AND IdempotencyToken = '{{ IdempotencyToken }}' --required
RETURNING
provisioned_product_id,
provisioned_product_properties,
record_id,
status;
```
</TabItem>
<TabItem value="update_provisioned_product">

Requests updates to the configuration of the specified provisioned product. If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely. You can check the status of this request using DescribeRecord.

```sql
UPDATE aws.servicecatalog.provisioned_products
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
ProvisionedProductName = '{{ ProvisionedProductName }}',
ProvisionedProductId = '{{ ProvisionedProductId }}',
ProductId = '{{ ProductId }}',
ProductName = '{{ ProductName }}',
ProvisioningArtifactId = '{{ ProvisioningArtifactId }}',
ProvisioningArtifactName = '{{ ProvisioningArtifactName }}',
PathId = '{{ PathId }}',
PathName = '{{ PathName }}',
ProvisioningParameters = '{{ ProvisioningParameters }}',
ProvisioningPreferences = '{{ ProvisioningPreferences }}',
Tags = '{{ Tags }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
record_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_provisioned_product"
    values={[
        { label: 'terminate_provisioned_product', value: 'terminate_provisioned_product' }
    ]}
>
<TabItem value="terminate_provisioned_product">

Terminates the specified provisioned product. This operation does not delete any records associated with the provisioned product. You can check the status of this request using DescribeRecord.

```sql
DELETE FROM aws.servicecatalog.provisioned_products
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_provisioned_product_service_action"
    values={[
        { label: 'execute_provisioned_product_service_action', value: 'execute_provisioned_product_service_action' },
        { label: 'scan_provisioned_products', value: 'scan_provisioned_products' },
        { label: 'search_provisioned_products', value: 'search_provisioned_products' }
    ]}
>
<TabItem value="execute_provisioned_product_service_action">

Executes a self-service action against a provisioned product.

```sql
EXEC aws.servicecatalog.provisioned_products.execute_provisioned_product_service_action 
@region='{{ region }}' --required 
@@json=
'{
"ProvisionedProductId": "{{ ProvisionedProductId }}", 
"ServiceActionId": "{{ ServiceActionId }}", 
"ExecuteToken": "{{ ExecuteToken }}", 
"AcceptLanguage": "{{ AcceptLanguage }}", 
"Parameters": "{{ Parameters }}"
}'
;
```
</TabItem>
<TabItem value="scan_provisioned_products">

Lists the provisioned products that are available (not terminated). To use additional filtering, see SearchProvisionedProducts.

```sql
EXEC aws.servicecatalog.provisioned_products.scan_provisioned_products 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"AccessLevelFilter": "{{ AccessLevelFilter }}", 
"PageSize": {{ PageSize }}, 
"PageToken": "{{ PageToken }}"
}'
;
```
</TabItem>
<TabItem value="search_provisioned_products">

Gets information about the provisioned products that meet the specified criteria.

```sql
EXEC aws.servicecatalog.provisioned_products.search_provisioned_products 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"AccessLevelFilter": "{{ AccessLevelFilter }}", 
"Filters": "{{ Filters }}", 
"SortBy": "{{ SortBy }}", 
"SortOrder": "{{ SortOrder }}", 
"PageSize": {{ PageSize }}, 
"PageToken": "{{ PageToken }}"
}'
;
```
</TabItem>
</Tabs>
