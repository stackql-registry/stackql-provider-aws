--- 
title: vpc_origins
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_origins
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>vpc_origins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_origins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.vpc_origins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpc_origin"
    values={[
        { label: 'get_vpc_origin', value: 'get_vpc_origin' },
        { label: 'list_vpc_origins', value: 'list_vpc_origins' }
    ]}
>
<TabItem value="get_vpc_origin">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the Amazon Web Services account that owns the VPC origin.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The VPC origin ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The VPC origin created time.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The VPC origin ID.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The VPC origin last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The VPC origin status.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcOriginEndpointConfig" /></td>
    <td><code>string</code></td>
    <td>The VPC origin endpoint configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpc_origins">

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
    <td><CopyableCode code="IsTruncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more VPC origins remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more VPC origins in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>The items of the VPC origins list.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker associated with the VPC origins list.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items included in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>The next marker associated with the VPC origins list.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of VPC origins in the list.</td>
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
    <td><a href="#get_vpc_origin"><CopyableCode code="get_vpc_origin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the details of an Amazon CloudFront VPC origin.</td>
</tr>
<tr>
    <td><a href="#list_vpc_origins"><CopyableCode code="list_vpc_origins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List the CloudFront VPC origins in your account.</td>
</tr>
<tr>
    <td><a href="#create_vpc_origin"><CopyableCode code="create_vpc_origin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VpcOriginEndpointConfig"><code>VpcOriginEndpointConfig</code></a></td>
    <td></td>
    <td>Create an Amazon CloudFront VPC origin.</td>
</tr>
<tr>
    <td><a href="#update_vpc_origin"><CopyableCode code="update_vpc_origin" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VpcOriginEndpointConfig"><code>VpcOriginEndpointConfig</code></a></td>
    <td></td>
    <td>Update an Amazon CloudFront VPC origin in your account.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_origin"><CopyableCode code="delete_vpc_origin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an Amazon CloudFront VPC origin.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the VPC origin to delete. This is the ETag value returned in the response to GetVpcOrigin.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The VPC origin ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker associated with the VPC origins list.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items included in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpc_origin"
    values={[
        { label: 'get_vpc_origin', value: 'get_vpc_origin' },
        { label: 'list_vpc_origins', value: 'list_vpc_origins' }
    ]}
>
<TabItem value="get_vpc_origin">

Get the details of an Amazon CloudFront VPC origin.

```sql
SELECT
AccountId,
Arn,
CreatedTime,
Id,
LastModifiedTime,
Status,
VpcOriginEndpointConfig
FROM aws.cloudfront.vpc_origins
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpc_origins">

List the CloudFront VPC origins in your account.

```sql
SELECT
IsTruncated,
Items,
Marker,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.vpc_origins
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_origin"
    values={[
        { label: 'create_vpc_origin', value: 'create_vpc_origin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_origin">

Create an Amazon CloudFront VPC origin.

```sql
INSERT INTO aws.cloudfront.vpc_origins (
VpcOriginEndpointConfig,
Tags,
region
)
SELECT 
'{{ VpcOriginEndpointConfig }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
AccountId,
Arn,
CreatedTime,
Id,
LastModifiedTime,
Status,
VpcOriginEndpointConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_origins
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_origins resource.
    - name: VpcOriginEndpointConfig
      description: |
        An Amazon CloudFront VPC origin endpoint configuration.
      value:
        Name: "{{ Name }}"
        Arn: "{{ Arn }}"
        HTTPPort: {{ HTTPPort }}
        HTTPSPort: {{ HTTPSPort }}
        OriginProtocolPolicy: "{{ OriginProtocolPolicy }}"
        OriginSslProtocols:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpc_origin"
    values={[
        { label: 'update_vpc_origin', value: 'update_vpc_origin' }
    ]}
>
<TabItem value="update_vpc_origin">

Update an Amazon CloudFront VPC origin in your account.

```sql
UPDATE aws.cloudfront.vpc_origins
SET 
VpcOriginEndpointConfig = '{{ VpcOriginEndpointConfig }}'
WHERE 
id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
AND VpcOriginEndpointConfig = '{{ VpcOriginEndpointConfig }}' --required
RETURNING
AccountId,
Arn,
CreatedTime,
Id,
LastModifiedTime,
Status,
VpcOriginEndpointConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_origin"
    values={[
        { label: 'delete_vpc_origin', value: 'delete_vpc_origin' }
    ]}
>
<TabItem value="delete_vpc_origin">

Delete an Amazon CloudFront VPC origin.

```sql
DELETE FROM aws.cloudfront.vpc_origins
WHERE id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
