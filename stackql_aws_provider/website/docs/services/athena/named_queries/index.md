--- 
title: named_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - named_queries
  - athena
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

Creates, updates, deletes, gets or lists a <code>named_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="named_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.named_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_named_query"
    values={[
        { label: 'batch_get_named_query', value: 'batch_get_named_query' },
        { label: 'get_named_query', value: 'get_named_query' },
        { label: 'list_named_queries', value: 'list_named_queries' }
    ]}
>
<TabItem value="batch_get_named_query">

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
    <td><CopyableCode code="named_queries" /></td>
    <td><code>array</code></td>
    <td>Information about the named query IDs submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_named_query_ids" /></td>
    <td><code>array</code></td>
    <td>Information about provided query IDs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_named_query">

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
    <td><CopyableCode code="database" /></td>
    <td><code>string</code></td>
    <td>The database to which the query belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The query description.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The query name.</td>
</tr>
<tr>
    <td><CopyableCode code="named_query_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the query. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_string" /></td>
    <td><code>string</code></td>
    <td>The SQL statements that make up the query.</td>
</tr>
<tr>
    <td><CopyableCode code="work_group" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup that contains the named query. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_named_queries">

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
    <td><CopyableCode code="named_query_id" /></td>
    <td><code>string</code></td>
    <td>The list of unique query IDs.</td>
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
    <td><a href="#batch_get_named_query"><CopyableCode code="batch_get_named_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use ListNamedQueriesInput to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under UnprocessedNamedQueryId. Named queries differ from executed queries. Use BatchGetQueryExecutionInput to get details about each unique query execution, and ListQueryExecutionsInput to get a list of query execution IDs.</td>
</tr>
<tr>
    <td><a href="#get_named_query"><CopyableCode code="get_named_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.</td>
</tr>
<tr>
    <td><a href="#list_named_queries"><CopyableCode code="list_named_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</td>
</tr>
<tr>
    <td><a href="#create_named_query"><CopyableCode code="create_named_query" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Database"><code>Database</code></a>, <a href="#parameter-QueryString"><code>QueryString</code></a></td>
    <td></td>
    <td>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</td>
</tr>
<tr>
    <td><a href="#update_named_query"><CopyableCode code="update_named_query" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NamedQueryId"><code>NamedQueryId</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-QueryString"><code>QueryString</code></a></td>
    <td></td>
    <td>Updates a NamedQuery object. The database or workgroup cannot be updated.</td>
</tr>
<tr>
    <td><a href="#delete_named_query"><CopyableCode code="delete_named_query" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the named query if you have access to the workgroup in which the query was saved.</td>
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
    defaultValue="batch_get_named_query"
    values={[
        { label: 'batch_get_named_query', value: 'batch_get_named_query' },
        { label: 'get_named_query', value: 'get_named_query' },
        { label: 'list_named_queries', value: 'list_named_queries' }
    ]}
>
<TabItem value="batch_get_named_query">

Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use ListNamedQueriesInput to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under UnprocessedNamedQueryId. Named queries differ from executed queries. Use BatchGetQueryExecutionInput to get details about each unique query execution, and ListQueryExecutionsInput to get a list of query execution IDs.

```sql
SELECT
named_queries,
unprocessed_named_query_ids
FROM aws.athena.named_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_named_query">

Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.

```sql
SELECT
database,
description,
name,
named_query_id,
query_string,
work_group
FROM aws.athena.named_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_named_queries">

Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.

```sql
SELECT
named_query_id
FROM aws.athena.named_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_named_query"
    values={[
        { label: 'create_named_query', value: 'create_named_query' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_named_query">

Creates a named query in the specified workgroup. Requires that you have access to the workgroup.

```sql
INSERT INTO aws.athena.named_queries (
Name,
Description,
Database,
QueryString,
ClientRequestToken,
WorkGroup,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ Database }}' /* required */,
'{{ QueryString }}' /* required */,
'{{ ClientRequestToken }}',
'{{ WorkGroup }}',
'{{ region }}'
RETURNING
named_query_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: named_queries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the named_queries resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The query name.
    - name: Description
      value: "{{ Description }}"
      description: |
        The query description.
    - name: Database
      value: "{{ Database }}"
      description: |
        The database to which the query belongs.
    - name: QueryString
      value: "{{ QueryString }}"
      description: |
        The contents of the query with all query statements.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another CreateNamedQuery request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the QueryString, an error is returned. This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
    - name: WorkGroup
      value: "{{ WorkGroup }}"
      description: |
        The name of the workgroup in which the named query is being created.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_named_query"
    values={[
        { label: 'update_named_query', value: 'update_named_query' }
    ]}
>
<TabItem value="update_named_query">

Updates a NamedQuery object. The database or workgroup cannot be updated.

```sql
UPDATE aws.athena.named_queries
SET 
NamedQueryId = '{{ NamedQueryId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
QueryString = '{{ QueryString }}'
WHERE 
region = '{{ region }}' --required
AND NamedQueryId = '{{ NamedQueryId }}' --required
AND Name = '{{ Name }}' --required
AND QueryString = '{{ QueryString }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_named_query"
    values={[
        { label: 'delete_named_query', value: 'delete_named_query' }
    ]}
>
<TabItem value="delete_named_query">

Deletes the named query if you have access to the workgroup in which the query was saved.

```sql
DELETE FROM aws.athena.named_queries
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
