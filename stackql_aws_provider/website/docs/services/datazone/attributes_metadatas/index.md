--- 
title: attributes_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes_metadatas
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

Creates, updates, deletes, gets or lists an <code>attributes_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attributes_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.attributes_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_attributes_metadata"
    values={[
        { label: 'batch_get_attributes_metadata', value: 'batch_get_attributes_metadata' }
    ]}
>
<TabItem value="batch_get_attributes_metadata">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>The results of the BatchGetAttributesMetadata action.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>The errors generated when the BatchGetAttributesMetadata action is invoked.</td>
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
    <td><a href="#batch_get_attributes_metadata"><CopyableCode code="batch_get_attributes_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-attributeIdentifier"><code>attributeIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-entityRevision"><code>entityRevision</code></a></td>
    <td>Gets the attribute metadata.</td>
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
<tr id="parameter-attributeIdentifier">
    <td><CopyableCode code="attributeIdentifier" /></td>
    <td><code>array</code></td>
    <td>The attribute identifier.</td>
</tr>
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The domain ID where you want to get the attribute metadata.</td>
</tr>
<tr id="parameter-entity_identifier">
    <td><CopyableCode code="entity_identifier" /></td>
    <td><code>string</code></td>
    <td>The entity ID for which you want to get attribute metadata.</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The entity type for which you want to get attribute metadata.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-entityRevision">
    <td><CopyableCode code="entityRevision" /></td>
    <td><code>string</code></td>
    <td>The entity revision for which you want to get attribute metadata.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_attributes_metadata"
    values={[
        { label: 'batch_get_attributes_metadata', value: 'batch_get_attributes_metadata' }
    ]}
>
<TabItem value="batch_get_attributes_metadata">

Gets the attribute metadata.

```sql
SELECT
attributes,
errors
FROM aws.datazone.attributes_metadatas
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND entity_identifier = '{{ entity_identifier }}' -- required
AND attributeIdentifier = '{{ attributeIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND entityRevision = '{{ entityRevision }}'
;
```
</TabItem>
</Tabs>
