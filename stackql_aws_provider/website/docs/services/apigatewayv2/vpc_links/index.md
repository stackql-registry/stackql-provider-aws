--- 
title: vpc_links
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_links
  - apigatewayv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.vpc_links" /></td></tr>
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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the VPC link was created.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>A list of security group IDs for the VPC link.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>A list of subnet IDs to include in the VPC link.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags for the VPC link.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_link_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_link_status" /></td>
    <td><code>string</code></td>
    <td>The status of the VPC link. (PENDING, AVAILABLE, DELETING, FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_link_status_message" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_link_version" /></td>
    <td><code>string</code></td>
    <td>The version of the VPC link. (V2)</td>
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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A collection of VPC links.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
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
    <td><a href="#parameter-vpc_link_id"><code>vpc_link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a VPC link.</td>
</tr>
<tr>
    <td><a href="#get_vpc_links"><CopyableCode code="get_vpc_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets a collection of VPC links.</td>
</tr>
<tr>
    <td><a href="#create_vpc_link"><CopyableCode code="create_vpc_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a VPC link.</td>
</tr>
<tr>
    <td><a href="#update_vpc_link"><CopyableCode code="update_vpc_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vpc_link_id"><code>vpc_link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a VPC link.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_link"><CopyableCode code="delete_vpc_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vpc_link_id"><code>vpc_link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a VPC link.</td>
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
<tr id="parameter-vpc_link_id">
    <td><CopyableCode code="vpc_link_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC link.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
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

Gets a VPC link.

```sql
SELECT
created_date,
name,
security_group_ids,
subnet_ids,
tags,
vpc_link_id,
vpc_link_status,
vpc_link_status_message,
vpc_link_version
FROM aws.apigatewayv2.vpc_links
WHERE vpc_link_id = '{{ vpc_link_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_vpc_links">

Gets a collection of VPC links.

```sql
SELECT
items,
next_token
FROM aws.apigatewayv2.vpc_links
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Creates a VPC link.

```sql
INSERT INTO aws.apigatewayv2.vpc_links (
Name,
SecurityGroupIds,
SubnetIds,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ SecurityGroupIds }}',
'{{ SubnetIds }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
created_date,
name,
security_group_ids,
subnet_ids,
tags,
vpc_link_id,
vpc_link_status,
vpc_link_status_message,
vpc_link_version
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
    - name: Name
      value: "{{ Name }}"
      description: |
        A string with a length between [1-128].
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        A list of security group IDs for the VPC link.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        A list of subnet IDs to include in the VPC link.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents a collection of tags associated with the resource.
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

Updates a VPC link.

```sql
UPDATE aws.apigatewayv2.vpc_links
SET 
Name = '{{ Name }}'
WHERE 
vpc_link_id = '{{ vpc_link_id }}' --required
AND region = '{{ region }}' --required
RETURNING
created_date,
name,
security_group_ids,
subnet_ids,
tags,
vpc_link_id,
vpc_link_status,
vpc_link_status_message,
vpc_link_version;
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

Deletes a VPC link.

```sql
DELETE FROM aws.apigatewayv2.vpc_links
WHERE vpc_link_id = '{{ vpc_link_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
