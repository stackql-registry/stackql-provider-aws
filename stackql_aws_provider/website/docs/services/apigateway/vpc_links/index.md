--- 
title: vpc_links
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_links
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>vpc_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.vpc_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpc_link"
    values={[
        { label: 'get_vpc_link', value: 'get_vpc_link' },
        { label: 'get_vpc_links', value: 'get_vpc_links' }
    ]}
>
<TabItem value="get_vpc_link">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name used to label and identify the VPC link.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the VPC link.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the VPC link. The valid values are AVAILABLE, PENDING, DELETING, or FAILED. Deploying an API will wait if the status is PENDING and will fail if the status is DELETING. (AVAILABLE, PENDING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A description about the VPC link status.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetArns" /></td>
    <td><code>array</code></td>
    <td>The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same Amazon Web Services account of the API owner.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_vpc_links">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name used to label and identify the VPC link.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the VPC link.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the VPC link. The valid values are AVAILABLE, PENDING, DELETING, or FAILED. Deploying an API will wait if the status is PENDING and will fail if the status is DELETING. (AVAILABLE, PENDING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A description about the VPC link status.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetArns" /></td>
    <td><code>array</code></td>
    <td>The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same Amazon Web Services account of the API owner.</td>
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
    <td><a href="#get_vpc_link"><CopyableCode code="get_vpc_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpclink_id"><code>vpclink_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a specified VPC link under the caller's account in a region.</td>
</tr>
<tr>
    <td><a href="#get_vpc_links"><CopyableCode code="get_vpc_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets the VpcLinks collection under the caller's account in a selected region.</td>
</tr>
<tr>
    <td><a href="#create_vpc_link"><CopyableCode code="create_vpc_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-targetArns"><code>targetArns</code></a></td>
    <td></td>
    <td>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</td>
</tr>
<tr>
    <td><a href="#update_vpc_link"><CopyableCode code="update_vpc_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vpclink_id"><code>vpclink_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing VpcLink of a specified identifier.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_link"><CopyableCode code="delete_vpc_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vpclink_id"><code>vpclink_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing VpcLink of a specified identifier.</td>
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
<tr id="parameter-vpclink_id">
    <td><CopyableCode code="vpclink_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpc_link"
    values={[
        { label: 'get_vpc_link', value: 'get_vpc_link' },
        { label: 'get_vpc_links', value: 'get_vpc_links' }
    ]}
>
<TabItem value="get_vpc_link">

Gets a specified VPC link under the caller's account in a region.

```sql
SELECT
id,
name,
description,
status,
statusMessage,
tags,
targetArns
FROM aws.apigateway.vpc_links
WHERE vpclink_id = '{{ vpclink_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_vpc_links">

Gets the VpcLinks collection under the caller's account in a selected region.

```sql
SELECT
id,
name,
description,
status,
statusMessage,
tags,
targetArns
FROM aws.apigateway.vpc_links
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_link"
    values={[
        { label: 'create_vpc_link', value: 'create_vpc_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_link">

Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.

```sql
INSERT INTO aws.apigateway.vpc_links (
name,
description,
targetArns,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ targetArns }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
description,
status,
statusMessage,
tags,
targetArns
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_links
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_links resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: targetArns
      value:
        - "{{ targetArns }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpc_link"
    values={[
        { label: 'update_vpc_link', value: 'update_vpc_link' }
    ]}
>
<TabItem value="update_vpc_link">

Updates an existing VpcLink of a specified identifier.

```sql
UPDATE aws.apigateway.vpc_links
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
vpclink_id = '{{ vpclink_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
description,
status,
statusMessage,
tags,
targetArns;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_link"
    values={[
        { label: 'delete_vpc_link', value: 'delete_vpc_link' }
    ]}
>
<TabItem value="delete_vpc_link">

Deletes an existing VpcLink of a specified identifier.

```sql
DELETE FROM aws.apigateway.vpc_links
WHERE vpclink_id = '{{ vpclink_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
