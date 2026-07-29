--- 
title: graphql_api_environment_variables
hide_title: false
hide_table_of_contents: false
keywords:
  - graphql_api_environment_variables
  - appsync
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

Creates, updates, deletes, gets or lists a <code>graphql_api_environment_variables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="graphql_api_environment_variables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.graphql_api_environment_variables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_graphql_api_environment_variables"
    values={[
        { label: 'get_graphql_api_environment_variables', value: 'get_graphql_api_environment_variables' }
    ]}
>
<TabItem value="get_graphql_api_environment_variables">

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
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>object</code></td>
    <td>The payload containing each environmental variable in the "key" : "value" format.</td>
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
    <td><a href="#get_graphql_api_environment_variables"><CopyableCode code="get_graphql_api_environment_variables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the list of environmental variable key-value pairs associated with an API by its ID value.</td>
</tr>
<tr>
    <td><a href="#put_graphql_api_environment_variables"><CopyableCode code="put_graphql_api_environment_variables" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentVariables"><code>environmentVariables</code></a></td>
    <td></td>
    <td>Creates a list of environmental variables in an API by its ID value. When creating an environmental variable, it must follow the constraints below: Both JavaScript and VTL templates support environmental variables. Environmental variables are not evaluated before function invocation. Environmental variables only support string values. Any defined value in an environmental variable is considered a string literal and not expanded. Variable evaluations should ideally be performed in the function code. When creating an environmental variable key-value pair, it must follow the additional constraints below: Keys must begin with a letter. Keys must be at least two characters long. Keys can only contain letters, numbers, and the underscore character (_). Values can be up to 512 characters long. You can configure up to 50 key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it to the environmentVariables payload as a list in the format &#123;"key1":"value1","key2":"value2", …&#125;. Note that each call of the PutGraphqlApiEnvironmentVariables action will result in the overwriting of the existing environmental variable list of that API. This means the existing environmental variables will be lost. To avoid this, you must include all existing and new environmental variables in the list each time you call this action.</td>
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
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the API to which the environmental variable list will be written.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_graphql_api_environment_variables"
    values={[
        { label: 'get_graphql_api_environment_variables', value: 'get_graphql_api_environment_variables' }
    ]}
>
<TabItem value="get_graphql_api_environment_variables">

Retrieves the list of environmental variable key-value pairs associated with an API by its ID value.

```sql
SELECT
environment_variables
FROM aws.appsync.graphql_api_environment_variables
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_graphql_api_environment_variables"
    values={[
        { label: 'put_graphql_api_environment_variables', value: 'put_graphql_api_environment_variables' }
    ]}
>
<TabItem value="put_graphql_api_environment_variables">

Creates a list of environmental variables in an API by its ID value. When creating an environmental variable, it must follow the constraints below: Both JavaScript and VTL templates support environmental variables. Environmental variables are not evaluated before function invocation. Environmental variables only support string values. Any defined value in an environmental variable is considered a string literal and not expanded. Variable evaluations should ideally be performed in the function code. When creating an environmental variable key-value pair, it must follow the additional constraints below: Keys must begin with a letter. Keys must be at least two characters long. Keys can only contain letters, numbers, and the underscore character (_). Values can be up to 512 characters long. You can configure up to 50 key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it to the environmentVariables payload as a list in the format &#123;"key1":"value1","key2":"value2", …&#125;. Note that each call of the PutGraphqlApiEnvironmentVariables action will result in the overwriting of the existing environmental variable list of that API. This means the existing environmental variables will be lost. To avoid this, you must include all existing and new environmental variables in the list each time you call this action.

```sql
REPLACE aws.appsync.graphql_api_environment_variables
SET 
environmentVariables = '{{ environmentVariables }}'
WHERE 
api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
AND environmentVariables = '{{ environmentVariables }}' --required
RETURNING
environment_variables;
```
</TabItem>
</Tabs>
