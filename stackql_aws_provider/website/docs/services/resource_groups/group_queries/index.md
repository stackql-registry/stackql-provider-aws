--- 
title: group_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - group_queries
  - resource_groups
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

Creates, updates, deletes, gets or lists a <code>group_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.group_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group_query"
    values={[
        { label: 'get_group_query', value: 'get_group_query' }
    ]}
>
<TabItem value="get_group_query">

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
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource group that is associated with the specified resource query. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceQuery" /></td>
    <td><code>object</code></td>
    <td>The query you can use to define a resource group or a search for resources. A ResourceQuery specifies both a query Type and a Query string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see Build queries and groups in Resource Groups in the Resource Groups User Guide When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete ResourceQuery parameter must be formatted like the following CLI parameter example: --resource-query '&#123;"Type":"TAG_FILTERS_1_0","Query":"&#123;\"ResourceTypeFilters\":&#91;\"AWS::AllSupported\"&#93;,\"TagFilters\":&#91;&#123;\"Key\":\"Stage\",\"Values\":&#91;\"Test\"&#93;&#125;&#93;&#125;"&#125;' In the preceding example, all of the double quote characters in the value part of the Query element must be escaped because the value itself is surrounded by double quotes. For more information, see Quoting strings in the Command Line Interface User Guide. For the complete list of resource types that you can use in the array value for ResourceTypeFilters, see Resources you can use with Resource Groups and Tag Editor in the Resource Groups User Guide. For example: "ResourceTypeFilters":&#91;"AWS::S3::Bucket", "AWS::EC2::Instance"&#93;</td>
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
    <td><a href="#get_group_query"><CopyableCode code="get_group_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the resource query associated with the specified resource group. For more information about resource queries, see Create a tag-based group in Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetGroupQuery</td>
</tr>
<tr>
    <td><a href="#update_group_query"><CopyableCode code="update_group_query" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceQuery"><code>ResourceQuery</code></a></td>
    <td></td>
    <td>Updates the resource query of a group. For more information about resource queries, see Create a tag-based group in Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:UpdateGroupQuery</td>
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
    defaultValue="get_group_query"
    values={[
        { label: 'get_group_query', value: 'get_group_query' }
    ]}
>
<TabItem value="get_group_query">

Retrieves the resource query associated with the specified resource group. For more information about resource queries, see Create a tag-based group in Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetGroupQuery

```sql
SELECT
GroupName,
ResourceQuery
FROM aws.resource_groups.group_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_group_query"
    values={[
        { label: 'update_group_query', value: 'update_group_query' }
    ]}
>
<TabItem value="update_group_query">

Updates the resource query of a group. For more information about resource queries, see Create a tag-based group in Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:UpdateGroupQuery

```sql
UPDATE aws.resource_groups.group_queries
SET 
GroupName = '{{ GroupName }}',
Group = '{{ Group }}',
ResourceQuery = '{{ ResourceQuery }}'
WHERE 
region = '{{ region }}' --required
AND ResourceQuery = '{{ ResourceQuery }}' --required
RETURNING
GroupQuery;
```
</TabItem>
</Tabs>
