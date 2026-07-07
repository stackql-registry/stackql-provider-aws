--- 
title: entity_owners
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_owners
  - datazone
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

Creates, updates, deletes, gets or lists an <code>entity_owners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_owners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.entity_owners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_entity_owners"
    values={[
        { label: 'list_entity_owners', value: 'list_entity_owners' }
    ]}
>
<TabItem value="list_entity_owners">

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
    <td><CopyableCode code="group" /></td>
    <td><code>object</code></td>
    <td>Specifies that the domain unit owner is a group.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>Specifies that the domain unit owner is a user.</td>
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
    <td><a href="#list_entity_owners"><CopyableCode code="list_entity_owners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the entity (domain units) owners.</td>
</tr>
<tr>
    <td><a href="#add_entity_owner"><CopyableCode code="add_entity_owner" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-owner"><code>owner</code></a></td>
    <td></td>
    <td>Adds the owner of an entity (a domain unit).</td>
</tr>
<tr>
    <td><a href="#remove_entity_owner"><CopyableCode code="remove_entity_owner" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-owner"><code>owner</code></a></td>
    <td></td>
    <td>Removes an owner from an entity.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you want to remove an owner from an entity.</td>
</tr>
<tr id="parameter-entity_identifier">
    <td><CopyableCode code="entity_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the entity from which you want to remove an owner.</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The type of the entity from which you want to remove an owner.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of entities to return in a single call to ListEntityOwners. When the number of entities to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEntityOwners to list the next set of entities.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of entities is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of entities, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEntityOwners to list the next set of entities.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_entity_owners"
    values={[
        { label: 'list_entity_owners', value: 'list_entity_owners' }
    ]}
>
<TabItem value="list_entity_owners">

Lists the entity (domain units) owners.

```sql
SELECT
group,
user
FROM aws.datazone.entity_owners
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND entity_identifier = '{{ entity_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_entity_owner"
    values={[
        { label: 'add_entity_owner', value: 'add_entity_owner' }
    ]}
>
<TabItem value="add_entity_owner">

Adds the owner of an entity (a domain unit).

```sql
UPDATE aws.datazone.entity_owners
SET 
owner = '{{ owner }}',
clientToken = '{{ clientToken }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND entity_type = '{{ entity_type }}' --required
AND entity_identifier = '{{ entity_identifier }}' --required
AND region = '{{ region }}' --required
AND owner = '{{ owner }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_entity_owner"
    values={[
        { label: 'remove_entity_owner', value: 'remove_entity_owner' }
    ]}
>
<TabItem value="remove_entity_owner">

Removes an owner from an entity.

```sql
EXEC aws.datazone.entity_owners.remove_entity_owner 
@domain_identifier='{{ domain_identifier }}' --required, 
@entity_type='{{ entity_type }}' --required, 
@entity_identifier='{{ entity_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"owner": "{{ owner }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
