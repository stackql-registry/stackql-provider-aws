--- 
title: changes
hide_title: false
hide_table_of_contents: false
keywords:
  - changes
  - route53
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

Creates, updates, deletes, gets or lists a <code>changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.changes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_change"
    values={[
        { label: 'get_change', value: 'get_change' }
    ]}
>
<TabItem value="get_change">

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
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>A comment you can provide.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>This element contains an ID that you use when performing a GetChange action to get detailed information about the change.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current state of the request. PENDING indicates that this request has not yet been applied to all Amazon Route 53 DNS servers.</td>
</tr>
<tr>
    <td><CopyableCode code="SubmittedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time that the change request was submitted in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2017-03-27T17:48:16.751Z represents March 27, 2017 at 17:48:16.751 UTC.</td>
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
    <td><a href="#get_change"><CopyableCode code="get_change" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of a change batch request. The status is one of the following values: PENDING indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all change batch requests. INSYNC indicates that the changes have propagated to all Route 53 DNS servers managing the hosted zone.</td>
</tr>
<tr>
    <td><a href="#change_cidr_collection"><CopyableCode code="change_cidr_collection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cidr_collection_id"><code>cidr_collection_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Changes"><code>Changes</code></a></td>
    <td></td>
    <td>Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative IP information mapping blocks to one or multiple locations. A change request can update multiple locations in a collection at a time, which is helpful if you want to move one or more CIDR blocks from one location to another in one transaction, without downtime. Limits The max number of CIDR blocks included in the request is 1000. As a result, big updates require multiple API calls. PUT and DELETE_IF_EXISTS Use ChangeCidrCollection to perform the following actions: PUT: Create a CIDR block within the specified collection. DELETE_IF_EXISTS: Delete an existing CIDR block from the collection.</td>
</tr>
<tr>
    <td><a href="#change_tags_for_resource"><CopyableCode code="change_tags_for_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds, edits, or deletes tags for a health check or a hosted zone. For information about using tags for cost allocation, see Using Cost Allocation Tags in the Billing and Cost Management User Guide.</td>
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
<tr id="parameter-cidr_collection_id">
    <td><CopyableCode code="cidr_collection_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the CIDR collection to update.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the change batch request. The value that you specify here is the value that ChangeResourceRecordSets returned in the Id element when you submitted the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource for which you want to add, change, or delete tags.</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The resource type for health checks is healthcheck. The resource type for hosted zones is hostedzone.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_change"
    values={[
        { label: 'get_change', value: 'get_change' }
    ]}
>
<TabItem value="get_change">

Returns the current status of a change batch request. The status is one of the following values: PENDING indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all change batch requests. INSYNC indicates that the changes have propagated to all Route 53 DNS servers managing the hosted zone.

```sql
SELECT
Comment,
Id,
Status,
SubmittedAt
FROM aws.route53.changes
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_cidr_collection"
    values={[
        { label: 'change_cidr_collection', value: 'change_cidr_collection' },
        { label: 'change_tags_for_resource', value: 'change_tags_for_resource' }
    ]}
>
<TabItem value="change_cidr_collection">

Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative IP information mapping blocks to one or multiple locations. A change request can update multiple locations in a collection at a time, which is helpful if you want to move one or more CIDR blocks from one location to another in one transaction, without downtime. Limits The max number of CIDR blocks included in the request is 1000. As a result, big updates require multiple API calls. PUT and DELETE_IF_EXISTS Use ChangeCidrCollection to perform the following actions: PUT: Create a CIDR block within the specified collection. DELETE_IF_EXISTS: Delete an existing CIDR block from the collection.

```sql
EXEC aws.route53.changes.change_cidr_collection 
@cidr_collection_id='{{ cidr_collection_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CollectionVersion": {{ CollectionVersion }}, 
"Changes": "{{ Changes }}"
}'
;
```
</TabItem>
<TabItem value="change_tags_for_resource">

Adds, edits, or deletes tags for a health check or a hosted zone. For information about using tags for cost allocation, see Using Cost Allocation Tags in the Billing and Cost Management User Guide.

```sql
EXEC aws.route53.changes.change_tags_for_resource 
@resource_type='{{ resource_type }}' --required, 
@resource_id='{{ resource_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AddTags": "{{ AddTags }}", 
"RemoveTagKeys": "{{ RemoveTagKeys }}"
}'
;
```
</TabItem>
</Tabs>
