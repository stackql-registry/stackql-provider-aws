--- 
title: attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes
  - pinpoint
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

Creates, updates, deletes, gets or lists an <code>attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#remove_attributes"><CopyableCode code="remove_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-attribute-type"><code>attribute-type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateAttributesRequest"><code>UpdateAttributesRequest</code></a></td>
    <td></td>
    <td>Removes one or more custom attributes, of the same attribute type, from the application. Existing endpoints still have the attributes but Amazon Pinpoint will stop capturing new or changed values for these attributes.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-attribute-type">
    <td><CopyableCode code="attribute-type" /></td>
    <td><code>string</code></td>
    <td>The type of attribute or attributes to remove. Valid values are: endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel. endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart. endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="remove_attributes"
    values={[
        { label: 'remove_attributes', value: 'remove_attributes' }
    ]}
>
<TabItem value="remove_attributes">

Removes one or more custom attributes, of the same attribute type, from the application. Existing endpoints still have the attributes but Amazon Pinpoint will stop capturing new or changed values for these attributes.

```sql
UPDATE aws.pinpoint.attributes
SET 
UpdateAttributesRequest = '{{ UpdateAttributesRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND `attribute-type` = '{{ attribute-type }}' --required
AND region = '{{ region }}' --required
AND UpdateAttributesRequest = '{{ UpdateAttributesRequest }}' --required
RETURNING
AttributesResource;
```
</TabItem>
</Tabs>
