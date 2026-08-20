--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_schema"
    values={[
        { label: 'batch_get_schema', value: 'batch_get_schema' },
        { label: 'get_schema', value: 'get_schema' },
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="batch_get_schema">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Error reasons for schemas that could not be retrieved. One error is returned for every schema that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>The retrieved list of schemas.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_schema">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name for the schema. The schema relation is referred to by this name when queried by a protected query. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_method" /></td>
    <td><code>string</code></td>
    <td>The analysis method for the schema. DIRECT_QUERY allows SQL queries to be run directly on this table. DIRECT_JOB allows PySpark jobs to be run directly on this table. MULTIPLE allows both SQL queries and PySpark jobs to be run directly on this table. (DIRECT_QUERY, DIRECT_JOB, MULTIPLE)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_rule_types" /></td>
    <td><code>array</code></td>
    <td>The analysis rule types that are associated with the schema. Currently, only one entry is present.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) for the collaboration that the schema belongs to. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the collaboration that the schema belongs to. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="columns" /></td>
    <td><code>array</code></td>
    <td>The columns for the relation that this schema represents.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique account ID for the Amazon Web Services account that owns the schema. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the schema. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="partition_keys" /></td>
    <td><code>array</code></td>
    <td>The partition keys for the dataset underlying this schema.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schema resource. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership\/&#91;\d\w-&#93;+\/(configuredtableassociation|idmappingtable)\/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_status_details" /></td>
    <td><code>array</code></td>
    <td>Details about the status of the schema. Currently, only one entry is present.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_type_properties" /></td>
    <td><code>object</code></td>
    <td>The schema type properties.</td>
</tr>
<tr>
    <td><CopyableCode code="selected_analysis_methods" /></td>
    <td><code>array</code></td>
    <td>The selected analysis methods for the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of schema. (TABLE, ID_MAPPING_TABLE, INTERMEDIATE_TABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the schema was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schemas">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the schema object. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_method" /></td>
    <td><code>string</code></td>
    <td>The analysis method for the associated schema. DIRECT_QUERY allows SQL queries to be run directly on this table. DIRECT_JOB allows PySpark jobs to be run directly on this table. MULTIPLE allows both SQL queries and PySpark jobs to be run directly on this table. (DIRECT_QUERY, DIRECT_JOB, MULTIPLE)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_rule_types" /></td>
    <td><code>array</code></td>
    <td>The types of analysis rules that are associated with this schema object.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the collaboration that the schema belongs to. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the collaboration that the schema belongs to. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the schema object was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique account ID for the Amazon Web Services account that owns the schema. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schema summary resource. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership\/&#91;\d\w-&#93;+\/(configuredtableassociation|idmappingtable)\/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_analysis_methods" /></td>
    <td><code>array</code></td>
    <td>The selected analysis methods for the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of schema object. (TABLE, ID_MAPPING_TABLE, INTERMEDIATE_TABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the schema object was last updated.</td>
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
    <td><a href="#batch_get_schema"><CopyableCode code="batch_get_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple schemas by their identifiers.</td>
</tr>
<tr>
    <td><a href="#get_schema"><CopyableCode code="get_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the schema for a relation within a collaboration.</td>
</tr>
<tr>
    <td><a href="#list_schemas"><CopyableCode code="list_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-schemaType"><code>schemaType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the schemas for relations within a collaboration.</td>
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
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the relation to retrieve the schema for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
<tr id="parameter-schemaType">
    <td><CopyableCode code="schemaType" /></td>
    <td><code>string</code></td>
    <td>If present, filter schemas by schema type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_schema"
    values={[
        { label: 'batch_get_schema', value: 'batch_get_schema' },
        { label: 'get_schema', value: 'get_schema' },
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="batch_get_schema">

Retrieves multiple schemas by their identifiers.

```sql
SELECT
errors,
schemas
FROM aws.cleanrooms.schemas
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_schema">

Retrieves the schema for a relation within a collaboration.

```sql
SELECT
name,
analysis_method,
analysis_rule_types,
collaboration_arn,
collaboration_id,
columns,
create_time,
creator_account_id,
description,
partition_keys,
resource_arn,
schema_status_details,
schema_type_properties,
selected_analysis_methods,
type_,
update_time
FROM aws.cleanrooms.schemas
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_schemas">

Lists the schemas for relations within a collaboration.

```sql
SELECT
name,
analysis_method,
analysis_rule_types,
collaboration_arn,
collaboration_id,
create_time,
creator_account_id,
resource_arn,
selected_analysis_methods,
type_,
update_time
FROM aws.cleanrooms.schemas
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND schemaType = '{{ schemaType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
