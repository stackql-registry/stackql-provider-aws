--- 
title: connector_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_entities
  - appflow
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

Creates, updates, deletes, gets or lists a <code>connector_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appflow.connector_entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connector_entity"
    values={[
        { label: 'describe_connector_entity', value: 'describe_connector_entity' },
        { label: 'list_connector_entities', value: 'list_connector_entities' }
    ]}
>
<TabItem value="describe_connector_entity">

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
    <td><CopyableCode code="connectorEntityFields" /></td>
    <td><code>array</code></td>
    <td>Describes the fields for that connector entity. For example, for an account entity, the fields would be account name, account ID, and so on.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connector_entities">

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
    <td><CopyableCode code="connectorEntityMap" /></td>
    <td><code>object</code></td>
    <td>The response of ListConnectorEntities lists entities grouped by category. This map's key represents the group name, and its value contains the list of entities belonging to that group.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that you specify in your next ListConnectorEntities operation to get the next page of results in paginated response. The ListConnectorEntities operation provides this token if the response is too big for the page size. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#describe_connector_entity"><CopyableCode code="describe_connector_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity.</td>
</tr>
<tr>
    <td><a href="#list_connector_entities"><CopyableCode code="list_connector_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for Account and Opportunity entities, or query ServiceNow for the Incident entity.</td>
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
    defaultValue="describe_connector_entity"
    values={[
        { label: 'describe_connector_entity', value: 'describe_connector_entity' },
        { label: 'list_connector_entities', value: 'list_connector_entities' }
    ]}
>
<TabItem value="describe_connector_entity">

Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity.

```sql
SELECT
connectorEntityFields
FROM aws.appflow.connector_entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connector_entities">

Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for Account and Opportunity entities, or query ServiceNow for the Incident entity.

```sql
SELECT
connectorEntityMap,
nextToken
FROM aws.appflow.connector_entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
