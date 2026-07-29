--- 
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists an <code>entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entities"
    values={[
        { label: 'get_entities', value: 'get_entities' },
        { label: 'search_entities', value: 'search_entities' }
    ]}
>
<TabItem value="get_entities">

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
    <td><CopyableCode code="descriptions" /></td>
    <td><code>array</code></td>
    <td>An array of descriptions for the specified entities.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_entities">

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
    <td>The entity ID. (pattern: &lt;code&gt;^urn:tdm:((&#91;a-z&#93;&#123;2&#125;-(gov-)?&#91;a-z&#93;&#123;4,9&#125;-&#91;0-9&#93;&#123;1,3&#125;/&#91;0-9&#93;+/)*&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*):(&#91;\p&#123;Alpha&#125;&#93;*):(&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The entity ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the entity was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>A document that defines an entity.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The entity type. (DEVICE, SERVICE, DEVICE_MODEL, CAPABILITY, STATE, ACTION, EVENT, PROPERTY, MAPPING, ENUM)</td>
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
    <td><a href="#get_entities"><CopyableCode code="get_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities. Properties States Events Actions Capabilities Mappings Devices Device Models Services This action doesn't return definitions for systems, flows, and deployments.</td>
</tr>
<tr>
    <td><a href="#search_entities"><CopyableCode code="search_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.</td>
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
    defaultValue="get_entities"
    values={[
        { label: 'get_entities', value: 'get_entities' },
        { label: 'search_entities', value: 'search_entities' }
    ]}
>
<TabItem value="get_entities">

Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities. Properties States Events Actions Capabilities Mappings Devices Device Models Services This action doesn't return definitions for systems, flows, and deployments.

```sql
SELECT
descriptions
FROM aws.iotthingsgraph.entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_entities">

Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.

```sql
SELECT
id,
arn,
created_at,
definition,
type_
FROM aws.iotthingsgraph.entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
