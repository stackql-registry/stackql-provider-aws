--- 
title: query_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - query_definitions
  - logs
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

Creates, updates, deletes, gets or lists a <code>query_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.query_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_query_definitions"
    values={[
        { label: 'describe_query_definitions', value: 'describe_query_definitions' }
    ]}
>
<TabItem value="describe_query_definitions">

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
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="query_definitions" /></td>
    <td><code>array</code></td>
    <td>The list of query definitions that match your request.</td>
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
    <td><a href="#describe_query_definitions"><CopyableCode code="describe_query_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions. You can retrieve query definitions from the current account or from a source account that is linked to the current account. You can use the queryDefinitionNamePrefix parameter to limit the results to only the query definitions that have names that start with a certain string.</td>
</tr>
<tr>
    <td><a href="#put_query_definition"><CopyableCode code="put_query_definition" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-queryString"><code>queryString</code></a></td>
    <td></td>
    <td>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see Analyzing Log Data with CloudWatch Logs Insights. To update a query definition, specify its queryDefinitionId in your request. The values of name, queryString, and logGroupNames are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the logGroupNames parameter in your update operation, the query definition changes to contain no log groups. You must have the logs:PutQueryDefinition permission to be able to perform this operation.</td>
</tr>
<tr>
    <td><a href="#delete_query_definition"><CopyableCode code="delete_query_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query. Each DeleteQueryDefinition operation can delete one query definition. You must have the logs:DeleteQueryDefinition permission to be able to perform this operation.</td>
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
    defaultValue="describe_query_definitions"
    values={[
        { label: 'describe_query_definitions', value: 'describe_query_definitions' }
    ]}
>
<TabItem value="describe_query_definitions">

This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions. You can retrieve query definitions from the current account or from a source account that is linked to the current account. You can use the queryDefinitionNamePrefix parameter to limit the results to only the query definitions that have names that start with a certain string.

```sql
SELECT
next_token,
query_definitions
FROM aws.logs.query_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_query_definition"
    values={[
        { label: 'put_query_definition', value: 'put_query_definition' }
    ]}
>
<TabItem value="put_query_definition">

Creates or updates a query definition for CloudWatch Logs Insights. For more information, see Analyzing Log Data with CloudWatch Logs Insights. To update a query definition, specify its queryDefinitionId in your request. The values of name, queryString, and logGroupNames are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the logGroupNames parameter in your update operation, the query definition changes to contain no log groups. You must have the logs:PutQueryDefinition permission to be able to perform this operation.

```sql
REPLACE aws.logs.query_definitions
SET 
queryLanguage = '{{ queryLanguage }}',
name = '{{ name }}',
queryDefinitionId = '{{ queryDefinitionId }}',
logGroupNames = '{{ logGroupNames }}',
queryString = '{{ queryString }}',
clientToken = '{{ clientToken }}',
parameters = '{{ parameters }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND queryString = '{{ queryString }}' --required
RETURNING
query_definition_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_query_definition"
    values={[
        { label: 'delete_query_definition', value: 'delete_query_definition' }
    ]}
>
<TabItem value="delete_query_definition">

Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query. Each DeleteQueryDefinition operation can delete one query definition. You must have the logs:DeleteQueryDefinition permission to be able to perform this operation.

```sql
DELETE FROM aws.logs.query_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
