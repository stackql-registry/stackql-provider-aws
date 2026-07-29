--- 
title: resource_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_sets
  - fms
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

Creates, updates, deletes, gets or lists a <code>resource_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.resource_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_set"
    values={[
        { label: 'get_resource_set', value: 'get_resource_set' },
        { label: 'list_resource_sets', value: 'list_resource_sets' }
    ]}
>
<TabItem value="get_resource_set">

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
    <td><CopyableCode code="resource_set" /></td>
    <td><code>object</code></td>
    <td>Information about the specified resource set.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource set. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_sets">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_sets" /></td>
    <td><code>array</code></td>
    <td>An array of ResourceSetSummary objects.</td>
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
    <td><a href="#get_resource_set"><CopyableCode code="get_resource_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific resource set.</td>
</tr>
<tr>
    <td><a href="#list_resource_sets"><CopyableCode code="list_resource_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of ResourceSetSummary objects.</td>
</tr>
<tr>
    <td><a href="#put_resource_set"><CopyableCode code="put_resource_set" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSet"><code>ResourceSet</code></a></td>
    <td></td>
    <td>Creates the resource set. An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</td>
</tr>
<tr>
    <td><a href="#delete_resource_set"><CopyableCode code="delete_resource_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified ResourceSet.</td>
</tr>
<tr>
    <td><a href="#batch_associate_resource"><CopyableCode code="batch_associate_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSetIdentifier"><code>ResourceSetIdentifier</code></a>, <a href="#parameter-Items"><code>Items</code></a></td>
    <td></td>
    <td>Associate resources to a Firewall Manager resource set.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_resource"><CopyableCode code="batch_disassociate_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSetIdentifier"><code>ResourceSetIdentifier</code></a>, <a href="#parameter-Items"><code>Items</code></a></td>
    <td></td>
    <td>Disassociates resources from a Firewall Manager resource set.</td>
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
    defaultValue="get_resource_set"
    values={[
        { label: 'get_resource_set', value: 'get_resource_set' },
        { label: 'list_resource_sets', value: 'list_resource_sets' }
    ]}
>
<TabItem value="get_resource_set">

Gets information about a specific resource set.

```sql
SELECT
resource_set,
resource_set_arn
FROM aws.fms.resource_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_sets">

Returns an array of ResourceSetSummary objects.

```sql
SELECT
next_token,
resource_sets
FROM aws.fms.resource_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_set"
    values={[
        { label: 'put_resource_set', value: 'put_resource_set' }
    ]}
>
<TabItem value="put_resource_set">

Creates the resource set. An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.

```sql
REPLACE aws.fms.resource_sets
SET 
ResourceSet = '{{ ResourceSet }}',
TagList = '{{ TagList }}'
WHERE 
region = '{{ region }}' --required
AND ResourceSet = '{{ ResourceSet }}' --required
RETURNING
resource_set,
resource_set_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_set"
    values={[
        { label: 'delete_resource_set', value: 'delete_resource_set' }
    ]}
>
<TabItem value="delete_resource_set">

Deletes the specified ResourceSet.

```sql
DELETE FROM aws.fms.resource_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_associate_resource"
    values={[
        { label: 'batch_associate_resource', value: 'batch_associate_resource' },
        { label: 'batch_disassociate_resource', value: 'batch_disassociate_resource' }
    ]}
>
<TabItem value="batch_associate_resource">

Associate resources to a Firewall Manager resource set.

```sql
EXEC aws.fms.resource_sets.batch_associate_resource 
@region='{{ region }}' --required 
@@json=
'{
"ResourceSetIdentifier": "{{ ResourceSetIdentifier }}", 
"Items": "{{ Items }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_resource">

Disassociates resources from a Firewall Manager resource set.

```sql
EXEC aws.fms.resource_sets.batch_disassociate_resource 
@region='{{ region }}' --required 
@@json=
'{
"ResourceSetIdentifier": "{{ ResourceSetIdentifier }}", 
"Items": "{{ Items }}"
}'
;
```
</TabItem>
</Tabs>
